import cart from './cart.js';
import utilities from '../helpers/utilities.js';
const bookInfo = {
   price: 24.99,
   title: "Fifty Shades of Chicken",
   image: "./assets/images/book.jpg"
 };
const addToCartEvent = () => {
   console.log('add to cart');
   cart.setCart(bookInfo);
   cart.cartToDom();
}
const makeStore = () => {
   let domString = '<h2>Our only book:</h2>';
   domString += `<p>Buy it now:</p>`;
   domString += `<h3>$${bookInfo.price}</h3>`;
   domString += `<img src="${bookInfo.image}" alt="book cover"/>`;
   domString += `<button id="cart-button" class="btn btn-danger col-12">Add to cart</button>`;
   utilities.printToDom('store-container', domString);
   document.getElementById('cart-button').addEventListener('click', addToCartEvent);
 };
//export default {makestore: makeStore };
export default { makeStore };