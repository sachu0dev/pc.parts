let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  sections.forEach(section => {
    let top = window.scrollY;
    let height = section.offsetHeight;
    let offset = section.offsetTop - 150;
    let id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });

      document.querySelector(`header .navbar a[href*='${id}']`).classList.add('active');
    }
  });
};

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,

  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".sales-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination-sales",
    clickable: true,
  },

  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



let cartAmount = 0;
const cartElement = document.querySelector('.cart-no');
cartElement.textContent = '';

const preloader = document.querySelector('.pl');

window.addEventListener('load', ()=>{
  preloader.classList.add('hide-preloader');
})