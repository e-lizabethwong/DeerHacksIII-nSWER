// content.js
function scrapeAllText() {
    // This gets the entire text content of the body, including all child nodes.
    var allText = document.body.innerText;
    return allText;
}
text = scrapeAllText();
// Example usage: Log all text to the console
console.log(scrapeAllText());
chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        switch(message.type) {
            case "getText":
                sendResponse(text);
            break;
        }
    }
);