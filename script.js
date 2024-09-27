// Define an object to store questions and answers
const responses = {
    "hello": "Hello, nice to meet you!",
    "hi": "Hello, nice to meet you!",
    "how are you": "I'm doing fine, thank you for asking.",
    "what is your name": "My name is Jarvis, I'm a chatbot.",
    "what can you do": "I can chat with you and answer some simple questions.",
    "tell me a joke": "Why did the chicken go to the seance? To get to the other side.",
    "what is the capital of france": "The capital of France is Paris.",
    "who wrote hamlet": "Hamlet was written by William Shakespeare.",
    "what is the largest planet": "The largest planet in our solar system is Jupiter.",
    "who is the president of the usa": "As of now, Joe Biden is the President of the United States.",
    "what is the time": function() {
        const now = new Date();
        return `The current time is ${now.getHours()}:${now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()}`;
    },
    "what is todays date": function() {
        const now = new Date();
        return `Todays date is ${now.toLocaleDateString()}`;
    },
    "what year is it": function() {
        const now = new Date();
        return `The current year is ${now.getFullYear()}`;
    }
    // Add more responses as needed
};

// The chatbot function using the responses object
function chatbot(input) {
    let output = "";
    input = input.toLowerCase();

    // Check if the input matches any of the predefined responses
    const response = responses[input];
    
    // If the response is a function (for time, date, year), execute it
    if (typeof response === 'function') {
        output = response();
    } else {
        output = response || "Sorry, I don't understand that. Please try something else.";
    }

    return output;
}

// Display the user message on the chat
function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.classList.add("user");
    let userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");
    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML = message;
    userMessage.appendChild(userAvatar);
    userMessage.appendChild(userText);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
}

// Display the bot message on the chat
function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.classList.add("bot");
    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = message;
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
}

// Send the user message and get the bot response
function sendMessage() {
    let input = document.getElementById("input").value;
    if (input) {
        displayUserMessage(input);
        let output = chatbot(input);
        setTimeout(function() {
            displayBotMessage(output);
        }, 1000);
        document.getElementById("input").value = "";
    }
}

// Add a click event listener to the button
document.getElementById("button").addEventListener("click", sendMessage);

// Add a keypress event listener to the input
document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
        sendMessage();
    }
});
