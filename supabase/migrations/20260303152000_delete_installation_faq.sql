DELETE FROM faqs 
WHERE question = 'Where can I find detailed installation instructions?';

UPDATE faqs 
SET answer = 'Most riders with basic mechanical experience and tools can install the kit in 30–60 minutes. We provide instructions for every bike-specific kit.' 
WHERE question = 'Is the MaxRacing damper easy to install?';

UPDATE faqs 
SET answer = 'Simple. Turn the dial on top of the damper. Clockwise increases resistance (stiffer); counter-clockwise decreases it (softer).' 
WHERE question = 'How do I adjust the damping on my MaxRacing steering damper?';

UPDATE faqs 
SET answer = 'It lasts for many years, or even more than a decade, as long as it is used properly. The secret is not to force the handlebars, especially with the adjustment above level 6. Therefore, we recommend returning the adjustment to level 0 whenever you are not riding.' 
WHERE question = 'How long do MaxRacing dampers last?';

UPDATE faqs 
SET question = 'How can I purchase MaxRacing products?',
    answer = 'You can purchase directly from our network of authorized motorcycle dealers and workshops or click on the DEALERS link in the main menu.'
WHERE question = 'How can I purchase a MaxRacing steering damper?';
