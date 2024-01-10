import { products } from "../data/product.js";




//home section slider starts

const slider = document.getElementById('slider');

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
const productBox = document.getElementById('product-box');

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