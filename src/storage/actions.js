import * as cartService from '../services/cartServices'

export const addOneToCartAction =  (index) => ({
  type: 'add item',
  payload: index
});

export const addItemtoCartAction = (itemId) => {
  const item = cartService.saveItemInCart(itemId)
  return {
    type: 'add first item',
    payload: item
  }
}

export const removeOneFromCartAction = (index) => ({
  type: 'remove item',
  payload: index
});

export const setButtonOffAction = (index) => ({
  type: 'button off',
  payload: index
});