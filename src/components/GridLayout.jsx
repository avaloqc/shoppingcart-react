
// import { createContext, useState } from 'react';
import { ShoppingCartHeader } from './ShoppingCartHeader';
import { ShoppingCartBody } from './ShoppingCartBody';
import { cart } from '../Scripts/itemsPlaceHolder'

// export const ShoppingContext = createContext({});

export const GridLayout = () => {

  // var [uQuantities, setQuantities] = useState(quantities)
  
  return (
      // <ShoppingContext.Provider value={{items, quantities}}>
        <>
          <ShoppingCartHeader cart={cart}  />
          <ShoppingCartBody cart={cart} />
        </>
      // </ShoppingContext.Provider>
  )
}