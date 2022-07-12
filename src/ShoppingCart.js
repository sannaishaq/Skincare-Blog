import React from "react";
import SkincareItem from "./SkincareItem";

function ShoppingCart({ itemsInCart, removeItem }) {
  const removeFromCart = (eachItem) => {
    removeItem(eachItem);
  };

  return (
    <div > 
    <h4 className="shopping">My Top Picks</h4>
    <ul className="cards">
     
      {itemsInCart.map((eachItem) => {
        return (
          <SkincareItem
            eachItem={eachItem}
            key={eachItem.id}
            clickFunction={removeFromCart}
          />
        );
      })}
    </ul>
    </div>
    
  );
}

export default ShoppingCart;
