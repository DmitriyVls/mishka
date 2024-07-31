const showModal = () => {
  for (let i = 0; i <= buttonOrders.length - 1; i++) {
    const buttonOrder = buttonOrders[i];
    buttonOrder.addEventListener('click', () => {
      if (buttonOrder.classList.contains('order-js')) {
        createModalOrder();
      } else if (buttonOrder.classList.contains('writeUs-js')) {
        createModalFeedBack();
      };
      featured.appendChild(clone);
      modal.classList.add('modal-isActive');
    });
  }
};
