const products = [
  {
    id: '79c20f9c-294b-48c2-89a8-812b8fcca22i',
    name: 'iPhone',
    description: 'iPhone is a good one. ',
    price: 100000,
    image: 'image-11',
  },
  {
    id: '79c20f9c-294b-48c2-89a8-812b8fcca22t',
    name: 'Samsung',
    description: 'Samsung is a good one. ',
    price: 100000,
    image: 'image-11',
  },
  {
    id: '79c20f9c-294b-48c2-89a8-812b8fcca22o',
    name: 'Nokia',
    description: 'Nokia is a good one. ',
    price: 100000,
    image: 'image-11',
  },
];

const users = [
  {
    id: '79c20f9c-294b-48c2-89a8-812b8fcca22f',
    name: 'Ahsan Mumtaz',
    isPresent: true,
    productId: '79c20f9c-294b-48c2-89a8-812b8fcca22i',
  },
  {
    id: '79c20f9c-294b-48c2-89a8-812b8fcca22r',
    name: 'Bilal Shabbir',
    isPresent: false,
    productId: '79c20f9c-294b-48c2-89a8-812b8fcca22g',
  },
];

exports.db = {
  products,
  users,
};
