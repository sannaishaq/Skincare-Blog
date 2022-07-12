import React from "react";
import SkincareItem from "./SkincareItem";

function SkincareItemList({ skincareItems, searchText, addItem, itemsInCart }) {
  console.log("items from fetch in the skincare list", skincareItems);
  console.log('searchtext', searchText);

  const filteredItems = skincareItems.filter((itemToFind) => {
    if (
      itemToFind.name.toLowerCase().includes(searchText.toLowerCase()) ||
      itemToFind.skinType.toLowerCase().includes(searchText.toLowerCase())
    ) {
      return itemToFind;
    }
  });
  console.log("filteredItems", filteredItems)

  const addToCart = (itemToAdd) => {
    addItem(itemToAdd);
  };

  console.log("filtered version", filteredItems);

  return (
    <ul className="cards">
      {" "}
      {filteredItems.map((eachItem) => {
        return (
          <SkincareItem
            eachItem={eachItem}
            key={eachItem.id}
            clickFunction={addToCart}
            itemsInCart={itemsInCart}
          />
        );
      })}
    </ul>
  );
}

export default SkincareItemList;
