
import { activeButtons } from "../Scripts/itemsPlaceHolder";
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


//??------------------------------------------------------------
export const getPurchaseButtons =  () => {
  return JSON.parse(localStorage.getItem('purchaseButtons')) || activeButtons;
}

export const saveButtonState =  (index) => {
  const items = getPurchaseButtons();
  items[index] = true
  savePurchaseButtons(items);
  return items;
}

const savePurchaseButtons = (items) => {
  localStorage.setItem('purchaseButtons', JSON.stringify(items));
}
