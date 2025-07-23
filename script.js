
async function sendMessage() {
  const input = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');
  const userText = input.value.trim();
  if (!userText) return;

  const userDiv = document.createElement('div');
  userDiv.textContent = "You: " + userText;
  chatBox.appendChild(userDiv);

  input.value = '';

  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: userText })
  });

  const data = await res.json();
  const botDiv = document.createElement('div');
  botDiv.textContent = "Jarvis: " + (data.reply || "No response");
  chatBox.appendChild(botDiv);

  chatBox.scrollTop = chatBox.scrollHeight;
}
