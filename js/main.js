const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOptions = {
    distane: "50px",
    origin: "bottom",
    duration: 1000, 
};

// header container 

ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOptions,
});

ScrollReveal().reveal(".header_btn", {
    ...scrollRevealOptions,
    delay: 500,
});

// service container

ScrollReveal().reveal(".service_card", {
    ...scrollRevealOptions,
    interval: 500,
})

// price container 

ScrollReveal().reveal(".price_card", {
    ...scrollRevealOptions,
    interval: 500,
})


// Get all the counter elements
const counters = document.querySelectorAll('.counter');

// Set the target numbers for each counter
const targetNumbers = [94, 108, 125, 184]; // Change these to your desired numbers

// Function to animate each counter
function countToTarget(counter, target) {
  let count = 0;
  const interval = setInterval(() => {
    count++;
    counter.textContent = count;
    if (count === target) {
      clearInterval(interval);
    }
  }, 70); // Adjust this interval for speed control
}

// Loop through each counter and start counting
counters.forEach((counter, index) => {
  countToTarget(counter, targetNumbers[index]);
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

// Modify the pagination's style using JavaScript
