function scrapeAllText() {
    // This gets the entire text content of the body, including all child nodes.
    var allText = document.body.innerText;
    return allText;
}

// Function to update and log the text
function updateAndLogText() {
    text = scrapeAllText();
    console.log(text);
}

// Update and log text when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', updateAndLogText);

// Listen for URL changes on SPA (Single Page Application) where the page doesn't reload
window.addEventListener('popstate', updateAndLogText);

// For SPA that might not use popstate events, you can also check for hash changes
window.addEventListener('hashchange', updateAndLogText);

// Listen for messages from the background or popup script
chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        switch(message.type) {
            case "getText":
                // Ensure the text is up-to-date when requested
                sendResponse(scrapeAllText());
            break;
        }
    }
);

// Ensure text is initially populated
updateAndLogText();