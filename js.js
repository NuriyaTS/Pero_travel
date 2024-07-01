var swiper = new Swiper(".mySwiper", {
  effect: "cube",
  grabCursor: true,
  // loop: true,
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
  spaceBetween: 10,
  freeMode: true,
  // loop: true,
  breakpoints: {
    900: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true
    }
  },
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
  spaceBetween: 10,
  freeMode: true,
  loop: true,
  breakpoints:{
  700: {
      slidesPerView: 2,
      spaceBetween: 30,
      loop:true
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      loop:true
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});
function showBurger() {
  let ul = document.querySelector('header ul');
  ul.classList.toggle('active');
  let brg = document.querySelector('header .burger');
  brg.classList.toggle('active');
  let bef = document.querySelector('header .burger::before');
  bef.classList.toggle('active');
};