function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML += '<p><strong>You:</strong> ' + userInput + '</p>';
    
    fetch('/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({text: userInput})
    })
    .then(response => response.json())
    .then(data => {
        outputDiv.innerHTML += '<p><strong>ChatGPT:</strong> ' + data.response + '</p>';
    })
    .catch(error => console.error('Error:', error));
}
