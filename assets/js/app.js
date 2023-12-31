// scrollreveal
const sr = ScrollReveal({
  distance: "45px",
  duration: 2700,
  reset: true,
});

sr.reveal(".image-motion", { delay: 250, origin: "top" });
sr.reveal(".text-motion", { delay: 250, origin: "bottom" });
sr.reveal(".title-motion", { delay: 250, origin: "top" });

// carousel
// let items = document.querySelectorAll(".carousel .carousel-item");

// items.forEach((el) => {
//   const minPerSlide = 4;
//   let next = el.nextElementSibling;
//   for (var i = 1; i < minPerSlide; i++) {
//     if (!next) {
//       // wrap carousel by using first child
//       next = items[0];
//     }
//     let cloneChild = next.cloneNode(true);
//     el.appendChild(cloneChild.children[0]);
//     next = next.nextElementSibling;
//   }
// });

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
