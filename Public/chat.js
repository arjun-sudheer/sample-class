const socket = io();

const chatArea = document.getElementById("chat-area");
const userSelector = document.getElementById("user-selector");
const messageBox = document.getElementById("message-box");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", () => {
  const message = messageBox.value.trim();
  const user = userSelector.value;

  if (message) {
    socket.emit("chat message", { user, message });

    messageBox.value = "";
  }
});

socket.on("chat message", (data) => {
  const { user, message } = data;

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", user);
  messageDiv.textContent = message;

  chatArea.appendChild(messageDiv);

  chatArea.scrollTop = chatArea.scrollHeight;
});
