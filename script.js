const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const heartsContainer = document.querySelector(".hearts");

/* Move NO button (works on laptop + mobile) */
function moveNoButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

/* Confetti explosion */
function confettiBlast() {
  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      ["#ff4d6d", "#ffd166", "#06d6a0", "#4cc9f0"][Math.floor(Math.random() * 4)];
    confetti.style.animationDuration = Math.random() * 2 + 2 + "s";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 4000);
  }
}

/* YES button click — UPDATED */
yesBtn.addEventListener("click", () => {
  // Play music with sound after user interaction
  const iframe = document.getElementById("bgMusic");
  if (iframe) {
    iframe.src =
      "https://www.youtube.com/embed/VYtSJFV46Tk?autoplay=1&loop=1&playlist=VYtSJFV46Tk";
  }

  confettiBlast();

  setTimeout(() => {
    document.body.innerHTML = `
      <div class="yes-page">
        <h1>My Valentine 💖</h1>

        <img src="shreya.jpg" class="valentine-img" />

        <p>
          This smile is my favorite place to be 🥰<br />
          Happy Valentine’s Day, Shreya 🌸
        </p>
      </div>
    `;
  }, 1200);
});

/* Floating hearts */
function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 300);
