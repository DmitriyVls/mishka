import {productCard} from './data.js';

const productCardImage = document.querySelector('.js-image');
const productCardName = document.querySelector('.js-title');
const productCardDecription = document.querySelector('.js-description');
const productCardColor = document.querySelector('.js-color');
const productCardHigh = document.querySelector('.js-high');
const productCardDiameter = document.querySelector('.js-diameter');
const productCardCost = document.querySelector('.js-cost');
const productCardImportant = document.querySelector('.js-important');

productCardImage.src = productCard.image;
productCardName.textContent = productCard.name;
productCardDecription.textContent = productCard.description;
productCardColor.textContent = productCard.color;
productCardHigh.textContent = productCard.high;
productCardDiameter.textContent = productCard.deameter;
productCardCost.textContent = productCard.cost;

if (productCard.important === 'true') {
  productCardImportant.textContent = 'Товар недели';
}

