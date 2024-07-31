const buttonOrders = document.querySelectorAll('.button');
const contents = document.querySelector('.content-js');
const modal = document.querySelector('.modal');
const clone = modal.cloneNode(true);
const textStrong = document.createElement('p');
const modalText = document.createElement('p');
const modalButton = document.createElement('button');

const createModal = ()=> {
  const modalContent = document.createElement('div');
  const modalForm = document.createElement('form');
  const wrapper = document.createElement('div');
  const fragments = new DocumentFragment();

  const sizes = ['XS', 'S', 'L'];
  for (let size of sizes) {
    const label = document.createElement('label');
    const checkBoxSize = document.createElement('input');
    checkBoxSize.type = 'checkBox';
    checkBoxSize.name = size;
    checkBoxSize.classList.add('modal__button-zise');
    fragments.append(label);
    label.append(checkBoxSize);
  }
  modalContent.classList.add('modal__content');
  modalForm.method = 'post';
  modalForm.action = 'https://echo.htmlacademy.ru';
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
  modalContent.appendChild(modalForm);
  modalForm.appendChild(wrapper);
  wrapper.appendChild(fragments);
  modalForm.appendChild(modalButton);
  clone.style.display = 'block';
};

const deleteModal = ()=> {
  clone.remove();
  clone.innerHTML = '';
  modal.classList.remove('modal-isActive');
};

modal.addEventListener('click', (deleteModal));


const showModal = ()=> {
  for (let i = 0; i <= buttonOrders.length - 1; i++) {
    const buttonOrder = buttonOrders[i];

    buttonOrder.addEventListener('click', ()=> {
      if (buttonOrder.classList.contains('order-js')) {
        createModal();
      }
      modal.classList.add('modal-isActive');
      contents.appendChild(clone);
    });
  }
};

showModal();
