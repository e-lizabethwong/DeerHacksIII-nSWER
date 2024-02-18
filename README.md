# nSWER - the answer to Theme 3 for DeerHacksIII
by team: yeaa (YutongElizabethAnneArsalan)

 nSWER makes it easy to get what you need from a website, whether it be research or the right solution on stackoverflow. Ask nSWER and get an answer, just like that. No more reading or skimming.
 
## Inspiration
As students and developers, we often struggle with finding the information we need online. We created nSWER as an ‘answer’ to that problem in the form of a Chrome extension that will get us what we need from a website in the form of a user-friendly “chatbot” style Q-and-A UI.

## What it does
nSWER parses a website's data and allows the user to ask any question about it, which is then processed and passed through OpenAI's API to generate a unique and accurate answer.

## How we built it
We built nSWER's (very beautiful) front end with HTML and CSS. For its backend, we used express.js and javascript to handle information passed from the front end as well as tokenize it and pass it to OpenAI's API.

nSWER's digital assets were created using canva or sourced from public domain or copyright-free assets online.

## Challenges Encountered:
One significant challenge we faced was ensuring effective communication between each component within our Chrome extension, particularly when utilizing Chrome's API for scraping web content. This was especially tricky for Single Page Applications (SPAs). Additionally, our team's unfamiliarity with the backend technology Flask presented hurdles. Midway through the hackathon, we decided to switch to Express, which required rapid adaptation and learning.

## Achievements:
Despite these obstacles, we are incredibly proud of the final outcome. Our extension not only functions as intended, but we also take great pride in the originality and practicality of our idea. It's a solution that we see ourselves using daily. To address the challenge of scraping SPAs, we innovated by leveraging hashcodes. This approach allowed us to dynamically interact with SPA content, making our scraping process much more effective and versatile.

## What we learned
We became familiarized with setting up communication between frontend, backend, and OpenAi's API. We also learned to build a Chrome extension using only native technologies such as HTML, JavaScript, and CSS. We also learned the importance delegating tasks in an efficient and effective manner to meet project deadlines.

## What's next for nSWER
We would love to implement further accessible resources into nSWER such as "make this page visually accessible for me" to change the way the website is formatted. We would also love to be able to implement OpenAI's SORA to explain concepts visually through the form of a tutorial video to accomodate visual learners. An optimization we would love to work on is improved parsing of the webpage to prioritize sections to pass through OpenAI's API.

## NOTE: OpenAI API key is NOT included -- if you want to use this yourself, you will need to source your own key and add it in utilities.js
