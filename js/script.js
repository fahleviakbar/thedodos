// AOS Animation
AOS.init({
  duration: 900,

  once: true,
});

// Navbar Background
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    nav.style.background = "rgba(9,9,11,.80)";

    nav.style.backdropFilter = "blur(30px)";
  } else {
    nav.style.background = "rgba(9,9,11,.45)";
  }
});

// Typewriter Effect
const terminal = document.getElementById("terminal");

const text = `$ docker ps

homepage        running

nextcloud       running

portainer       running

npm             running

beszel          running

uptime-kuma     running

adguard         running

cloudflared     running

landing         running

✔ All systems operational`;

let i = 0;

// Typewriter Function
function type() {
  if (i < text.length) {
    terminal.innerHTML += text.charAt(i);

    i++;

    setTimeout(type, 18);
  }
}

type();

// Cursor Glow Effect
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX - 175 + "px";

  glow.style.top = e.clientY - 175 + "px";
});

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

// Active Link Highlighting
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 150;

    if (scrollY >= top) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Counter Animation
document.querySelectorAll(".counter").forEach((counter) => {
  let target = Number(counter.dataset.target);

  let current = 0;

  let interval = setInterval(() => {
    current++;

    counter.innerText = current;

    if (current >= target) {
      clearInterval(interval);

      counter.innerText = target + " Running";
    }
  }, 100);
});
