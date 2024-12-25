const counterDisplay = document.querySelector("h3");
let counter = 0;
let interval = 600;

const sounds = [
  "sounds/pop1.mp3",
  "sounds/pop2.mp3",
  "sounds/pop3.mp3",
];

const bubbleMaker = () => {
  const bubble = document.createElement("span");

  bubble.classList.add("bubble");

  document.body.appendChild(bubble);

  const size = Math.random() * 200 + 100 + "px";

  bubble.style.height = size;

  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 50 + "%";

  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;

  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;

    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    const audio = new Audio(randomSound);

    audio.play();

    bubble.remove();
  });

  setTimeout(() => {
    bubble.remove();
  }, 7800);
};

setInterval(() => {
  bubbleMaker();
  if (counter % 10 === 0 && interval > 200) interval -= 50;
}, interval);

setInterval(bubbleMaker, 600);