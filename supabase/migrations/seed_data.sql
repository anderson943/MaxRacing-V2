-- Comprehensive Seed Data for MaxRacing
DO $$
DECLARE
    b_id UUID;
BEGIN
    -- 1. Brands and Motorcycles
    INSERT INTO brands (name, slug) VALUES ('AJP', 'ajp') ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO b_id;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'PR4', 'ajp-pr4', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'PR5', 'ajp-pr5', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO brands (name, slug) VALUES ('BMW', 'bmw') ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO b_id;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'F650 GS', 'bmw-f650-gs', 'Adventure / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'F700 GS', 'bmw-f700-gs', 'Adventure / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'F800 GS', 'bmw-f800-gs', 'Adventure / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'G 310 GS', 'bmw-g-310-gs', 'Adventure / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'R1200 GS', 'bmw-r1200-gs', 'Adventure / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'S1000R', 'bmw-s1000r', 'Naked / Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'S1000RR', 'bmw-s1000rr', 'Sport / Supersport') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'S1000XR', 'bmw-s1000xr', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO brands (name, slug) VALUES ('Bimota', 'bimota') ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO b_id;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'BB3', 'bimota-bb3', 'Sport / Supersport') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO brands (name, slug) VALUES ('Buell', 'buell') ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO b_id;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, '1125R', 'buell-1125r', 'Sport / Supersport') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'XB9', 'buell-xb9', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'XB12', 'buell-xb12', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'XB12X Ulysses', 'buell-xb12x-ulysses', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO brands (name, slug) VALUES ('Ducati', 'ducati') ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO b_id;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, '848', 'ducati-848', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, '959', 'ducati-959', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, '1098', 'ducati-1098', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, '1199 Panigale', 'ducati-1199-panigale', 'Sport / Supersport') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, '1299 Panigale', 'ducati-1299-panigale', 'Sport / Supersport') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Hypermotard', 'ducati-hypermotard', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Hyperstrada', 'ducati-hyperstrada', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Monster', 'ducati-monster', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Multistrada', 'ducati-multistrada', 'Adventure / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Panigale V4', 'ducati-panigale-v4', 'Sport / Supersport') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO brands (name, slug) VALUES ('GasGas', 'gasgas') ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO b_id;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'EC 200', 'gasgas-ec-200', 'Enduro / Off-Road') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'EC 250', 'gasgas-ec-250', 'Enduro / Off-Road') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'EC 300', 'gasgas-ec-300', 'Enduro / Off-Road') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO brands (name, slug) VALUES ('Harley Davidson', 'harley-davidson') ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO b_id;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Dyna', 'harley-davidson-dyna', 'Cruiser / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO brands (name, slug) VALUES ('Honda', 'honda') ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO b_id;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'CB 1000R', 'honda-cb-1000r', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'CB 300R', 'honda-cb-300r', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'CB 500', 'honda-cb-500', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'CB 600F Hornet', 'honda-cb-600f-hornet', 'Naked / Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'CB 650F', 'honda-cb-650f', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'CB 650R', 'honda-cb-650r', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'CB 1300', 'honda-cb-1300', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'CBX 200', 'honda-cbx-200', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'CBX 250 Twister', 'honda-cbx-250-twister', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'CG 125', 'honda-cg-125', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'CG 150', 'honda-cg-150', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'CG 160', 'honda-cg-160', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'CBR 250R', 'honda-cbr-250r', 'Sport / Supersport') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'CBR 500R', 'honda-cbr-500r', 'Sport / Supersport') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'CBR 600F', 'honda-cbr-600f', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'CBR 600RR', 'honda-cbr-600rr', 'Sport / Supersport') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'CBR 650F', 'honda-cbr-650f', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'CBR 650R', 'honda-cbr-650r', 'Sport / Supersport') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'CBR 900RR', 'honda-cbr-900rr', 'Sport / Supersport') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'CBR 929RR', 'honda-cbr-929rr', 'Sport / Supersport') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'CBR 954RR', 'honda-cbr-954rr', 'Sport / Supersport') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'CBR 1000RR', 'honda-cbr-1000rr', 'Sport / Supersport') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'CRF 230F', 'honda-crf-230f', 'Enduro / Off-Road') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'CRF 250', 'honda-crf-250', 'Enduro / Off-Road') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'CRF 450', 'honda-crf-450', 'Enduro / Off-Road') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'CRF 1000L Africa Twin', 'honda-crf-1000l-africa-twin', 'Adventure / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'CRF 1100L Africa Twin', 'honda-crf-1100l-africa-twin', 'Adventure / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'NC 700', 'honda-nc-700', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'NC 750', 'honda-nc-750', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'NX 400 Falcon', 'honda-nx-400-falcon', 'Adventure / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Transalp 700', 'honda-transalp-700', 'Adventure / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Varadero 1000', 'honda-varadero-1000', 'Adventure / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'XRE 190', 'honda-xre-190', 'Adventure / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'XRE 300', 'honda-xre-300', 'Adventure / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO brands (name, slug) VALUES ('Husaberg', 'husaberg') ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO b_id;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'FE 350', 'husaberg-fe-350', 'Enduro / Off-Road') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'FE 450', 'husaberg-fe-450', 'Enduro / Off-Road') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO brands (name, slug) VALUES ('Husqvarna', 'husqvarna') ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO b_id;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'FC 450', 'husqvarna-fc-450', 'Motocross / Supermoto') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO brands (name, slug) VALUES ('KTM', 'ktm') ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO b_id;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Duke 200', 'ktm-duke-200', 'Naked / Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Duke 390', 'ktm-duke-390', 'Naked / Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, '690 Enduro', 'ktm-690-enduro', 'Enduro / Off-Road') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, '950 Adventure', 'ktm-950-adventure', 'Adventure / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, '990 Adventure', 'ktm-990-adventure', 'Adventure / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, '990 SMR', 'ktm-990-smr', 'Motocross / Supermoto') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, '990 SMT', 'ktm-990-smt', 'Sport Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, '1050 Adventure', 'ktm-1050-adventure', 'Adventure / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, '1090 Adventure', 'ktm-1090-adventure', 'Adventure / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, '1190 Adventure', 'ktm-1190-adventure', 'Adventure / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, '1290 Adventure', 'ktm-1290-adventure', 'Adventure / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, '300 SX', 'ktm-300-sx', 'Motocross / Supermoto') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'EXC', 'ktm-exc', 'Enduro / Off-Road') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, '350 EXC-F', 'ktm-350-exc-f', 'Enduro / Off-Road') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, '350 SX-F', 'ktm-350-sx-f', 'Motocross / Supermoto') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO brands (name, slug) VALUES ('Kawasaki', 'kawasaki') ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO b_id;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'ER6N', 'kawasaki-er6n', 'Naked / Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Ninja 250', 'kawasaki-ninja-250', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Ninja 300', 'kawasaki-ninja-300', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Ninja 400', 'kawasaki-ninja-400', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Ninja 650', 'kawasaki-ninja-650', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Ninja 1000', 'kawasaki-ninja-1000', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Versys 300', 'kawasaki-versys-300', 'Adventure / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Versys 650', 'kawasaki-versys-650', 'Adventure / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Versys 1000', 'kawasaki-versys-1000', 'Adventure / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Z300', 'kawasaki-z300', 'Naked / Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Z400', 'kawasaki-z400', 'Naked / Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Z650', 'kawasaki-z650', 'Naked / Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Z750', 'kawasaki-z750', 'Naked / Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Z800', 'kawasaki-z800', 'Naked / Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Z900', 'kawasaki-z900', 'Naked / Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Z1000', 'kawasaki-z1000', 'Naked / Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'ZX-6R', 'kawasaki-zx-6r', 'Sport / Supersport') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'ZX-7R', 'kawasaki-zx-7r', 'Sport / Supersport') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'ZX-9R', 'kawasaki-zx-9r', 'Sport / Supersport') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'ZX-10R', 'kawasaki-zx-10r', 'Sport / Supersport') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'ZX-11R', 'kawasaki-zx-11r', 'Sport / Supersport') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'ZX-12R', 'kawasaki-zx-12r', 'Sport / Supersport') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'ZX-14R', 'kawasaki-zx-14r', 'Sport / Supersport') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO brands (name, slug) VALUES ('MV Agusta', 'mv-agusta') ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO b_id;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Brutale', 'mv-agusta-brutale', 'Naked / Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'F3', 'mv-agusta-f3', 'Sport / Supersport') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'F4', 'mv-agusta-f4', 'Sport / Supersport') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Rivale', 'mv-agusta-rivale', 'Naked / Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO brands (name, slug) VALUES ('Suzuki', 'suzuki') ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO b_id;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'B-King', 'suzuki-b-king', 'Naked / Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Bandit', 'suzuki-bandit', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Boulevard', 'suzuki-boulevard', 'Cruiser / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'DL650 V-Strom', 'suzuki-dl650-v-strom', 'Adventure / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'DL1000 V-Strom', 'suzuki-dl1000-v-strom', 'Adventure / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'DRZ 400', 'suzuki-drz-400', 'Enduro / Off-Road') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'GS 500', 'suzuki-gs-500', 'Adventure / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'GSR 600', 'suzuki-gsr-600', 'Naked / Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'GSR 750', 'suzuki-gsr-750', 'Naked / Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'GSX-8R', 'suzuki-gsx-8r', 'Motocross / Supermoto') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'GSX-8S', 'suzuki-gsx-8s', 'Motocross / Supermoto') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'GSX-R 600', 'suzuki-gsx-r-600', 'Motocross / Supermoto') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'GSX-R 1000', 'suzuki-gsx-r-1000', 'Motocross / Supermoto') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'GSX-S 750', 'suzuki-gsx-s-750', 'Motocross / Supermoto') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'GSX-S 1000', 'suzuki-gsx-s-1000', 'Motocross / Supermoto') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'GSX-S 1000GX', 'suzuki-gsx-s-1000gx', 'Motocross / Supermoto') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'GSX 1250', 'suzuki-gsx-1250', 'Motocross / Supermoto') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'GSX 650F', 'suzuki-gsx-650f', 'Motocross / Supermoto') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Hayabusa', 'suzuki-hayabusa', 'Sport / Supersport') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'SV650', 'suzuki-sv650', 'Naked / Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'RF900', 'suzuki-rf900', 'Sport / Supersport') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO brands (name, slug) VALUES ('SYM', 'sym') ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO b_id;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'T2 250i', 'sym-t2-250i', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO brands (name, slug) VALUES ('Triumph', 'triumph') ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO b_id;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Bonneville', 'triumph-bonneville', 'Naked / Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Daytona', 'triumph-daytona', 'Sport / Supersport') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Scrambler 1200', 'triumph-scrambler-1200', 'Naked / Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Speed Triple', 'triumph-speed-triple', 'Naked / Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Street Triple', 'triumph-street-triple', 'Naked / Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Tiger', 'triumph-tiger', 'Adventure / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Trident 660', 'triumph-trident-660', 'Naked / Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Thruxton', 'triumph-thruxton', 'Naked / Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO brands (name, slug) VALUES ('Yamaha', 'yamaha') ON CONFLICT (name) DO UPDATE SET name = EXCLUDED.name RETURNING id INTO b_id;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Fazer', 'yamaha-fazer', 'Sport Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'MT-03', 'yamaha-mt-03', 'Naked / Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'MT-07', 'yamaha-mt-07', 'Naked / Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'MT-09', 'yamaha-mt-09', 'Naked / Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'R3', 'yamaha-r3', 'Sport / Supersport') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'RD 135', 'yamaha-rd-135', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'RD 350', 'yamaha-rd-350', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Super Ténéré', 'yamaha-super-t-n-r', 'Adventure / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'TDM', 'yamaha-tdm', 'Sport Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Tracer 900', 'yamaha-tracer-900', 'Sport Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'Ténéré', 'yamaha-t-n-r', 'Adventure / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'V-Max', 'yamaha-v-max', 'Cruiser / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'WR', 'yamaha-wr', 'Enduro / Off-Road') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'XJ6', 'yamaha-xj6', 'Street') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'XTZ', 'yamaha-xtz', 'Adventure / Touring') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'YZF R1', 'yamaha-yzf-r1', 'Sport / Supersport') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'YZF R3', 'yamaha-yzf-r3', 'Sport / Supersport') ON CONFLICT (slug) DO NOTHING;
    INSERT INTO motorcycles (brand_id, model, slug, segment) VALUES (b_id, 'YZF R6', 'yamaha-yzf-r6', 'Sport / Supersport') ON CONFLICT (slug) DO NOTHING;

    -- 2. FAQs (10 Categories, 54 Questions)
    INSERT INTO faq_categories (id, title, description, display_order) VALUES 
    ('10000000-0000-0000-0000-000000000001', 'General Information', 'Getting to know MaxRacing and our mission.', 0),
    ('10000000-0000-0000-0000-000000000002', 'Engineering & Technology', 'Understanding the physics and mechanics of MaxRacing steering control.', 1),
    ('10000000-0000-0000-0000-000000000003', 'Technical Specifications', 'Detailed specs and materials used in our products.', 2),
    ('10000000-0000-0000-0000-000000000004', 'Fitment & Compatibility', 'Find out if a MaxRacing damper fits your motorcycle.', 3),
    ('10000000-0000-0000-0000-000000000005', 'Installation', 'Everything you need to know about installing your damper.', 4),
    ('10000000-0000-0000-0000-000000000006', 'Adjustment & Tuning', 'Get the most out of your steering damper.', 5),
    ('10000000-0000-0000-0000-000000000007', 'Maintenance & Longevity', 'Keep your damper performing at its best.', 6),
    ('10000000-0000-0000-0000-000000000008', 'Ordering & Dealer Program', 'Information about purchasing and becoming a dealer.', 7),
    ('10000000-0000-0000-0000-000000000009', 'Safety & Performance', 'How our dampers keep you safer on the road and track.', 8),
    ('10000000-0000-0000-0000-000000000010', 'Warranty & Support', 'Our commitment to quality and customer satisfaction.', 9)
    ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description, display_order = EXCLUDED.display_order;

    INSERT INTO faqs (category_id, question, answer, display_order) VALUES
    -- General Information
    ('10000000-0000-0000-0000-000000000001', 'What is MaxRacing?', 'Founded in 2010, MaxRacing delivers race-grade steering control designed for mid-range and sport motorcycles. We bridge the gap between expensive European brands and entry-level dampers.', 0),
    ('10000000-0000-0000-0000-000000000001', 'What makes MaxRacing ''premium''?', 'Quality is in our DNA. We use premium Aluminium 7075-T6, precision hydraulic valving, and high-grade synthetic oil. Every unit is finished with specialized racing-grade anodizing and protective coatings for maximum durability. Every unit is rebuildable and backed by a 3-year warranty.', 1),
    ('10000000-0000-0000-0000-000000000001', 'How does MaxRacing compare on materials to Öhlins, Hyperpro, Bitubo, GPR?', 'MaxRacing uses premium Aluminium 7075-T6, often surpassing the standard 6061 billet aluminum used by some competitors. We combine this high-grade alloy with advanced surface coatings to ensure superior strength and consistency.', 2),
    ('10000000-0000-0000-0000-000000000001', 'How long can I expect a MaxRacing damper to last?', 'MaxRacing dampers are engineered for long-term durability. We have numerous reports from long-term customers who have been using the same equipment for more than 15 years. Because every unit is rebuildable, periodic maintenance of seals and oil ensures a lifespan that can match the life of your motorcycle.', 3),
    ('10000000-0000-0000-0000-000000000001', 'Are MaxRacing parts made locally or overseas?', 'MaxRacing components are engineered and assembled by our specialized teams, ensuring that every damper meets our strict internal tolerances before it reaches your machine.', 4),
    ('10000000-0000-0000-0000-000000000001', 'Does MaxRacing offer products other than steering dampers?', 'Yes. While steering dampers are our core expertise, we also engineer high-performance clip-ons (semihandlebars), adjustable rearsets, bar clamps, and CNC-machined levers.', 4),
    ('10000000-0000-0000-0000-000000000001', 'Does MaxRacing offer semihandlebars (clip-ons)?', 'Yes, we offer CNC-machined adjustable clip-ons designed for both track and street use, providing superior ergonomics and durability.', 5),

    -- Engineering & Technology
    ('10000000-0000-0000-0000-000000000002', 'What is a steering damper and why do I need one?', 'A steering damper is a hydraulic device that resists sudden, uncontrolled handlebar movement. You need one to maintain stability over bumps, during hard acceleration, and to prevent dangerous speed wobbles.', 0),
    ('10000000-0000-0000-0000-000000000002', 'What is a tank slapper and how does a steering damper prevent it?', 'A tank slapper is a violent oscillation of the handlebars. A hydraulic damper absorbs the energy of these sudden movements through precision valving, slowing the oscillation before it becomes uncontrollable.', 1),
    ('10000000-0000-0000-0000-000000000002', 'How does the MaxRacing hydraulic damping system work internally?', 'It uses a speed-sensitive piston. At low speeds (turning), oil passes freely through large ports. At high speeds (impacts), the oil is forced through smaller calibrated orifices, creating resistance that stabilizes the front end.', 2),
    ('10000000-0000-0000-0000-000000000002', 'What is progressive damping?', 'Unlike friction dampers which provide constant resistance, progressive hydraulic damping increases resistance exponentially as the speed of the handlebar movement increases.', 3),
    ('10000000-0000-0000-0000-000000000002', 'Do I need a steering damper for street riding or only track use?', 'Both. While track use involves higher speeds, city streets often have potholes, ruts, and expansion joints that can trigger instability. A damper provides a safety net for both environments.', 4),

    -- Technical Specifications
    ('10000000-0000-0000-0000-000000000003', 'What materials are MaxRacing dampers made from?', 'The primary body and brackets are CNC-machined from premium Aluminium 7075-T6. Every unit features high-resistance racing-grade anodizing and protective coatings. The rods are hardened stainless steel for wear resistance and perfect seal seating.', 0),
    ('10000000-0000-0000-0000-000000000003', 'How do I choose between MAX10 and MAX20?', 'Choose based on engine size. The MAX10 is tuned for motorcycles under 500cc (Ninja 400, R3, etc.). The MAX20 is designed for larger machines (MT-09, GSX-S1000, etc.) that require a broader damping range.', 1),
    ('10000000-0000-0000-0000-000000000003', 'How many adjustment levels does a MaxRacing damper have?', 'MaxRacing offers two models: the MAX10 with 10 clicks of precision adjustment and the MAX20 with 20 clicks for broader tuning range.', 2),
    ('10000000-0000-0000-0000-000000000003', 'What is the stroke range of MaxRacing dampers?', 'MaxRacing dampers are designed with a generous stroke range to accommodate a wide variety of machines. Specific stroke measurements are kit-dependent to ensure no bottoming out at full lock.', 3),
    ('10000000-0000-0000-0000-000000000003', 'What colors are available for MaxRacing dampers?', 'We offer 7 primary colors: Black, Red, Blue, Gold, Green, Silver, and Orange.', 4),
    ('10000000-0000-0000-0000-000000000003', 'Do colors affect performance or only aesthetics?', 'Colors are purely aesthetic. All dampers, regardless of color, feature the same internal race-grade hydraulic components.', 5),
    ('10000000-0000-0000-0000-000000000003', 'Can I mix base and adjuster colors?', 'Yes. With 7 body colors and 7 adjuster colors, you can create up to 49 unique combinations to match your bike.', 6),
    ('10000000-0000-0000-0000-000000000003', 'What type of seals does MaxRacing use?', 'We use high-performance oil seals designed for high-frequency oscillation and resistance to varied weather conditions.', 7),

    -- Fitment & Compatibility
    ('10000000-0000-0000-0000-000000000004', 'How do I know if a MaxRacing damper fits my motorcycle?', 'Use our Fitment Guide tool. It contains hundreds of confirmed applications by year, make, and model.', 0),
    ('10000000-0000-0000-0000-000000000004', 'What types of mounting systems does MaxRacing offer?', 'We offer both Top-Mount kits (above the triple clamp) and various side-mount or frame-mount kits depending on your specific motorcycle geometry.', 1),
    ('10000000-0000-0000-0000-000000000004', 'Do MaxRacing kits include everything I need?', 'Yes. Our bike-specific kits include the damper body, model-specific mounting brackets, and all necessary hardware for installation.', 2),
    ('10000000-0000-0000-0000-000000000004', 'Can I use a MaxRacing damper on a custom or universal build?', 'Yes, we offer universal kits and individual components for custom projects, though some fabrication of mounting points may be required.', 3),

    -- Installation
    ('10000000-0000-0000-0000-000000000005', 'Is the MaxRacing damper easy to install?', 'Most riders with basic mechanical experience and tools can install the kit in 30–60 minutes. We provide detailed guide instructions for every bike-specific kit.', 0),
    ('10000000-0000-0000-0000-000000000005', 'Do I need to modify my motorcycle to install a MaxRacing damper?', 'Our kits are designed to be "plug-and-play." No drilling, cutting, or permanent modification is required for our model-specific bolt-on kits.', 1),
    ('10000000-0000-0000-0000-000000000005', 'Where can I find detailed installation instructions?', 'Each kit includes high-resolution digital instructions. You can also view our universal installation guide on the website.', 2),
    ('10000000-0000-0000-0000-000000000005', 'What torque settings should I use for MaxRacing hardware?', 'Typically, 10Nm for M6 bolts and 22Nm for M8 bolts. Always refer to your specific kit instructions for exact torque values.', 3),

    -- Adjustment & Tuning
    ('10000000-0000-0000-0000-000000000006', 'How do I adjust the damping on my MaxRacing steering damper?', 'Simple. Turn the knurled dial on top of the damper. Clockwise increases resistance (stiffer); counter-clockwise decreases it (softer).', 0),
    ('10000000-0000-0000-0000-000000000006', 'What damping setting should I use for city riding vs. track riding?', 'For city riding, use settings 1–6 (low resistance). For track days or aggressive canyon riding, use settings 14–20 (high resistance).', 1),
    ('10000000-0000-0000-0000-000000000006', 'Can I adjust the damper while riding?', 'Yes, the adjuster is designed to be easily manipulated with gloves. However, we recommend adjusting your settings while stopped for maximum safety.', 2),
    ('10000000-0000-0000-0000-000000000006', 'Does temperature affect damping performance?', 'As with all hydraulic systems, extreme temperature changes can slightly affect oil viscosity. MaxRacing uses high-grade synthetic oil to ensure consistent performance across a wide range of riding temperatures.', 3),

    -- Maintenance & Longevity
    ('10000000-0000-0000-0000-000000000007', 'Do MaxRacing dampers require maintenance?', 'Yes. To maintain peak performance, we recommend a basic service (oil and seal check) every 15,000–20,000 miles, or seasonally for track-only machines.', 0),
    ('10000000-0000-0000-0000-000000000007', 'How long do MaxRacing dampers last?', 'Because they are rebuildable, a MaxRacing damper can last the lifetime of your motorcycle with proper care and regular service.', 1),
    ('10000000-0000-0000-0000-000000000007', 'Can a MaxRacing damper be rebuilt or serviced?', 'Yes. Seals, oil, and internal components are all replaceable. We offer service kits or can perform the rebuild at our facility.', 2),
    ('10000000-0000-0000-0000-000000000007', 'How should I clean my MaxRacing damper?', 'Use a clean rag and mild degreaser. Avoid high-pressure water near the seals and do not use harsh chemicals that can damage the anodized finish.', 3),

    -- Ordering & Dealer Program
    ('10000000-0000-0000-0000-000000000008', 'How can I purchase a MaxRacing steering damper?', 'You can purchase directly from maxracing.us or through our network of authorized motorcycle dealers and workshops.', 0),
    ('10000000-0000-0000-0000-000000000008', 'Does MaxRacing offer wholesale or dealer pricing?', 'Yes. We have a robust Dealer Program with tiered wholesale pricing for businesses and workshops.', 1),
    ('10000000-0000-0000-0000-000000000008', 'What are the benefits of becoming a MaxRacing dealer?', 'Benefits include aggressive margins, marketing assets, dedicated support, and global shipping support.', 2),
    ('10000000-0000-0000-0000-000000000008', 'Does MaxRacing ship internationally?', 'Yes, we provide worldwide shipping with reliable logistics and full customs documentation.', 3),
    ('10000000-0000-0000-0000-000000000008', 'Does MaxRacing offer drop shipping for dealers?', 'Yes, we offer direct dropshipping to your customers, allowing you to sell without the need to hold local inventory.', 4),

    -- Safety & Performance
    ('10000000-0000-0000-0000-000000000009', 'Will a steering damper make my motorcycle harder to steer?', 'No. At normal steering speeds, the damper is almost invisible. It only provides significant resistance during rapid, dangerous oscillations.', 0),
    ('10000000-0000-0000-0000-000000000009', 'Can a steering damper save me from a crash?', 'While no device can guarantee safety, a damper significantly reduces the risk of crashes caused by tank slappers and front-end instability.', 1),
    ('10000000-0000-0000-0000-000000000009', 'Is a steering damper required for track days?', 'Most racing organizations and track day providers highly recommend or require a steering damper for safety.', 2),
    ('10000000-0000-0000-0000-000000000009', 'Does a MaxRacing damper affect low-speed handling?', 'No. Our hydraulic valving is designed to provide minimal resistance at low steering speeds, ensuring parking lot maneuvers remain effortless.', 3),

    -- Warranty & Support
    ('10000000-0000-0000-0000-000000000010', 'Does MaxRacing offer a warranty on its products?', 'Yes. We provide a 3-Year Limited Warranty covering any defects in materials or workmanship from the date of purchase.', 0),
    ('10000000-0000-0000-0000-000000000010', 'What is NOT covered by the warranty?', 'The warranty excludes damage from crashes, improper installation, racing use, misuse (like using handlebars as a lever), and normal cosmetic wear.', 1),
    ('10000000-0000-0000-0000-000000000010', 'What if my damper develops a leak?', 'If the leak is due to a manufacturing defect within the warranty period, we will repair or replace the unit. Leaks caused by misuse are not covered.', 2),
    ('10000000-0000-0000-0000-000000000010', 'Can I get a refund on a MaxRacing product?', 'Unopened items can be returned within 30 days. Opened products are eligible for warranty repair or replacement only.', 3),
    ('10000000-0000-0000-0000-000000000010', 'How do I file a warranty claim?', 'Contact us at info@maxracing.us with your order number, proof of purchase, and photos/video describing the issue.', 4),
    ('10000000-0000-0000-0000-000000000010', 'How do I contact MaxRacing for technical support?', 'You can reach us at info@maxracing.us or call our support line at +1 (727) 377-9546.', 5)
    ON CONFLICT DO NOTHING;

    -- 3. Installation Sections
    INSERT INTO installation_sections (guide_id, slug, label, display_order) VALUES 
    ('universal', 'important-notice', 'Important Notice', 0),
    ('universal', 'required-tools', 'Required Tools', 1),
    ('universal', 'safety-instructions', 'Safety Instructions', 2),
    ('universal', 'torque-recommendations', 'Torque Recommendations', 3),
    ('universal', 'mounting-bracket', 'Mounting Bracket', 4),
    ('universal', 'installation-procedure', 'Installation Procedure', 5),
    ('universal', 'stroke-centering', 'Stroke Centering', 6),
    ('universal', 'alignment-check', 'Alignment Check', 7),
    ('universal', 'cable-clearance', 'Cable & Clearance', 8),
    ('universal', 'final-tightening', 'Final Tightening', 9),
    ('universal', 'test-ride', 'Test Ride Checklist', 10),
    ('universal', 'warning', 'Warning', 11),
    ('universal', 'disclaimer', 'Disclaimer', 12)
    ON CONFLICT (slug) DO UPDATE SET label = EXCLUDED.label, display_order = EXCLUDED.display_order;

    -- 4. Installation Tools
    INSERT INTO installation_tools (guide_id, name, display_order) VALUES 
    ('universal', 'Metric Allen key set (4mm–10mm)', 0),
    ('universal', 'Torque wrench (Nm-rated)', 1),
    ('universal', 'Socket set (8mm–17mm)', 2),
    ('universal', 'Thread-locking compound (medium-strength, e.g., Loctite 243)', 3),
    ('universal', 'Clean rags / degreaser', 4),
    ('universal', 'Ruler or caliper for stroke measurement', 5),
    ('universal', 'Zip ties for cable management', 6),
    ('universal', 'Motorcycle stand or lift', 7)
    ON CONFLICT DO NOTHING;

    -- 5. Torque Recommendations
    INSERT INTO torque_recommendations (bolt_size, torque_nm, application, display_order) VALUES 
    ('M6', '8–10 Nm', 'Bracket bolts, clamp screws', 0),
    ('M8', '20–25 Nm', 'Frame mount, main bracket', 1),
    ('M10', '35–45 Nm', 'Triple clamp / steering stem mount', 2),
    ('Damper rod end', '10–12 Nm', 'Rod end bearing bolts', 3)
    ON CONFLICT DO NOTHING;

    -- 6. YouTube Videos
    INSERT INTO youtube_videos (video_id, title, display_order) VALUES 
    ('YdDzio_Lde0', 'Demo 1', 0),
    ('cNOr45ivW3I', 'Demo 2', 1),
    ('u1pP11Cwjgs', 'Demo 3', 2),
    ('-qmeGXJ0Ak8', 'Demo 4', 3),
    ('KoKGl7BEQEU', 'Demo 5', 4),
    ('SABnlbEycx8', 'Demo 6', 5),
    ('KZT7DcLYkOY', 'Demo 7', 6)
    ON CONFLICT (video_id) DO NOTHING;

    -- 7. Comparison Features
    INSERT INTO comparison_features (feature, tooltip, maxracing, ohlins, hyperpro, gpr, scotts, generic, display_order) VALUES 
    ('Price Position', NULL, 'Competitive', 'Premium', 'Mid-Premium', 'Mid-Premium', 'Premium', 'Budget', 0),
    ('Warranty', NULL, '3 Years|Article:/blog/warranty-comparison|Hauer:https://hauerimports.com/pages/maxracing-faqs', '2-5 Years|Öhlins:https://www.ohlinsusa.com/support/warranty', '2 Years|Hyperpro:https://hyperpro.com/steering-dampers/', '90 Days|GPR:https://www.gprstabilizer.com/support/faqs/', 'Limited|Scotts:https://www.scottsonline.com/scotts.php', '30–90 Days', 1),
    ('Bike-Specific Mounts', NULL, 'yes', 'yes', 'yes', 'yes', 'yes', 'partial', 2),
    ('Installation', 'Plug-and-Play: Bolt-on kit, no permanent mods, basic tools.\nProfessional: Bolt-on but alignment/torque critical—recommended shop install.\nTechnical: May require modification/custom fitment—technician install required.', 'Plug-and-Play', 'Professional', 'Professional', 'Technical', 'Professional', 'Technical', 3),
    ('Rebuildable / Serviceable', 'Serviceable = has a defined service path (support/service center, service form, or documented servicing like oil/seal work).\n\nRebuildable = intended to be opened/restored with internal wear parts replaced (seals/O-rings/etc.), ideally with spare parts/rebuild support.', 'Serviceable / Rebuildable|Hauer:https://hauerimports.com/pages/maxracing-faqs', 'Serviceable / Rebuildable ❓|Service:https://www.ohlins.com/service-centers', 'Serviceable / Rebuildable|Service:https://hyperpro.com/steering-dampers/', 'Serviceable / Rebuildable ❓|Support:https://www.gprstabilizer.com/support/', 'Serviceable / Rebuildable|Service:https://www.scottsonline.com/litrack/259.pdf', 'Serviceable (often) / Rebuildable ⚠️ (varies)', 4),
    ('Use Case Classification', NULL, 'Street / Touring / Track', 'Street / Touring / Track / Motorsport', 'Street / Touring / Track', 'Street / Track', 'Street / Off-road / Track', 'Street', 5),
    ('Construction Material', 'The specific aluminum alloy grade used for the damper body and mounting hardware.', 'Aerospace Grade Aluminium - High Yield Strength (Alloy 7075-T6)|Article:/blog/why-7075-aluminum|Hauer:https://hauerimports.com/pages/maxracing-faqs', 'Not publicly specified', 'Not publicly specified', 'Structural Grade - General Purpose (Alloy 6061-T6)|GPR:https://www.gprstabilizer.com/products/gpr-v5s-street-bike-stabilizer-kits/', 'Structural Grade - General Purpose (Alloy 6061-T6)|Scotts:https://www.scottsonline.com/Stabilizer_Purchase2.php?BI_ID=952888&Bike_ID=7311', 'Cast / Mixed materials', 6),
    ('Colors', NULL, '7 (49 Combos)|Hauer:https://hauerimports.com/pages/maxracing-faqs', 'Limited', 'Limited', 'Limited', 'Limited', '1–2', 7),
    ('Architecture / Form Factor', NULL, '“Handlebar steering dampers” + model-specific brackets; under/over handlebar geometry affects compatibility|Hauer:https://hauerimports.com/pages/maxracing-faqs', 'Linear damper with shaft + piston in a cylinder (shown/described)|Öhlins:https://ohlins.pl/sites/default/files/om_07261-01.pdf', 'CSC is “linear damping steering damper”; RSC “behaves like a linear steering damper” in normal riding|Hyperpro:https://hyperpro.com/steering-dampers/', 'Explicit rotary steering damper products (V5/Q etc)|GPR:https://www.gprstabilizer.com/products/', 'Scotts describes a compact stabilizer system (function/valving focus) and publishes dedicated service documentation for the unit|Scotts:https://www.scottsonline.com/scotts.php', 'Linear resembles a small shock absorber; rotary mounts at steering head area|Source:https://engineerfix.com/what-does-a-steering-stabilizer-do-on-a-motorcycle/', 8),
    ('Damping Principle', NULL, 'Hydraulic damper that offers resistance to steering motion to reduce wobble/shimmy|Hauer:https://hauerimports.com/pages/maxracing-faqs', 'Hydraulic piston forces fluid through passages; adjustable valve controls flow; pressurized reservoir manages volume changes|Öhlins:https://ohlins.pl/sites/default/files/om_07261-01.pdf', 'Linear steering damper program (CSC) + RSC adds “extra progressive damping” for fast events; pressurized reservoir concept|Hyperpro:https://hyperpro.com/steering-dampers/', 'Patented rotary design + fluid control; emphasizes controlling rotary motion with a stationary rotary damper|GPR:https://www.gprstabilizer.com/products/', 'Hydraulic stabilizer; oil exchanged through valving circuits; includes a separate high-speed valving system|Scotts:https://www.scottsonline.com/scotts.php', 'Steering stabilizers are commonly linear (rod-style) or rotary hydraulic designs|Source:https://engineerfix.com/what-does-a-steering-stabilizer-do-on-a-motorcycle/', 9),
    ('Speed-Sensitive Behavior', 'How the damper responds to fast steering movements vs slow movements.', 'FAQ describes hydraulic resistance reducing wobble/shimmy|Hauer:https://hauerimports.com/pages/maxracing-faqs', 'Manual describes piston pushing fluid through a passage with an adjustable valve; damping adjusted via knob|Öhlins:https://ohlins.pl/sites/default/files/om_07261-01.pdf', 'RSC is explicitly progressive (low damping at small speeds, more at higher speeds)|RSC:https://webshop-hyperpro.com/product/steering-damper-75mm-rsc-dark-edition/', 'Described as controlling side-to-side sweep via a rotary design and fluid control|GPR:https://www.gprstabilizer.com/products/', 'Scotts describes valving circuits + a separate high-speed system for high-speed impacts vs normal steering|Scotts:https://www.scottsonline.com/scotts.php', 'Steering dampers restrict fast motion via oil flow through orifices/valving (speed-sensitive principle)|Source:https://www.motorcyclistonline.com/mc-garage-video-motorcycle-steering-dampers-explained/', 10),
    ('Maintenance Guidance', NULL, 'Routine maintenance is generally not required; contact support if leaking oil or loss of pressure|Hauer:https://hauerimports.com/pages/maxracing-faqs', 'Manual provides service intervals (road km / track hours) and warns of leakage/irregular function|Öhlins:https://ohlins.pl/sites/default/files/om_07261-01.pdf', 'Rebuildable with spare parts availability is listed as a feature|Hyperpro:https://hyperpro.com/steering-dampers/', 'Recommends annual oil changes; warns oil expires and old oil can cause internal wear/damage|GPR:https://www.gprstabilizer.com/support/', 'Scotts publishes oil/seal service instructions; recommends proper service procedure|Scotts:https://www.scottsonline.com/litrack/259.pdf', 'General guidance: hydraulic dampers can leak and may need service; friction types behave differently|Source:https://tfxsuspension.com/blog/adventure-motor-bike/what-is-a-steering-damper-for-adventure-motors/', 11),
    ('Common Issues / Failures', 'Warranty exclusions or issues explicitly acknowledged by the brand.', 'Warranty excludes accidents, improper installation, or unauthorized modifications|Hauer:https://hauerimports.com/pages/maxracing-faqs', 'Manual warns leakage/irregular function requires service and notes the damper affects stability|Öhlins:https://ohlins.pl/sites/default/files/om_07261-01.pdf', 'Mentions sealing + nitrogen pressurized reservoir to prevent foaming (mitigating performance loss)|Hyperpro:https://hyperpro.com/steering-dampers/', 'Warns old oil/o-rings lead to wear; service is critical; also has strict warranty rules related to mounts|GPR:https://www.gprstabilizer.com/support/', 'Service documents discuss service/bleeding details; Scotts also warns about third-party mounting kits|Scotts:https://www.scottsonline.com/litrack/259.pdf', 'Typical issues: leaks, worn seals, friction stiction vs hydraulic response|Source:https://vintagebmw.org/forum/viewtopic.php?t=17644/', 12),
    ('Adjuster Clicks', NULL, '20|Hauer:https://hauerimports.com/pages/maxracing-faqs', '16–20|Öhlins:https://ohlins.pl/sites/default/files/om_07261-01.pdf', '22|Hyperpro:https://hyperpro.com/steering-dampers/', '20|GPR:https://www.gprstabilizer.com/products/', '25|Scotts:https://www.scottsonline.com/scotts.php', 'no', 13),
    ('Founded / Market Presence', NULL, 'Established 2010', 'Founded 1976', 'Founded 1997', 'Founded 1997', 'Founded 1978', 'Varies', 14);
    ON CONFLICT DO NOTHING;

    -- 8. Engineering Sections
    INSERT INTO engineering_sections (icon, title, content, display_order) VALUES 
    ('Droplets', 'How Hydraulic Damping Works', 'A hydraulic steering damper uses oil forced through precision valving to resist sudden handlebar rotation. As the handlebars are deflected quickly — by a bump, road imperfection, or acceleration force — oil flows through calibrated orifices inside the damper body. The faster the deflection, the greater the resistance. Normal steering inputs pass through freely.', 0),
    ('Gauge', 'Progressive Resistance', 'Unlike friction-based dampers that apply constant drag, hydraulic dampers provide progressive resistance. Low-speed steering inputs (turning into a corner, navigating parking lots) feel natural and unrestricted. High-speed oscillations (tank slappers, headshake) meet exponentially increasing resistance — catching the danger before you feel it.', 1),
    ('Layers', 'Friction vs. Hydraulic', 'Cheap friction dampers apply constant drag to the steering — slowing every input equally. This deadens feel and increases rider fatigue. True hydraulic dampers are speed-sensitive: they only intervene when steering movement exceeds normal thresholds. The result is full feel during riding, full protection during emergencies.', 2),
    ('Factory', 'Why CNC Machining Matters', 'Every MaxRacing damper body is CNC-machined from premium Aluminium 7075-T6 — the same high-strength alloy used in aerospace and professional racing. Every unit is finished with specialized racing-grade anodizing and protective coatings to ensure maximum durability and consistent performance. CNC machining ensures tolerances within thousandths of an inch, creating consistent oil flow paths and perfect seal surfaces.', 3),
    ('Wrench', '20-Click Adjustability', 'MaxRacing dampers feature a 20-position precision adjuster. Each click changes the oil flow rate through the damper''s valving circuit. Low settings (1–6) for city and commuting — minimal resistance, full feel. Medium settings (7–13) for sport riding and spirited street use. High settings (14–20) for track days and aggressive canyon riding.', 4),
    ('RefreshCw', 'Rebuildable by Design', 'MaxRacing dampers are fully serviceable. Seals, oil, and internal components can be replaced — extending the damper''s life indefinitely. Unlike sealed disposable units, a MaxRacing damper is an investment that can be maintained, rebuilt, and re-tuned for years of reliable service.', 5)
    ON CONFLICT DO NOTHING;

    -- 9. About Content
    INSERT INTO about_content (section_name, title, content) VALUES 
    ('history', 'A Decade of Stability', 'Founded in 2010, MaxRacing was born from a simple observation: mid-range motorcycles are often underserved by major suspension brands. We set out to bridge that gap by offering race-grade steering dampers that are both accessible and high-performing.'),
    ('philosophy', 'The Pursuit of Feel', 'We believe that safety shouldn''t come at the cost of steering feel. Our dampers are engineered to be invisible when you don''t need them and decisive when you do. Every component is designed, tested, and optimized for the street and the track.')
    ON CONFLICT (section_name) DO NOTHING;

    -- 10. Products
    INSERT INTO products (name, slug, description, price, category) VALUES 
    ('MaxRacing Max10', 'max10', 'Precision hydraulic steering damper for bikes under 500cc.', 259.99, 'Dampers'),
    ('MaxRacing Max20', 'max20', 'Professional hydraulic steering damper for larger motorcycles.', 379.99, 'Dampers'),
    ('MaxRacing Rearset', 'rearset', 'Fully adjustable racer-style footpegs.', 429.99, 'Controls')
    ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, description = EXCLUDED.description;

    -- 11. Product Colors
    INSERT INTO product_colors (name, color_code, display_order) VALUES 
    ('Black', 'radial-gradient(ellipse at 30% 30%, hsl(0 0% 30%), hsl(0 0% 8%) 70%)', 0),
    ('Red', 'radial-gradient(ellipse at 30% 30%, hsl(0 80% 65%), hsl(0 85% 35%) 70%)', 1),
    ('Blue', 'radial-gradient(ellipse at 30% 30%, hsl(220 90% 70%), hsl(220 90% 35%) 70%)', 2),
    ('Gold', 'radial-gradient(ellipse at 30% 30%, hsl(45 95% 75%), hsl(40 85% 40%) 70%)', 3),
    ('Green', 'radial-gradient(ellipse at 30% 30%, hsl(145 60% 55%), hsl(145 70% 25%) 70%)', 4),
    ('Silver', 'radial-gradient(ellipse at 30% 30%, hsl(0 0% 90%), hsl(0 0% 55%) 70%)', 5),
    ('Orange', 'radial-gradient(ellipse at 30% 30%, hsl(30 95% 65%), hsl(20 90% 38%) 70%)', 6)
    ON CONFLICT DO NOTHING;

    -- 12. Internal Comparisons
    INSERT INTO product_internal_comparisons (category, icon, max10_value, max20_value, display_order) VALUES 
    ('Target Bike Size', 'Bike', 'Smaller / lower cc (below ~500 cc)', 'Larger / higher cc motorcycles', 0),
    ('Fitment Range', 'Shield', 'Street sports & smaller models (Z400, MT-03, R3, Duke series)', 'Broad range of bigger bikes (GSX-S, MT-09, Ninja 1000, CB1000R, Tiger)', 1),
    ('Adjustability', 'Gauge', '10 levels of damping (1–3 City · 4–7 Sport · 8–10 Track)', '20 levels of damping (1–6 City · 7–14 Sport · 15–20 Track)', 2),
    ('Price (US Retail)', 'DollarSign', '~$259.99 USD', '~$379.99 USD', 3),
    ('Colors Available', 'Palette', '7 body + 7 adjuster colors', '7 body + 7 adjuster colors', 4)
    ON CONFLICT DO NOTHING;
END $$;