const messages = [
  { side: "left", text: "Hey! Love your repo 😍" },
  { side: "right", text: "Thanks! It's open source." },
  { side: "left", text: "Just starred it 🚀" },
  { side: "right", text: "Awesome! Feel free to fork it." },
  { side: "left", text: "Sure thing. You're doing great 🔥" },
  { side: "right", text: "Appreciate it! 💻" }
];

const chatContainer = document.getElementById("chat");
let index = 0;

function addMessage() {
  const msg = messages[index];
  const bubble = document.createElement("div");
  bubble.className = `bubble ${msg.side}`;
  bubble.textContent = msg.text;
  chatContainer.appendChild(bubble);

  setTimeout(() => {
    bubble.style.opacity = 0.6;
    bubble.style.transform = "translateY(0)";
  }, 50);

  setTimeout(() => {
    bubble.style.opacity = 0;
    bubble.style.transform = "translateY(-10px)";
    setTimeout(() => bubble.remove(), 500);
  }, 12000);

  index = (index + 1) % messages.length;
}
addMessage();
setInterval(addMessage, 1000);

const windowEl = document.getElementById('terminal-window');
const titleBar = windowEl.querySelector('.title-bar');
const minimizeBtn = windowEl.querySelector('.btn.minimize');
const closeBtn = windowEl.querySelector('.btn.close');
const openBtn = document.getElementById('open-terminal-btn');
const output = windowEl.querySelector('.output');
const cmdInput = windowEl.querySelector('.cmdline');

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

openBtn.addEventListener('click', () => {
  windowEl.style.display = 'flex';
  openBtn.style.display = 'none';
  cmdInput.focus();
});

closeBtn.addEventListener('click', () => {
  windowEl.style.display = 'none';
  openBtn.style.display = 'block';
});

titleBar.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - windowEl.offsetLeft;
  offsetY = e.clientY - windowEl.offsetTop;
  titleBar.style.cursor = 'grabbing';
  e.preventDefault();
});
document.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    titleBar.style.cursor = 'grab';
  }
});
document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  let newX = e.clientX - offsetX;
  let newY = e.clientY - offsetY;
  const maxX = window.innerWidth - windowEl.offsetWidth;
  const maxY = window.innerHeight - windowEl.offsetHeight;
  newX = Math.min(Math.max(0, newX), maxX);
  newY = Math.min(Math.max(0, newY), maxY);
  windowEl.style.left = newX + 'px';
  windowEl.style.top = newY + 'px';
});

minimizeBtn.addEventListener('click', () => {
  windowEl.classList.add('minimized');
});

titleBar.addEventListener('click', () => {
  if (windowEl.classList.contains('minimized')) {
    windowEl.classList.remove('minimized');
  }
});

cmdInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const command = cmdInput.value.trim();
    if (!command) return;

    const userLine = document.createElement('div');
    userLine.className = 'line';
    userLine.textContent = `$ ${command}`;
    output.appendChild(userLine);

    const responseLine = document.createElement('div');
    responseLine.className = 'line';
    switch (command.toLowerCase()) {
      case 'help':
        responseLine.textContent = `Available commands:\nhelp\nabout\nclear`;
        break;
      case 'about':
        responseLine.textContent = 'این یک ترمینال وبلاگی جذاب ساخته شده توسط توحه تاجیک است!';
        break;
      case 'clear':
        output.innerHTML = '';
        cmdInput.value = '';
        return;
      default:
        responseLine.textContent = `Command not found: ${command}`;
    }

    output.appendChild(responseLine);
    cmdInput.value = '';
    output.scrollTop = output.scrollHeight;
  }
});
