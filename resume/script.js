// Intersection Observer for scroll animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-slide-in");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

// Select all sections to observe
const animatedSections = document.querySelectorAll("section");
animatedSections.forEach((section) => {
  observer.observe(section);
});

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Dark mode toggle (optional enhancement)
const darkModeToggle = document.createElement("button");
darkModeToggle.innerHTML = "🌓 Toggle Dark Mode";
darkModeToggle.classList.add(
  "fixed",
  "bottom-4",
  "right-4",
  "bg-gray-800",
  "text-white",
  "p-2",
  "rounded-full"
);
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.querySelectorAll("section").forEach((section) => {
    section.classList.toggle("bg-gray-900");
    section.classList.toggle("text-white");
  });
});

// Skill progress bar animation
const progressBars = document.querySelectorAll(".progress-bar-fill");
progressBars.forEach((bar) => {
  const width = bar.style.width;
  bar.style.width = "0";

  setTimeout(() => {
    bar.style.width = width;
  }, 100);
});

// Project hover effect
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
    card.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.1)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
    card.style.boxShadow = "none";
  });
});

// Contact form validation (placeholder)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      alert("Message sent successfully!");
      contactForm.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
}
