import * as cartService from '../services/cartServices'
import { activeButtons } from '../Scripts/itemsPlaceHolder';
import { getPurchaseButtons } from '../services/cartServices';

export const addOneToCartAction = (index) => {
  cartService.updateAmountOfItem("add",index)
  return {
    type: 'add item',
    payload: index
  }
}

export const addItemToCartAction = (itemId) => {
  const item = cartService.saveItemInCart(itemId)
  return {
    type: 'add first item',
    payload: item
  }
}

export const removeOneFromCartAction = (index) => {
  cartService.updateAmountOfItem("remove",index)
  return {
    type: 'remove item',
    payload: index
  }
}

export const emptyCartAction = () => {
  cartService.savePurchaseButtons(activeButtons)
  cartService.saveCart([])

  return {
    type: 'empty cart'
  }
}