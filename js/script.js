import { products } from "../data/product.js";

const productBox = document.getElementById('product-box');
const slider = document.getElementById('slider');
const choiseBox = document.getElementById('box-container');



//home section slider starts

function renderSlider(products){
  
  for(let i = 0; i < 4; i++){

    let randomDisplay = Math.floor(Math.random() * products.length);

    slider.innerHTML += `
    <div class="swiper-slide slide">
    <div class="content">
      <span>our most popular</span>
      <h3>${products[randomDisplay].name}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam consequatur magni dicta consequuntur alias modi?</p>
      <a href="#" class="btn">order now</a>
    </div>
    <div class="image">
      <img src=${products[randomDisplay].image}>
    </div>
  </div>`
  }
}
renderSlider(products);

//home section slider ends

// featured section starts...

function renderProducts(products){

  for(let i = 0; i < products.length; i++){
    productBox.innerHTML += `
  <div class="box">
    <a href="#" class="fas fa-heart"></a>
    <a href="#" class="fas fa-eye"></a>
    <img src=${products[i].image}>
    <h3>${products[i].name}</h3>
    <div class="starrs">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star-half-alt"></i>
    </div>
    <span>₹${products[i].price}</span>
    <a href="#" class="btn">add to cart</a>
  </div>`
  }
}
renderProducts(products);

// featured section ends...

// products section starts

function renderBox(products){
  
  for(let i = 0; i < 8; i++){

    let randomDisplay = Math.floor(Math.random() * products.length);

    choiseBox.innerHTML += `
    <div class="box">
      <div class="image">
        <img src="${products[randomDisplay].image}" alt="">
        <a href="#" class="fas fa-heart"></a>
      </div>
      <div class="content">
        <div class="starrs">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
        <h3>${products[randomDisplay].name}</h3>
        <p>${products[randomDisplay].info}</p>
        <a href="#" class="btn">add to cart</a>
        <span class="price">₹${products[randomDisplay].price}</span>
      </div>
    </div>`
  }
}
renderBox(products);

// products section ends