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

## Challenges we ran into
The biggest challenge we ran into was setting up proper communication between our back end and OpenAI's API, especially in regards to key access.

## Accomplishments that we're proud of
We're most proud of our intuitively designed UI that focuses on the user's experience and learning as they sift through the heaps of information available on the internet.

## What we learned
We learned a lot about connections between front end and back end as well as OpenAI's API.

## What's next for nSWER
We would love to implement further accessible resources into nSWER such as "make this page visually accessible for me" to change the way the website is formatted. We would also love to be able to implement OpenAI's SORA to explain concepts visually through the form of a tutorial video to accomodate visual learners. An optimization we would love to work on is improved parsing of the webpage to prioritize sections to pass through OpenAI's API.

## NOTE: OpenAI API key is NOT included -- if you want to use this yourself, you will need to source your own key and add it in utilities.js
