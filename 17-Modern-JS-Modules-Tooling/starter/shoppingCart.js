// Exporting module
console.log('Exporting');

const shoppingCart = 10;
export const cart = [];

export const addToCart = function (product) {
  cart.push({ product });
  console.log(`${product} added to cart`);
};

const totalPrice = 23;
const totalQuantity = 3;

export { totalPrice, totalQuantity as tq };

export default function (product) {
  cart.push({ product });
  console.log(`${product} added to cart`);
}
