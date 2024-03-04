const productCardImage = [
  'img/jpeg/main-product-card-mobile.jpg'
];

const productName = [
  'Вязаные корзинки',
  'Не вязаные корзинки',
  'Кованные корзинки'
];

const productDescription = [
  'Экологически чистая пряжа, ручная работа. Доступны в шести расцветках и трёх размерах.',
  'Не экологически чистая пряжа, не ручная работа. Не доступны в шести расцветках и трёх размерах.',
  'Экологически чистая пряжа, не ручная работа. Доступны в пяти расцветках и двух размерах.'
];

const productColor = [
  'красный',
  'зеленый',
  'синий',
  'тиффани/серый'
];

const productHigh = [
  '15 см',
  '25 см',
  '45 см'
];

const productDiameter = [
  '25 см',
  '15 см',
  '35 см'
];

const productPrice = [
  '999 руб.',
  '199 руб.',
  '299 руб.',
  '399 руб.',
  '499 руб.',
  '599 руб.',
  '699 руб.',
  '799 руб.'
];

const productImportant = [
  'false',
  'true'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createProductCard = () => ({
  image: getRandomArrayElement(productCardImage),
  name: getRandomArrayElement(productName),
  color: getRandomArrayElement(productColor),
  description: getRandomArrayElement(productDescription),
  deameter: getRandomArrayElement(productDiameter),
  high: getRandomArrayElement(productHigh),
  cost: getRandomArrayElement(productPrice),
  important: getRandomArrayElement(productImportant),
});

const productCard = createProductCard();

console.log(productCard)

export {productCard};
