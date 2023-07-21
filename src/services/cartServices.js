import { activeButtons } from "../Scripts/itemsPlaceHolder";

export const getCart = () => {
  return JSON.parse(localStorage.getItem("carrinho")) || [];
};

export const saveItemInCart = (itemId) => {
  const cart = getCart();
  const newItem = createItem(itemId);
  cart.push(newItem);
  saveCart(cart);
  return newItem;
};

const createItem = (itemId) => {
  const newItem = {
    item_id: itemId,
    amount: 1,
  };
  return newItem;
};

export const saveCart = (cart) => {
  localStorage.setItem("carrinho", JSON.stringify(cart));
};

export const getPurchaseButtons = () => {
  return JSON.parse(localStorage.getItem("purchaseButtons")) || activeButtons;
};

export const saveButtonState = (itemId) => {
  const items = getPurchaseButtons();
  items[itemId].active = false;
  savePurchaseButtons(items);
  return items;
};

export const savePurchaseButtons = (items) => {
  localStorage.setItem("purchaseButtons", JSON.stringify(items));
};

export const updateAmountOfItem = (value, index) => {
  const cart = getCart();
  switch (value) {
    case "add":
      cart[index].amount++;
      break;
    case "remove":
      cart[index].amount--;
      break;
    default:
      break;
  }
  saveCart(cart);
};
