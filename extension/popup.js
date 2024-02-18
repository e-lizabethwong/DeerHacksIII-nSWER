const url = 'http://localhost:3000/'; // Replace with your server's URL
const form = document.getElementById("message")
const input = document.getElementById('content');
const div = document.getElementById('mid')
const a = document.getElementById('a');
async function writeToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Text successfully written to clipboard.');
    } catch (err) {
      console.error('Failed to write to clipboard: ', err);
    }
  }

a.addEventListener('click', async()=>{
    await writeToClipboard(div.innerText)
})

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
                })
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
                div.appendChild(p);
                a.style.display = "block";
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    });
})
