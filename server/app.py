import requests
import json
from flask import Flask, request, redirect

url = "https://api.openai.com/v1/chat/completions"

headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer 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",
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

@app.route('/')
def index():
    return redirect('/submit')

@app.route('/submit', methods=['GET', 'POST'])
def prompt():
    if request.method == 'POST':
        response = request.post(url, headers=headers, data=json.dumps(data))
    # print(response.text)
        return (json.loads(response.text)['choices'][0]['message']["content"])
    else: 
        return 'worked'
#    elif request.method == 'GET':
#        return 'hi'

if __name__ == '__main__':
    app.run(debug=True)
