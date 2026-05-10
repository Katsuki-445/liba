/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== SERVICES MODAL ===============*/
// Get the modal
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

// When the user clicks on the button, open the modal
let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});

// Close modal when clicking outside of modal-content
modalViews.forEach((mv) => {
  mv.addEventListener("click", (e) => {
    if (e.target.classList.contains("services__modal")) {
      mv.classList.remove("active-modal");
    }
  });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
if (document.querySelector(".work__container")) {
  let mixer = mixitup(".work__container", {
    selectors: {
      target: ".work__card",
    },
    animation: {
      duration: 300,
    },
  });
}

/* Link active work */
const workLinks = document.querySelectorAll(".work__item");

function activeWork(workLink) {
  workLinks.forEach((wl) => {
    wl.classList.remove("active-work");
  });
  workLink.classList.add("active-work");
}

workLinks.forEach((wl) => {
  wl.addEventListener("click", () => {
    activeWork(wl);
  });
});

/*=============== SWIPER TESTIMONIAL ===============*/
if (document.querySelector(".testimonial__container")) {
  let swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 48,
      },
    },
  });
}

/*=============== PAGE ACTIVE LINK ===============*/
function setActiveLink() {
  let currentPage = window.location.pathname.split("/").pop() || "index.html";
  currentPage = currentPage.replace(/\.html$/, "");
  
  document.querySelectorAll(".nav__link").forEach((link) => {
    let linkPage = link.getAttribute("href");
    linkPage = linkPage.replace(/\.html$/, "");
    
    // Default matching logic
    let isActive = (linkPage === currentPage);

    // Special case for detail pages to keep parent section glowing
    if (currentPage === "project-detail" && linkPage === "portfolio") {
      isActive = true;
    }
    if (currentPage === "certificate-detail" && linkPage === "expertise") {
      isActive = true;
    }

    if (isActive) {
      link.classList.add("active-link");
    } else {
      link.classList.remove("active-link");
    }
  });
}
setActiveLink();

/*=============== MULTI-THEME CYCLER ===============*/
const themeButton = document.getElementById("theme-button");

// Define the themes in order: Cyan (default), Emerald, Crimson, Original, Light
const themes = ["", "theme-emerald", "theme-crimson", "theme-original", "light-theme"];
// Define icons corresponding to themes
const themeIcons = ["bx-moon", "bx-leaf", "bxs-flame", "bxs-moon", "bx-sun"];

let currentThemeIndex = 0;

// Get previously saved theme index
const savedThemeIndex = localStorage.getItem("selected-theme-index");
if (savedThemeIndex !== null) {
  currentThemeIndex = parseInt(savedThemeIndex);
  applyTheme(currentThemeIndex);
}

function applyTheme(index) {
  // Remove all theme classes first
  document.body.classList.remove("theme-emerald", "theme-crimson", "theme-original", "light-theme");
  
  // Add the new theme class if it's not the empty default
  if (themes[index] !== "") {
    document.body.classList.add(themes[index]);
  }
  
  // Update icon
  themeButton.className = "bx change-theme change-theme-button " + themeIcons[index];
}

// Activate / cycle the theme manually with the button
themeButton.addEventListener("click", () => {
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  applyTheme(currentThemeIndex);
  localStorage.setItem("selected-theme-index", currentThemeIndex);
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: false,
});

sr.reveal(`.nav__menu`, {
  delay: 100,
  scale: 0.1,
  origin: "bottom",
  distance: "300px",
});

sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, {
  delay: 100,
});

sr.reveal(`.home__social, .home__scroll`, {
  delay: 100,
  origin: "bottom",
});

sr.reveal(`.about__img`, {
  delay: 100,
  origin: "left",
  scale: 0.9,
  distance: "30px",
});

sr.reveal(`.about__data, .about__description, .about__button-contact`, {
  delay: 100,
  scale: 0.9,
  origin: "right",
  distance: "30px",
});

sr.reveal(`.skills__content`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

sr.reveal(`.services__title, services__button`, {
  delay: 100,
  scale: 0.9,
  origin: "top",
  distance: "30px",
});

sr.reveal(`.work__card`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
  reset: false,
});

sr.reveal(`.process__card`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
  interval: 150,
});

sr.reveal(`.cta__title, .cta__description, .cta__button`, {
  delay: 100,
  origin: "bottom",
  distance: "30px",
  interval: 100,
});

sr.reveal(`.testimonial__container`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

sr.reveal(`.contact__info, .contact__title-info`, {
  delay: 100,
  scale: 0.9,
  origin: "left",
  distance: "30px",
});

sr.reveal(`.contact__form, .contact__title-form`, {
  delay: 100,
  scale: 0.9,
  origin: "right",
  distance: "30px",
});

sr.reveal(`.experience__item`, {
  delay: 100,
  scale: 0.9,
  origin: "left",
  distance: "30px",
  interval: 200,
});

sr.reveal(`.certificates__card`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
  interval: 150,
});

sr.reveal(`.languages__card`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
  interval: 200,
});

sr.reveal(`.footer, footer__container`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

/*=============== LENIS SMOOTH SCROLL ===============*/
const lenis = new Lenis({
  lerp: 0.15,
  smoothWheel: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

/*=============== VANILLA TILT 3D ===============*/
// Only apply tilt to recent works on home page
if (typeof VanillaTilt !== "undefined") {
  const homeWorkCards = document.querySelectorAll(".home-work .work__card");
  if (homeWorkCards.length > 0) {
    VanillaTilt.init(homeWorkCards, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
    });
  }
}

/*=============== SERVICES CARD TOUCH / CLICK ===============*/
// Make the whole service card tappable to open modal
document.querySelectorAll(".services__card").forEach((card, i) => {
  card.addEventListener("click", (e) => {
    // Only trigger if not clicking the button itself (avoid double-fire)
    if (!e.target.closest(".services__button")) {
      if (typeof modalViews !== "undefined" && modalViews[i]) {
        modalViews[i].classList.add("active-modal");
      }
    }
  });
});

/*=============== CUSTOM CURSOR ===============*/
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

if (cursorDot && cursorOutline && window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({
      left: `${posX}px`,
      top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
  });
}

/*=============== MAGNETIC BUTTONS ===============*/
const magButtons = document.querySelectorAll(".button, .nav__link, .home__social-link, .change-theme, .services__button, .footer__social-link, .contact__method");

if (window.matchMedia("(pointer: fine)").matches) {
  magButtons.forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      if (cursorOutline) {
        cursorOutline.classList.add("cursor-hover");
      }
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = `translate(0px, 0px)`;
      if (cursorOutline) {
        cursorOutline.classList.remove("cursor-hover");
      }
    });
  });
}

/*=============== PAGE TRANSITIONS ===============*/
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  // Move modals to body to fix stacking context issues (ensures they are in front of everything)
  document.querySelectorAll(".services__modal").forEach((modal) => {
    document.body.appendChild(modal);
  });
});


/*=============== CURSOR FOOTER DETECTION ===============*/
const footer = document.querySelector(".footer");
if (footer && cursorDot && cursorOutline) {
  footer.addEventListener("mouseenter", () => {
    cursorDot.classList.add("cursor-footer");
    cursorOutline.classList.add("cursor-footer");
  });
  footer.addEventListener("mouseleave", () => {
    cursorDot.classList.remove("cursor-footer");
    cursorOutline.classList.remove("cursor-footer");
  });
}