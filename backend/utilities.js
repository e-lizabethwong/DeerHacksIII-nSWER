const axios = require('axios');
require('dotenv').config()

const endpoint = 'https://yt-gpt.openai.azure.com/openai/deployments/api-testing/chat/completions';
const apiKey = process.env.APIKEY; // Replace with your actual API key

const headers = {
  'Content-Type': 'application/json',
  'api-key': apiKey
};

module.exports.queryOpenAI = async (content) => {
  const data = {
    messages: [
      {role:'system', content:"Answer questions as a human"},
      { role: 'user', content },
    ]
  };

  try {
    const response = await axios.post(`${endpoint}?api-version=2023-05-15`, data, { headers });
    console.log(response.data.choices);
    return response.data.choices;
  } catch (error) {
    console.error('Error making the request:', error.response.data);
  }
}

