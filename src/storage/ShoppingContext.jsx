import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

export const Context = createContext({});

export const useShoppingContext = () => useContext(Context);

export const ShoppingContext = ({ children, initialState }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState)
  
  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  )
}