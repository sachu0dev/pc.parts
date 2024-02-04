import { products } from "../data/product.js";

const productBox = document.getElementById('product-box');
const slider = document.getElementById('slider');
const choiseBox = document.getElementById('box-container');


window.addEventListener('DOMContentLoaded', () => {
  renderSlider(products);
  renderProducts(products);
  renderBox(products);
  displayFilterBtn();
});



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
        <a href="product.html" class="btn">order now</a>
      </div>
      <div class="image">
      <a href="product.html?id=${products[randomDisplay].id}"><img src=${products[randomDisplay].image}></a>
      </div>
  </div>`
  }
}


function renderBox(products){
  
  for(let i = 0; i < 8; i++){
    
    let randomDisplay = Math.floor(Math.random() * products.length);
    
    choiseBox.innerHTML += `
    <div class="box ${products[randomDisplay].id}">
      <div class="image">
      <a href="product.html?id=${products[randomDisplay].id}"><img src="${products[randomDisplay].image}"></a>
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

const filterBtn = document.querySelector('.filter-show-btn');
const filterArrow = document.querySelector('.filter-arrow');
const filterBtns = document.querySelector('.filter-button-container');


function renderProducts(products){
  let productsItems = products.map((item)=>{
    return `
      <div class="box" data-id="${item.id}">
        <a href="#" class="fas fa-heart"></a>
        <a href="#" class="fas fa-eye"></a>
        <a href="product.html?id=${item.id}"><img src=${item.image}></a>
        <h3>${item.name}</h3>
        <div class="starrs">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹${item.price}</span>
        <a href="#" class="btn">add to cart</a>
      </div>`
  });
  productsItems = productsItems.join('');
  productBox.innerHTML = productsItems;
}


function displayFilterBtn(){

  filterBtn.addEventListener('click', ()=>{
    if(filterArrow.classList.contains('fa-angle-down')){
      filterArrow.classList.remove('fa-angle-down');
      filterArrow.classList.add('fa-angle-up');
    } else if(filterArrow.classList.contains('fa-angle-up')){
      filterArrow.classList.remove('fa-angle-up');
      filterArrow.classList.add('fa-angle-down');
    }
    filterBtns.classList.toggle('show-filters');
  });

  const categories = products.reduce(function(values, item){
    if(!values.includes(item.keyword1)){
      values.push(item.keyword1);
    }
    if(!values.includes(item.keyword2)){
      values.push(item.keyword2);
    }
    return values
  },['all']);
  
  const categoryBtns = categories.map((category) => {
    return `<button class="filter-btn" type="button" data-id="${category}">
      <i class="fa-solid fa-check"></i> ${category}
    </button>`;
  }).join("");
  filterBtns.innerHTML = categoryBtns;
  const addedBtns = document.querySelectorAll('.filter-btn');
  //filter items
  addedBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = products.filter(function (menuItem) {
        return menuItem.keyword1 === category || menuItem.keyword2 === category;
      });
      if (category === 'all') {
        renderProducts(products);
      } else {
        renderProducts(menuCategory);
      }
    });
  });
}