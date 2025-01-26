function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.classList.toggle('active');
}

function sendMessage() {
    const input = document.getElementById('messageInput');
    const messages = document.getElementById('chatMessages');
    
    if (input.value.trim()) {
        // Add user message
        const userMessage = document.createElement('div');
        userMessage.className = 'message user';
        userMessage.textContent = input.value;
        messages.appendChild(userMessage);
        
        // Clear input
        input.value = '';
        
        // Scroll to bottom
        messages.scrollTop = messages.scrollHeight;
        
        // Simulate bot response
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.className = 'message bot';
            botMessage.textContent = "I understand. How else can I assist you?";
            messages.appendChild(botMessage);
            messages.scrollTop = messages.scrollHeight;
        }, 1000);
    }
}

// Allow Enter key to send message
document.getElementById('messageInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});