import { useState } from "react";
import "./App.css";

function App() {
  const [cards, setCards] = useState(["A", "B", "A", "B"]);
  const [flipped, setFlipped] = useState([]);

  const flipCard = (index) => {
    if (flipped.includes(index)) return;
    setFlipped([...flipped, index]);
  };

  return (
    <>
      <div>
        <h1>Memory Game</h1>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(4,100px)" }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                width: "100px",
                height: "100px",
                border: "1px solid black",
                textAlign: "center",
                inneHeight: "100px",
                background: flipped.includes(index) ? "#000" : "#000",
              }}
              onClick={() => flipCard(index)}>
            {flipped.includes(index) ? card : ""} 
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
