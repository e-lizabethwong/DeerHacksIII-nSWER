import requests
import json
from flask import Flask, jsonify, redirect, request, make_response
import json
from flask_cors import CORS, cross_origin
import os

# Replace 'config.json' with the path to your JSON file
with open('config.json', 'r') as file:
    config = json.load(file)

print(config['KEY'])
key = config['KEY']

url = "https://api.openai.com/v1/chat/completions"

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {key}",
}

app = Flask(__name__)
cors = CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/submit', methods=['POST'])
@cross_origin()
def process_query():
    # Attempt to get JSON data from the request
    try:
        req_data = request.get_json()
        query = req_data.get('content', '')
    except Exception as e:
        return jsonify({"error": f"Invalid request data: {str(e)}"}), 400

    # Check if the query is not empty
    if not query:
        return jsonify({"error": "Empty query provided."}), 400

    data = {
        "model": "gpt-3.5-turbo",
        "messages": [
            {"role": "system", "content": ""},
            {"role": "user", "content": query}
        ]
    }

        # Sending POST request to the API
    response = requests.post(url, headers=headers, data=json.dumps(data))
    response.raise_for_status()  # Raises HTTPError for bad responses
    result = response.json().get('choices', [{}])[0].get('message', {}).get("content", "No response content.")
    res = make_response(jsonify({"result": result}))
    res.headers.add("Access-Control-Allow-Origin", "*")
    return res

if __name__ == "__main__":
    app.run(debug=True)