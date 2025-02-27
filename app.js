document.addEventListener("DOMContentLoaded", () => {
  // Function initialization
  initScrollAnimation();
  initMenuToggle();
  initSmoothScroll();
  initFormValidation();
});

// Scroll animation functionality
function initScrollAnimation() {
  // Retrieve all elements with scroll-animate class
  const scrollElements = document.querySelectorAll(".scroll-element");

  // Create an IntersectionObserver instance for each element anc check if it is in the viewport to add the show class
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  // Apply the observer to every element with the scroll-animate class
  scrollElements.forEach((element) => {
    observer.observe(element);
  });

  // Clean up event listeners beforeunload
  window.addEventListener("beforeunload", () => {
    scrollElements.forEach((element) => {
      observer.unobserve(element); // Unoberve each element
    });
  });
}

// Menu toggle functionality
function initMenuToggle() {
  // Retrieve the menu and menu links
  const menu = document.querySelector("#mobile-menu");
  const menuLinks = document.querySelector(".navbar-menu");

  if (menu && menuLinks) {
    function toggleMenu() {
      menu.classList.toggle("active");
      menuLinks.classList.toggle("active");
    }

    // If the user clicks, toggle the menu
    menu.addEventListener("click", toggleMenu);
    menuLinks.addEventListener("click", toggleMenu);

    // Clean up event listeners beforeunload
    window.addEventListener("beforeunload", () => {
      menu.removeEventListener("click", toggleMenu);
      menuLinks.removeEventListener("click", toggleMenu);
    });
  }
}

// Smooth scroll functionality for the anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      smoothScrollToAnchor(anchor);
    });
  });
}

// Smooth scroll functionality
function smoothScrollToAnchor(anchor) {
  // Retrieve the target section and header height
  const targetSection = document.querySelector(anchor.getAttribute("href"));
  const headerHeight = document.querySelector("header")?.offsetHeight || 0;

  if (targetSection) {
    window.scrollTo({
      top: targetSection.offsetTop - headerHeight / 2, // Scroll to the target section taking into account the header height
      behavior: "smooth",
    });
    // Focus the targetSection (accessibility)
    targetSection.focus({ preventScroll: true });
  }
}

// Form validation functionality
function initFormValidation() {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", handleFormSubmit);

    // Clean up event listeners beforeunload
    window.addEventListener("beforeunload", () => {
      form.removeEventListener("submit", handleFormSubmit);
    });
  }
}

// Handler for the form submit event
function handleFormSubmit(event) {
  event.preventDefault();

  let isValid = true;

  // Retrieve the form inputs that need to be validated
  const name = document.getElementById("name");
  const email = document.getElementById("email");

  // Clear previous error messages
  clearErrors();

  // Validate the form inputs
  if (!name.value.trim()) {
    showError(name, "El nombre es obligatorio.");
    isValid = false;
  }

  if (!email.value.trim() || !validateEmail(email.value)) {
    showError(email, "Introduce un correo electrónico válido.");
    isValid = false;
  }

  // If the form is valid, show a success message and reset the form
  if (isValid) {
    alert("Formulario enviado con éxito.");
    event.target.reset();
  }
}

// Show an error message below the input functionality
function showError(input, message) {
  const errorSpan = input.nextElementSibling;
  if (errorSpan) {
    errorSpan.textContent = message;
  }
}

// Clear all error messages functionality
function clearErrors() {
  document.querySelectorAll(".error-message").forEach((span) => {
    span.textContent = "";
  });
}

// Email validation functionality with regex
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
