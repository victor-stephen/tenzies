import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Die from "./components/Die";

export default function App() {
  const DiceArray = Array.from({ length: 10 }, ()=>Math.floor(Math.random() * 6 ));
  const [rolls, setRolls] = useState(DiceArray);
  function rollDice() {
    setRolls(DiceArray)
  }
  return (
    <main>
      <section className="info">
        <h2>Tenzies</h2>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </section>
      <section className="dice">
        {DiceArray.map((number, index) => (
          <Die
            key={index}
            value={number}
          />
        ))}
      </section>
      <button className="roll-button" onClick={rollDice}>Roll</button>
    </main>
  );
}
