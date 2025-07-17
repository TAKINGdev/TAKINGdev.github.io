const messages = [
  { side: "left", text: "@blackboot64x" },
  { side: "right", text: "@The-Regency-Network" },
  { side: "left", text: "@duyl328" },
  { side: "right", text: "@Midou-Mni" },
  { side: "left", text: "@otaviossousa" },
  { side: "right", text: "@faizankhan1428" },
  { side: "left", text: "@JohansitoDev" },
  { side: "right", text: "@ShiningRocket" },
  { side: "left", text: "@Top-Lead-Blockchain" },
  { side: "right", text: "@Abdellahsyani" },
  { side: "left", text: "@S-raky" },
  { side: "right", text: "@brightsnow-dev" },
  { side: "left", text: "@sttve" },
  { side: "right", text: "@omarnasim25" },
  { side: "left", text: "@hiikohaai" },
  { side: "right", text: "@ishandutta2007" },
  { side: "left", text: "@lucasqatech" },
  { side: "right", text: "@kiranShamsHere" },
  { side: "left", text: "@visualGravitySense" },
  { side: "right", text: "@iamapuneet" },
  { side: "left", text: "@K1rsN7" },
  { side: "right", text: "@kahmada" },
  { side: "left", text: "@Nima-Mollaei" },
  { side: "right", text: "@light-hat" },
  { side: "left", text: "@akhundi01" },
  { side: "right", text: "@siddhantshukla108" },
  { side: "left", text: "@K-ANT0" },
  { side: "right", text: "@Cittykitten" },
  { side: "left", text: "@akash-tk" },
  { side: "right", text: "@ZEM-MOOK" },
  { side: "left", text: "@nfterrax" },
  { side: "right", text: "@skinbracket" },
  { side: "left", text: "@mnpsnuwan" },
  { side: "right", text: "@mindstar0209" },
  { side: "left", text: "@Imaliasadi" },
  { side: "right", text: "@standardgalactic" },
  { side: "left", text: "@18kredapple" },
  { side: "right", text: "@huzgrx" },
  { side: "left", text: "@m-bwela" },
  { side: "right", text: "@nafiul-afk" },
  { side: "left", text: "@0joseDark" },
  { side: "right", text: "@Maxd646" },
  { side: "left", text: "@DevvObiero" },
  { side: "right", text: "@muladz3gio" },
  { side: "left", text: "@mbahomaid" },
  { side: "right", text: "@Laqrabti" },
  { side: "left", text: "@murapadev" },
  { side: "right", text: "@oluiscabral" },
  { side: "left", text: "@Davidevlops" },
  { side: "right", text: "@howls-moving-castle" },
  { side: "left", text: "@RlCK-SANCHEZ" }
];


const chatContainer = document.getElementById("chat");
let index = 0;

function addMessage() {
  const msg = messages[index];
  const bubble = document.createElement("div");
  bubble.className = `bubble ${msg.side}`;
  bubble.textContent = msg.text;
  bubble.style.opacity = 0;
  bubble.style.transform = "translateY(20px)";
  chatContainer.appendChild(bubble);

  // Animate in
  setTimeout(() => {
    bubble.style.opacity = 1;
    bubble.style.transform = "translateY(0)";
  }, 50);

  // Animate out after delay
  setTimeout(() => {
    bubble.style.opacity = 0;
    bubble.style.transform = "translateY(-10px)";
    setTimeout(() => bubble.remove(), 500);
  }, 10000);

  // Scroll to bottom
  chatContainer.scrollTop = chatContainer.scrollHeight;

  // Loop to next message
  index = (index + 1) % messages.length;
}

addMessage();
setInterval(addMessage, 1200);


const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 1000); // هر ۵ ثانیه اسلاید عوض میشه
