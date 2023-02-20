import React, { createContext, useState} from "react";

export const StoreContext = createContext(null);

const DefaultCart = (props) => {
  // const num = Object.keys(props.products).length
  // console.log(Object.keys(props.products))
  const stock = 20
  let cart = {};
  for (let i = 1; i < stock + 1; i++) {
    cart[i] = 0
  };
  return cart;
};

export const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(DefaultCart(props));
  
  const addToCart = (ItemId) => {
    setCartItems((prev) => ({...prev, [ItemId]: prev[ItemId] + 1}));
  };

  const removeFromCart = (ItemId) => {
    setCartItems((prev) => ({...prev, [ItemId]: prev[ItemId] - 1}));
  };

  const updateCartInput = (newAmount, ItemId) => {
    setCartItems((prev) => ({...prev, [ItemId]: newAmount }));
  };

  const contextValues = {cartItems, addToCart, removeFromCart, updateCartInput}

  return <StoreContext.Provider value={contextValues}>{props.children}</StoreContext.Provider>;
};
