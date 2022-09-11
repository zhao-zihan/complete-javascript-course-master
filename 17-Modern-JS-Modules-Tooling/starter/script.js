// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// addToCart('food');
// console.log(price, tq);

// import * as ShoppingCart from './shoppingCart.js';

// console.log('Importing');
// ShoppingCart.addToCart('food');
// console.log(ShoppingCart.totalPrice);
// console.log(ShoppingCart.tq);

import add, { cart } from './shoppingCart.js';
add('pizza');
add('apple');
add('bread');

console.log(cart);

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

// import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: {
    loggedIn: true,
  },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}
