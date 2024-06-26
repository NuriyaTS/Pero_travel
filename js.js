var swiper = new Swiper(".mySwiper", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 10,
    shadowScale: 0.94,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  }
});
var swiper = new Swiper(".mySecondSwiper", {
  slidesPerView: 3,
  spaceBetween: 0,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  }
});
var swiper = new Swiper(".myFeedSwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  }
});