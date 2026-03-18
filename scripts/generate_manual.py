import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, ActionFlowable, Flowable
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.pdfgen import canvas
from deep_translator import GoogleTranslator

import sys

TXT_DIR = '/Users/andersonvalle/Downloads/MAXRACING_LOVABLE_RAG_BASE'
OUTPUT_DIR = '/Users/andersonvalle/Downloads/max-race-craft-main/public'

def is_valid_file(f):
    if not f.endswith('.txt'): return False
    f_lower = f.lower()
    import unicodedata
    normalized = unicodedata.normalize('NFD', f_lower).encode('ascii', 'ignore').decode('utf-8')
    return 'ingles' not in normalized

MANUAL_FILES = sorted([f for f in os.listdir(TXT_DIR) if is_valid_file(f)])

def translate_text(text, target_lang='en'):
    if target_lang.lower() == 'pt':
        return text
    if not text.strip():
        return ""
    try:
        translated = GoogleTranslator(source='pt', target=target_lang).translate(text)
        return translated
    except Exception as e:
        return text

def guess_brand(model_name):
    m_upper = model_name.upper()
    if any(x in m_upper for x in ['CB', 'CRF', 'XRE', 'NC ', 'TRANSALP', 'FALCON', 'TWISTER', 'AFRICA TWIN']): return 'Honda'
    if any(x in m_upper for x in ['YZF', 'MT', 'XT', 'FAZER', 'TENERE', 'XJ', 'RD', 'VMAX', 'LANDER', 'FACTOR']): return 'Yamaha'
    if any(x in m_upper for x in ['GSX', 'BANDIT', 'DL ', 'V STROM', 'SV ', 'HAYABUSA', 'B KING', 'GLADIUS', 'DRZ']): return 'Suzuki'
    if any(x in m_upper for x in ['Z ', 'Z_', 'ZX', 'NINJA', 'VERSYS', 'ER ', 'ER_']): return 'Kawasaki'
    if any(x in m_upper for x in ['DUKE', 'RC ', 'EXC', 'SX', 'ADVENTURE']): return 'KTM'
    if any(x in m_upper for x in ['TIGER', 'DAYTONA', 'STREET TRIPLE', 'SPEED TRIPLE']): return 'Triumph'
    if any(x in m_upper for x in ['GS', 'S 1000', 'F 800', 'F 650']): return 'BMW'
    if any(x in m_upper for x in ['MONSTER', 'PANIGALE', 'MULTISTRADA', 'HYPERMOTARD', 'DIAVEL', 'DUCATI', 'PANIGALI', 'HYPERSTRADA']): return 'Ducati'
    if any(x in m_upper for x in ['BRUTALE', 'F3', 'F4', 'DRAGSTER', 'MV AGUSTA']): return 'MV Agusta'
    if any(x in m_upper for x in ['XB', '1125']): return 'Buell'
    if any(x in m_upper for x in ['DYNA', 'LOW RIDER', 'FAT BOY', 'HARLEY', 'SPORTSTER']): return 'Harley Davidson'
    if any(x in m_upper for x in ['FC ']): return 'Husqvarna'
    return ''

class BlackBackgroundDoc(SimpleDocTemplate):
    def beforePage(self):
        self.canv.saveState()
        self.canv.setFillColor(colors.HexColor('#0a0a0a'))
        self.canv.rect(0, 0, self.pagesize[0], self.pagesize[1], fill=True, stroke=False)
        self.canv.setFillColor(colors.HexColor('#FF5500'))
        self.canv.setFont("Helvetica-Bold", 10)
        self.canv.drawString(72, self.pagesize[1] - 36, "MAXRACING | DEALER PORTAL")
        self.canv.setFillColor(colors.HexColor('#444444'))
        self.canv.drawString(self.pagesize[0] - 100, 36, f"Page {self.canv._pageNumber}")
        self.canv.restoreState()

class Bookmark(Flowable):
    def __init__(self, title, key):
        Flowable.__init__(self)
        self.title = title
        self.key = key
        self.width = 0
        self.height = 0
    def draw(self):
        self.canv.bookmarkPage(self.key)
        self.canv.addOutlineEntry(self.title, self.key, 0, 0)

def create_pdf(target_lang='en'):
    lang_upper = target_lang.upper()
    output_path = os.path.join(OUTPUT_DIR, f'Universal_Dealer_Manual_{lang_upper}_v2.pdf')
    
    doc = BlackBackgroundDoc(output_path, pagesize=A4, rightMargin=72, leftMargin=72, topMargin=72, bottomMargin=72)
    styles = getSampleStyleSheet()
    
    title_style = ParagraphStyle('MainTitle', parent=styles['Heading1'], fontName='Helvetica-Bold', fontSize=32, spaceAfter=30, textColor=colors.HexColor('#FF5500'), alignment=1)
    subtitle_style = ParagraphStyle('Subtitle', parent=styles['Heading2'], fontName='Helvetica', fontSize=18, spaceAfter=20, textColor=colors.HexColor('#FFFFFF'), alignment=1)
    toc_heading_style = ParagraphStyle('TOCHead', parent=styles['Heading2'], fontName='Helvetica-Bold', fontSize=24, spaceAfter=20, textColor=colors.HexColor('#FFFFFF'))
    toc_link_style = ParagraphStyle('TOCLink', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=11, spaceAfter=6, textColor=colors.HexColor('#FF5500'))
    
    bike_title_style = ParagraphStyle('BikeTitle', parent=styles['Heading2'], fontName='Helvetica-Bold', fontSize=24, spaceBefore=30, spaceAfter=20, textColor=colors.HexColor('#FFFFFF'), borderPadding=15, backColor=colors.HexColor('#1a1a1a'), borderColor=colors.HexColor('#FF5500'), borderWidth=1, borderRadius=5)
    body_style = ParagraphStyle('CustomBody', parent=styles['Normal'], fontName='Helvetica', fontSize=12, spaceAfter=12, leading=18, textColor=colors.HexColor('#CCCCCC'))
    
    Story = []
    
    # Cover Text Dictionaries
    cover_dealer = {
        'en': 'DEALER SUPPORT PORTAL',
        'pt': 'PORTAL DE SUPORTE AO REVENDEDOR',
        'es': 'PORTAL DE SOPORTE PARA DISTRIBUIDORES',
        'fr': "PORTAIL D'ASSISTANCE AUX REVENDEURS",
        'it': 'PORTALE DI SUPPORTO PER RIVENDITORI',
        'de': 'HÄNDLER-SUPPORT-PORTAL'
    }
    cover_install = {
        'en': 'INSTALLATION MANUALS',
        'pt': 'MANUAIS DE INSTALAÇÃO',
        'es': 'MANUALES DE INSTALACIÓN',
        'fr': "MANUELS D'INSTALLATION",
        'it': 'MANUALI DI INSTALLAZIONE',
        'de': 'INSTALLATIONSHANDBÜCHER'
    }
    
    # Cover
    Story.append(Spacer(1, 2*inch))
    Story.append(Paragraph("MAXRACING", title_style))
    Story.append(Paragraph(cover_dealer.get(target_lang, cover_dealer['en']), subtitle_style))
    Story.append(Spacer(1, 0.5*inch))
    Story.append(Paragraph(cover_install.get(target_lang, cover_install['en']), ParagraphStyle('Sub2', parent=subtitle_style, textColor=colors.HexColor('#FF5500'), fontSize=16)))
    Story.append(PageBreak())
    
    PROCESS_LIMIT = len(MANUAL_FILES)
    print(f"Total files: {len(MANUAL_FILES)}. Processing ALL {PROCESS_LIMIT}.")
    
    # Generate Table of Contents Data
    toc_title = "TABLE OF CONTENTS" if target_lang == 'en' else "ÍNDICE" if target_lang == 'pt' else "ÍNDICE" if target_lang == 'es' else "TABLE DES MATIÈRES" if target_lang == 'fr' else "INHALTSVERZEICHNIS" if target_lang == 'de' else "SOMMARIO"
    hint_text = "Click any model below to jump directly to its manual." if target_lang == 'en' else "Clique em qualquer modelo abaixo para pular direto para o manual." if target_lang == 'pt' else "Haga clic en cualquier modelo para saltar a su manual." if target_lang == 'es' else "Cliquez sur un modèle ci-dessous pour accéder à son manuel." if target_lang == 'fr' else "Klicken Sie auf ein beliebiges Modell unten, um direkt zu dessen Handbuch zu springen." if target_lang == 'de' else "Clicca su qualsiasi modello per saltare al suo manuale."
    
    Story.append(Paragraph(toc_title, toc_heading_style))
    Story.append(Paragraph(f"<font color='#CCCCCC'><i>{hint_text}</i></font>", body_style))
    Story.append(Spacer(1, 0.2*inch))
    
    bike_models = []
    for filename in MANUAL_FILES[:PROCESS_LIMIT]:
        # Clean the basic name
        raw_name = filename.replace('.txt', '').replace('_', ' ').upper()
        
        # Determine the brand and prefix it if it's missing
        brand = guess_brand(raw_name).upper()
        if brand and brand not in raw_name:
            bike_name = f"{brand} {raw_name}"
        else:
            bike_name = raw_name
            
        bike_key = filename.replace('.txt', '')
        bike_models.append((bike_name, bike_key, filename))
        
    # Chunk into columns? Reportlab handles flow, we just list them.
    for name, key, _ in bike_models:
        Story.append(Paragraph(f"<a href='#{key}' color='#FF5500'>{name}</a>", toc_link_style))
        
    Story.append(PageBreak())
    
    for i, (bike_name, bike_key, filename) in enumerate(bike_models):
        filepath = os.path.join(TXT_DIR, filename)
        if not os.path.exists(filepath): continue
            
        print(f"[{i+1}/{PROCESS_LIMIT}] Processing {filename}...")
        
        # Add Bookmark and Anchor
        Story.append(Bookmark(bike_name, bike_key))
        Story.append(Paragraph(f"<a name='{bike_key}'/>{bike_name}", bike_title_style))
        Story.append(Spacer(1, 0.2*inch))
        
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        lines = content.split('\n')
        started_instructions = False
        
        for line in lines:
            line = line.strip()
            if not line or line.startswith('[PAGE'):
                continue
            
            # If line contains the header string, process it
            header_str = 'INSTRUÇÕES DE MONTAGEM'
            if header_str in line:
                # Check if instructions (e.g. "1. ") exist on this same line
                if '1. ' in line:
                    # Keep only the part that starts with "1. "
                    line = '1. ' + line.split('1. ', 1)[1]
                else:
                    # It's just a garbage title string like ". 1125 R - - BUELL 1125R"
                    continue
            
            # Now handle multiline instructions that might be grouped into one line 
            # (e.g. "1. do this. 2. do that.")
            import re
            
            # Split by " N. " where N is a digit
            steps = re.split(r'(?=\s\d+\.)', line)
            
            for step in steps:
                step = step.strip()
                if not step:
                    continue
                
                # Verify if this step is a valid instruction format
                is_instruction = bool(re.match(r'^(\d+\.|-)\s', step))
                
                # If we haven't seen an instruction yet, dump anything that doesn't look like an instruction
                if not started_instructions:
                    if not is_instruction:
                        continue
                    started_instructions = True
                
                translated_step = translate_text(step, target_lang)
                
                # Format bullets
                if re.match(r'^\d+\.', translated_step):
                    parts = translated_step.split('.', 1)
                    if len(parts) == 2:
                        translated_step = f"<font color='#FF5500'><b>{parts[0]}.</b></font>{parts[1]}"
                elif translated_step.startswith('-'):
                    translated_step = f"<font color='#FF5500'><b>•</b></font> {translated_step[1:]}"
                    
                Story.append(Paragraph(translated_step, body_style))
            
        # Back to TOC link
        Story.append(Spacer(1, 0.3*inch))
        back_text = "↑ Back to Table of Contents" if target_lang == 'en' else "↑ Voltar ao Índice" if target_lang == 'pt' else "↑ Volver al Índice" if target_lang == 'es' else "↑ Retour à la Table des Matières" if target_lang == 'fr' else "↑ Zurück zum Inhaltsverzeichnis" if target_lang == 'de' else "↑ Torna al Sommario"
        Story.append(Paragraph(f"<a href='#TOC' color='#666666'>{back_text}</a>", body_style))
        Story.append(PageBreak())
        
    # Insert a TOC bookmark so the "Back to TOC" links work
    Story.insert(6, Bookmark(toc_title, "TOC"))
    Story.insert(7, Paragraph("<a name='TOC'/>", body_style))
        
    print(f"Building Professional PDF [{lang_upper}] with TOC at {output_path}...")
    doc.build(Story)
    print("Done!")

if __name__ == '__main__':
    lang = sys.argv[1].lower() if len(sys.argv) > 1 else 'en'
    create_pdf(lang)
