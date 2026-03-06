INSERT INTO faqs (id, question, answer, category_id, display_order)
VALUES (
  '12345678-0000-0000-0000-000000000100',
  'Do I need to use threadlocker when installing my MaxRacing sports rearset?',
  'Yes. The use of threadlocker is absolutely necessary on all bolts when installing your MaxRacing sports rearset. There will be no replacement of lost parts due to the lack of this product.',
  '10000000-0000-0000-0000-000000000004',
  4
);

UPDATE faqs 
SET answer = 'Routine maintenance is not required; if leaking oil or loss of pressure, it will be promptly substituted.' 
WHERE question = 'Do MaxRacing dampers require maintenance?';
