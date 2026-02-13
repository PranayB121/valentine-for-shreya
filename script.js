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
/* YES button click */
yesBtn.addEventListener("click", () => {
 // Unmute music after user interaction
 const iframe = document.getElementById("bgMusic");
 if (iframe && iframe.src.includes("mute=1")) {
   iframe.src = iframe.src.replace("&mute=1", "");
 }
 confettiBlast();
 setTimeout(() => {
   document.body.innerHTML = `
<div style="
       height:100vh;
       display:flex;
       flex-direction:column;
       justify-content:center;
       align-items:center;
       background:linear-gradient(135deg,#ff758c,#ff7eb3);
       color:white;
       text-align:center;
     ">
<h1 style="font-size:2.5rem;">YAY SHREYA 💖🎉</h1>
<p style="font-size:1.3rem;margin-top:10px;">
         Best Valentine ever 😘
</p>
</div>
   `;
 }, 1200);
});
/* Floating hearts generator */
function createHeart() {
 const heart = document.createElement("span");
 heart.innerHTML = "💖";
 heart.style.left = Math.random() * 100 + "vw";
 heart.style.animationDuration = Math.random() * 3 + 3 + "s";
 heartsContainer.appendChild(heart);
 setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 300);
