import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import SkincareItemList from "./SkincareItemList";
import SearchBar from "./SearchBar";
import ShoppingCart from "./ShoppingCart";

function App() {
  const [skincareItems, setSkincareItems] = useState([]);
  const [itemsInCart, setItemsInCart] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchedSkincare = () => {
    fetch("http://localhost:8000/skincare")
      .then((response) => response.json())
      .then((data) => setSkincareItems(data));
  };
  useEffect(fetchedSkincare, []);

  const addItem = (addObj) => {
    const checkForDups = itemsInCart.find((eachItem) => {
      return eachItem.id === addObj.id;
    });
    if (checkForDups === undefined) {
      setItemsInCart([...itemsInCart, addObj]);
    } else {
      console.log("its a duplicate!!");
      window.alert("Item has already been added to loves 💕 ");
    }
    fetch("http://localhost:8000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addObj),
    });
  };

  const removeItem = (removeObjId) => {
    const shoppingItems = itemsInCart.filter((eachItem) => {
      return eachItem.id !== removeObjId.id;
    });

    setItemsInCart([...shoppingItems]);
  };

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<></>} />

        <Route path="/about" element={<Header />} />

        <Route
          path="/likes"
          element={
            <ShoppingCart itemsInCart={itemsInCart} removeItem={removeItem} />
          }
        />
      </Routes>

      <SearchBar setSearchText={setSearchText} />
      <SkincareItemList
        skincareItems={skincareItems}
        searchText={searchText}
        addItem={addItem}
        itemsInCart={itemsInCart}
      />
    </div>
  );
}

export default App;
