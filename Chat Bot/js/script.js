// Select elements
const input = document.getElementById("int");        // input box
const sendBtn = document.getElementById("enter-icon"); // send icon image (class)
const chatBody = document.getElementById("body-pr");   // message area container

// Function to send message
function sendMessage() {
    const text = input.value.trim();

    if (text === "") return; // empty message avoid

    const greeting = document.getElementById("body-pr").querySelector("h2");

    if (greeting) {
        greeting.style.display = "none";
    }


    // Create message div
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("user-msg");
    msgDiv.innerText = text;

    // Add message to chat body
    chatBody.appendChild(msgDiv);

    // Clear input
    input.value = "";

    // Auto scroll to bottom
    chatBody.scrollTop = chatBody.scrollHeight;

    // Fake bot reply (optional)
    setTimeout(() => {
        const botDiv = document.createElement("div");
        botDiv.classList.add("bot-msg");
        
        let reply = "I didn't understand that 🤔";

        const msg = text.toLowerCase();

        if (msg.includes("hi") || msg.includes("hello")) {
            reply = "Hello! 😊 How can I help you?";
        } else if (msg.includes("bye")) {
            reply = "Bye! 👋 Have a nice day!";
        } else if (msg.includes("help")) {
            reply = "Sure! Tell me what you need help with.";
        }

        botDiv.innerText = reply;
        chatBody.appendChild(botDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 500);
}

// Click on send icon
sendBtn.addEventListener("click", sendMessage);

// Press Enter key to send
input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});


input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});