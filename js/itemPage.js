import { products } from "../data/product.js";

const productPage = document.getElementById('product-page');


function renderProductPage(products){
  productPage.innerHTML = `
  <div class="image-container">
    <img src=${products[0].image}>
    <i class="fa-solid fa-circle-chevron-left" id="left-image"></i>
    <i class="fa-solid fa-circle-chevron-right" id="right-image"></i>
  </div>
<div class="info-box">
  <h2>${products[0].name}</h2>
  <div class="discription-box">
    <h4>description</h4>
    <p>${products[0].info}</p>
  </div>
  <div class="price-box">
    <h5>price</h5>
    <h3>₹${products[0].price}</h3>
    <div class="add-box">
      <div class="input-box">
        <label for="quantity">Quantity:</label>
          <select id="quantity" name="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="3">4</option>
            <option value="3">5</option>
          </select>
      </div>
      <button class="btn">Add To Cart</button>
    </div>
  </div>
</div>`
}
renderProductPage(products);

// const img = document.getElementById('person-img');
// const aurthor = document.getElementById('aurthor');
// const job = document.getElementById('job');
// const info = document.getElementById('info');

// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');
// const randomBtn = document.querySelector('.random-btn');

// // set starting item
// let currentItem = 0;

// // load intial item
// window.addEventListener('DOMContentLoaded', function () {
//   showPerson(currentItem);
// });

// // show person based on item

// function showPerson(person){
//   const item = reviews[person];
//   img.src = item.img;
//   aurthor.textContent = item.name;
//   job.textContent =item.job;
//   info.textContent = item.text;
// }