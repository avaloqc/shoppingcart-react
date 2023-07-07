
import { ShoppingCartHeader } from './ShoppingCartHeader';
import { ShoppingCartBody } from './ShoppingCartBody';
import { ShoppingContext } from '../storage/ShoppingContext';
import { init_cart_items, api_item_data } from "../Scripts/itemsPlaceHolder"

var initialState = { 
  "type": null,
  "carrinho": init_cart_items, 
  "items_data": api_item_data,
  "activeItem": null,
}

export const GridLayout = () => {
  
  return (
    <ShoppingContext initialState={initialState}>
      <ShoppingCartHeader/>
      <ShoppingCartBody/>
    </ShoppingContext>
  )
}