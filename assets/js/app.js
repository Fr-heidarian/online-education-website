// scrollreveal
const sr = ScrollReveal({
  distance: "45px",
  duration: 2700,
  reset: true,
});

sr.reveal(".image-motion", { delay: 250, origin: "top" });
sr.reveal(".text-motion", { delay: 250, origin: "bottom" });
sr.reveal(".title-motion", { delay: 250, origin: "top" });

// Owl-Carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});

// Swiper
const swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
    1560: {
      slidesPerView: 3,
    },
  },
});
// checkbox form
const checkboxes = document.querySelectorAll('input[name="gender"]');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", () => selectbox(checkbox.id));
});

function selectbox(checkboxId) {
  checkboxes.forEach((checkbox) => {
    if (checkbox.id !== checkboxId) {
      checkbox.checked = false;
    }
  });
}

// /* Change Navigation Style On Scroll */
window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  var scrolled = document.documentElement.scrollTop;

  if (scrolled > 0) {
    nav.classList.add("scrolled-nav");
  } else {
    nav.classList.remove("scrolled-nav");
  }
});
