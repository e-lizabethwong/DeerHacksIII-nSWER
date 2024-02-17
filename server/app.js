const express = require('express');
const cors = require('cors');
const fs = require('fs');
const axios = require('axios');
const bodyParser = require('body-parser');

// Load the configuration from a JSON file
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

// OpenAI API URL
const url = "https://api.openai.com/v1/chat/completions";

// Set up the Express app
const app = express();
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json

// Route for processing queries
app.post('/submit', async (req, res) => {
    const query = req.body.content;

    // Check if the query is not empty
    if (!query) {
        return res.status(400).json({"error": "Empty query provided."});
    }

    const data = {
        "model": "gpt-3.5-turbo",
        "messages": [
            {"role": "system", "content": ""},
            {"role": "user", "content": query}
        ]
    };

    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${config.KEY}`,
    };

    try {
        // Sending POST request to the API
        const response = await axios.post(url, data, { headers: headers });
        const result = response.data.choices[0].message.content || "No response content.";
        res.json({"result": result});
    } catch (error) {
        console.error(error);
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            return res.status(error.response.status).json({"error": error.response.data});
        } else if (error.request) {
            // The request was made but no response was received
            return res.status(500).json({"error": "No response received from the API."});
        } else {
            // Something happened in setting up the request that triggered an Error
            return res.status(500).json({"error": "Error making the request."});
        }
    }
});

// Start the server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
