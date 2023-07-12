
export const getCart =  () => {
  return JSON.parse(localStorage.getItem('carrinho')) || [];
}

export const saveItemInCart =  (itemId) => {
  const cart = getCart();
  const newItem = createItem(itemId)
  cart.push(newItem);
  saveCart(cart);
  return newItem;
}

const createItem = (itemId) => {
  const newItem = {
    item_id: itemId,
    amount: 1
  };
  return newItem;
}

const saveCart = (cart) => {
  localStorage.setItem('carrinho', JSON.stringify(cart));
}