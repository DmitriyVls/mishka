const buttonOrder = document.querySelector('.featured__button');
const featured = document.querySelector('.featured__content');
const modal = document.querySelector('.modal');
const clone = modal.cloneNode(true);

const createElementModal = ()=> {
  const modalContent = document.createElement('div');
  const wrapper = document.createElement('div');
  const textStrong = document.createElement('p');
  const modalText = document.createElement('p');
  const modalButton = document.createElement('button');
  const fragments = new DocumentFragment();
  const sizes = ['XS', 'S', 'L'];
  for (let size of sizes) {
    const buttonSize = document.createElement('button');
    buttonSize.classList.add('modal__button-zise');
    buttonSize.textContent = size;
    fragments.append(buttonSize);
  }
  modalContent.classList.add('modal__content');
  textStrong.classList.add('modal__strong-text');
  textStrong.textContent = 'Добавить в корзину';
  modalText.classList.add('modal__text');
  modalText.textContent = 'Выберите размер:';
  wrapper.classList.add('modal__buttons');
  modalButton.className = 'modal__button  button';
  modalButton.textContent = 'Заказать';
  clone.appendChild(modalContent);
  modalContent.appendChild(textStrong);
  modalContent.appendChild(modalText);
  modalContent.appendChild(wrapper);
  wrapper.appendChild(fragments);
  modalContent.appendChild(modalButton);
  clone.style.display = 'block';
};

const deleteModal = ()=> {
  modal.classList.remove('modal-isActive');
  clone.innerHTML = '';
  clone.remove();
  modal.removeEventListener('click', addModalListener());
};

const addModalListener = ()=> {
  modal.addEventListener('click', deleteModal());
};

buttonOrder.addEventListener('click', ()=> {
  createElementModal();
  featured.appendChild(clone);
  modal.classList.add('modal-isActive');
  addModalListener();
});

