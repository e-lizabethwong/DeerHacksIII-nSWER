const url = 'http://localhost:3000/';

export async function rephrase (input){
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: `rephrase this with fluent English: ${input}` })
        });
    
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        console.log(data);
        return data[0].message.content;
    } catch (error) {
        console.error('Error:', error);
        return null; // Handle the error appropriately
    }
}
