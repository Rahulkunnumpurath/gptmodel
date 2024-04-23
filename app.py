from flask import Flask, request, jsonify, render_template
from transformers import pipeline

app = Flask(__name__)

# Load GPT-2 model
generator = pipeline('text-generation', model='gpt2')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate_response():
    user_input = request.json['text']
    generated_text = generator(user_input, max_length=100, num_return_sequences=1)
    response = generated_text[0]['generated_text']
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)
