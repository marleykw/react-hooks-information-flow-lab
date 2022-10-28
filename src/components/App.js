import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header"
import itemData from "../data/items";

function App() {
  let [isDarkMode, setAppClass] = useState(false)
   function onDarkModeClick() {
           setAppClass((isDarkMode) => !isDarkMode)
          }
  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick = {onDarkModeClick}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
