const button = document.getElementById('button');

function createDivWithText(text) {
    // Create a new div element
    const div = document.createElement('div');
    
    // Set the text content of the div
    div.textContent = text;
    
    // Return the newly created div
    return div;
}


chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {type:"getText"}, function(response){
        const div = createDivWithText(response)
        document.body.appendChild(div);
        window.alert(response)
    });
});


