UPDATE faqs 
SET answer = 'MaxRacing dampers are engineered for long-term durability. We have numerous reports from long-term customers who have been using the same equipment for more than 15 years. Routine maintenance is not required; if leaking oil or loss of pressure, it will be promptly substituted.' 
WHERE question = 'How long can I expect a MaxRacing damper to last?';

UPDATE faqs 
SET answer = 'MaxRacing components are engineered, produced and assembled in-house by our specialized team, ensuring that every damper meets our strict internal tolerances before it reaches your machine.' 
WHERE question = 'Are MaxRacing parts made locally or overseas?';

UPDATE faqs 
SET answer = 'Yes. While steering dampers are our core expertise, we also engineer high-performance clip-ons (semihandlebars) and adjustable rearsets.' 
WHERE question = 'Does MaxRacing offer products other than steering dampers?';

UPDATE faqs 
SET answer = 'Both. While track use involves higher speeds, city streets often have potholes, ruts, and expansion joints that can trigger instability regardless of speed. A damper provides a safety net for both environments.' 
WHERE question = 'Do I need a steering damper for street riding or only track use?';

UPDATE faqs 
SET answer = 'Most kits are designed to be ''plug-and-play.'' No drilling, cutting, or permanent modification is required; however, a few kits require plastic trimming (this will be explicitly stated in the product description).' 
WHERE question = 'Do I need to modify my motorcycle to install a MaxRacing damper?';

UPDATE faqs 
SET question = 'Can I use a MaxRacing damper on a custom build?', 
    answer = 'No, we do not offer universal kits. All MaxRacing steering dampers are designed with bike-specific mounting hardware to ensure perfect fitment and safety geometry.' 
WHERE question = 'Can I use a MaxRacing damper on a custom or universal build?';

UPDATE faqs 
SET answer = 'Each kit includes high-resolution digital instructions. You can also view our general installation guide on the website.' 
WHERE question = 'Where can I find detailed installation instructions?';

-- Also update the installation_sections seed data to remove "universal"
UPDATE installation_sections SET slug = 'general', label = 'Important Notice' WHERE slug = 'universal' AND display_order = 0;
UPDATE installation_sections SET slug = 'general' WHERE slug = 'universal';
UPDATE installation_tools SET section_id = 'general' WHERE section_id = 'universal';
UPDATE torque_recommendations SET section_id = 'general' WHERE section_id = 'universal';

