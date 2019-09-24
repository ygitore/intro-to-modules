import utilities from '../helpers/utilities.js'
const cart = [];
const setCart = (book) => {
   cart.push(book);
};
const cartToDom = () => {
    let domString = 'this is the cart';
    utilities.printToDom('cart-container', domString);
};
export default { setCart, cartToDom };