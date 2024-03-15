function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");

    if (userInput) {
        var userMessage = document.createElement("div");
        userMessage.className = "user";
        // Append user image tag before the user message content
        userMessage.innerHTML = '<img src="user.jpeg" alt="User" style="height: 30px; width: 30px; border-radius: 50%; margin-right: 10px;">' + userInput;
        chatBox.appendChild(userMessage);

        // Handle user input
        handleUserInput(userInput);
        
        // Clear input field
        document.getElementById("user-input").value = "";
    }
}

function handleUserInput(userInput) {
    var chatBox = document.getElementById("chat-box");

    if (userInput.toLowerCase() === "hi") {
        var botMessage = document.createElement("div");
        botMessage.className = "chat-bot";
        botMessage.innerHTML = '<img src="bot.jpeg" alt="Bot" style="height: 30px; width: 30px; border-radius: 50%; margin-right: 10px;">' + "Select Option to check Hate Speech for respective Method:<br>1 = Text Classification<br>2 = Audio Classification<br>3 = Image Classification<br>4 = GIF Classification<br>5 = Video Classification<br>6 = Youtube Live Classification";
        chatBox.appendChild(botMessage);
    } else if (userInput === "1" || userInput === "2" || userInput === "3" || userInput === "4" || userInput === "5" || userInput === "6") {
        executeOption(parseInt(userInput)); // Convert userInput to integer and call the respective function
    } else {
        var botMessage = document.createElement("div");
        botMessage.className = "chat-bot";
        botMessage.innerHTML = '<img src="bot.jpeg" alt="Bot" style="height: 30px; width: 30px; border-radius: 50%; margin-right: 10px;">' + "I'm sorry, I don't understand that. Please send 'hi' to start the conversation.";
        chatBox.appendChild(botMessage);
    }
}

function executeOption(option) {
    switch (option) {
        case 1:
            handleTextClassification();
            break;
        case 2:
            handleAudioClassification();
            break;
        case 3:
            handleImageClassification();
            break;
        case 4:
            handleGIFClassification();
            break;
        case 5:
            handleVideoClassification();
            break;
        case 6:
            handleYoutubeLiveClassification();
            break;
        default:
            // If the option is not recognized
            var chatBox = document.getElementById("chat-box");
            var botMessage = document.createElement("div");
            botMessage.className = "chat-bot";
            botMessage.innerHTML = '<img src="bot.jpeg" alt="Bot" style="height: 30px; width: 30px; border-radius: 50%; margin-right: 10px;">' + "Invalid option. Please select a valid option.";
            chatBox.appendChild(botMessage);
    }
}

// Define functions to handle each option
function handleTextClassification() {
    // Logic for handling text classification
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.className = "chat-bot";
    botMessage.innerHTML = '<img src="bot.jpeg" alt="Bot" style="height: 30px; width: 30px; border-radius: 50%; margin-right: 10px;">' + "Text classification selected.";
    chatBox.appendChild(botMessage);
}

function handleAudioClassification() {
    // Logic for handling audio classification
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.className = "chat-bot";
    botMessage.innerHTML = '<img src="bot.jpeg" alt="Bot" style="height: 30px; width: 30px; border-radius: 50%; margin-right: 10px;">' + "Audio classification selected.";
    chatBox.appendChild(botMessage);
}

function handleImageClassification() {
    // Logic for handling image classification
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.className = "chat-bot";
    botMessage.innerHTML = '<img src="bot.jpeg" alt="Bot" style="height: 30px; width: 30px; border-radius: 50%; margin-right: 10px;">' + "Image classification selected.";
    chatBox.appendChild(botMessage);
}

function handleGIFClassification() {
    // Logic for handling GIF classification
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.className = "chat-bot";
    botMessage.innerHTML = '<img src="bot.jpeg" alt="Bot" style="height: 30px; width: 30px; border-radius: 50%; margin-right: 10px;">' + "GIF classification selected.";
    chatBox.appendChild(botMessage);
}

function handleVideoClassification() {
    // Logic for handling video classification
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.className = "chat-bot";
    botMessage.innerHTML = '<img src="bot.jpeg" alt="Bot" style="height: 30px; width: 30px; border-radius: 50%; margin-right: 10px;">' + "Video classification selected.";
    chatBox.appendChild(botMessage);
}

function handleYoutubeLiveClassification() {
    // Logic for handling YouTube live classification
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.className = "chat-bot";
    botMessage.innerHTML = '<img src="bot.jpeg" alt="Bot" style="height: 30px; width: 30px; border-radius: 50%; margin-right: 10px;">' + "YouTube live classification selected.";
    chatBox.appendChild(botMessage);
}


function handleKeyPress(event) {
    if (event.keyCode === 13) {
        sendMessage();
    }
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

changeBackgroundColor("#F2D2ED");