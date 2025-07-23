fetch('messages.json')
  .then(res => res.json())
  .then(messages => {
    const container = document.getElementById('messages');
    const latest = messages.slice(-200);

    latest.forEach(item => {
      const box = document.createElement('div');
      box.className = 'message';

      let html = `<div>${item.message}</div>`;

      if(item.image) {
        html += `<img src="${item.image}" alt="message image" class="message-image" />`;
      }

      html += `<div class="time">${item.time}</div>`;

      box.innerHTML = html;
      container.appendChild(box);
    });
  });
