// script.js

// ========== 1. Smooth Scroll ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target && target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ========== 2. Dark Mode Toggle ==========
const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.documentElement.classList.contains('dark-mode') ? 'dark' : 'light');
};

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark-mode');
  }
});

const themeButton = document.getElementById('theme-toggle');
if (themeButton) {
  themeButton.addEventListener('click', toggleDarkMode);
}

// ========== 3. Reveal Elements on Scroll ==========
const revealElements = document.querySelectorAll('.fade-in');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    if (elTop < triggerBottom) {
      el.classList.add('opacity-100', 'translate-y-0');
      el.classList.remove('opacity-0', 'translate-y-8');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ========== 4. Typing Animation ==========
const typingText = ['Web Developer', 'Data Analyst', 'Tech Enthusiast'];
let wordIndex = 0;
let charIndex = 0;
let typingElement = document.getElementById('typing-text');

function type() {
  if (!typingElement) return;

  if (charIndex < typingText[wordIndex].length) {
    typingElement.textContent += typingText[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = typingText[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    wordIndex = (wordIndex + 1) % typingText.length;
    setTimeout(type, 500);
  }
}

document.addEventListener('DOMContentLoaded', type);

// ========== 5. Contact Form Validation ==========
// script.js
import { validateForm, sendEmail } from './utils/form-handler.js';

const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const error = validateForm(name, email, message);
    if (error) {
      alert(error);
      return;
    }

    sendEmail(form)
      .then(() => {
        alert('Thank you for your message, ' + name + '!');
        form.reset();
      })
      .catch((error) => {
        alert('Oops! Something went wrong.\n' + error.text);
      });
  });
}

// ========== 6. Loading Animation ==========
window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader');
  if (loader) {
    loader.classList.add('opacity-0');
    setTimeout(() => loader.remove(), 1000);
  }
});
