import "./App.css";
import { useState } from "react";
import { data } from "./data";

function App() {
  const [gift, setGift] = useState(0); 
  const { id, name, description, bottle, image } = data[gift];

  const previousGift = () => {
    setGift((gift) => {
      gift--;
      if (gift < 0) {
        return data.length - 1;
      }
      return gift;
    });
  };

  const nextGift = () => {
    setGift((gift) => {
      gift++;
      if (gift > data.length - 1) {
        gift = 0;
      }
      return gift;
    });
  };

  return (
    <div>
      <div className="container">
        <h1>Choose your Christmas gift:</h1>
      </div>

      <div className="container">
        <img src={image} alt="parfume" />
      </div>

      <div className="container">
        <h2>
          {id}. {name}
        </h2>
      </div>
      <div className="container">
        <p>{description}</p>
      </div>

      <div className="container">
        <h2>Bottle {bottle} ml </h2>
      </div>

      <div className="btn container">
        <button onClick={previousGift}>Previous</button>
        <button onClick={nextGift}>Next</button>
      </div>
    </div>
  );
}

export default App;
