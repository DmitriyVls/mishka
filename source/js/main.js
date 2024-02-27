const burgerButton = document.querySelector('.burger');
const menu = document.querySelectorAll('.nav__js');
const burger = document.querySelector('.burger');
const searchButton = document.querySelector('.nav__link-search');
const seacrh = document.querySelector('.nav__search-contain');
const seacrhClose = document.querySelector('.nav__close');
const seacrhInput = document.querySelector('.nav__input');

burgerButton.addEventListener('click', ()=>{
  for (const menuItem of menu) {
    menuItem.classList.toggle('is-active');
  }
  burger.classList.toggle('is-active');
  seacrhInput.value = '';
  seacrh.classList.remove('is-active');
});

searchButton.addEventListener('click', ()=>{
  seacrh.classList.add('is-active');
});

seacrhClose.addEventListener('click', () =>{
  seacrhInput.value = '';
  seacrh.classList.remove('is-active');
});
