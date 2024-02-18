const url = 'http://localhost:3000/'; // Replace with your server's URL
const form = document.getElementById('query-form');
const input = document.getElementById('query-input');
form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const content = input.value;
    await chrome.tabs.query({active: true, currentWindow: true}, async function(tabs) {
         await chrome.tabs.sendMessage(tabs[0].id, {type:"getText"}, function(text){
            console.log(text)
            fetch(url, {
                method: 'POST', // Since your endpoint is expecting a POST request
                headers: {
                    'Content-Type': 'application/json', // Specifying JSON content
                },
                body: JSON.stringify({
                    content,
                    text
                }) // Sending the content in the request body
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);
                const p = document.createElement("p");
                p.innerText = data.respond[0].message.content;
                document.body.appendChild(p);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    });
    console.log(text)
    
})

// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//     // Handle the received message from content.js
//     const p = document.createElement('p');
//     p.innerText=message;
//     document.body.append(p.innerText);
// });

