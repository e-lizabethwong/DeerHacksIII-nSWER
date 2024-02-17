import requests
import json
from flask import Flask
import os
from dotenv import load_dotenv, find_dotenv
from os.path import join, dirname
from flask import jsonify

import json

# Replace 'config.json' with the path to your JSON file
with open('config.json', 'r') as file:
    config = json.load(file)

print(config)

url = "https://api.openai.com/v1/chat/completions"

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {'a'}",
}

data = {
    "model": "gpt-3.5-turbo",
    "messages": [
        {
            "role": "system",
            "content": "You are a helpful assistant."
        },
        {
            "role": "user",
            "content": "Explain React.js"
        }
    ]
}


app = Flask(__name__)
@app.route('/', methods=['GET'])
def get():
    response = requests.post(url, headers=headers, data=json.dumps(data))
    # print(response.text)
    return(json.loads(response.text)['choices'][0]['message']["content"])

from flask import jsonify

@app.route('/submit', methods=['POST'])
def prompt():
    try:
        response = requests.post(url, headers=headers, data=json.dumps(data))
        # Assuming the response is JSON and has the expected structure.
        result = json.loads(response.text)['choices'][0]['message']["content"]
        return jsonify({"result": result})
    except Exception as e:
        # Log the error or send back a custom error message
        print(e)  # For debugging; remove or replace with logging in production
        return jsonify({"error": "An error occurred processing your request."}), 500

if __name__ == '__main__':
    app.run(debug=True)
