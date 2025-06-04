import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
// import { useWindowSize } from "react-use";
import Die from "./components/Die";

export default function App() {
  const [dice, setDice] = useState(() => generateAllNewDice());

  let gameWon = dice.every(
    (die, index) => die.isHeld === true && dice[0].value === dice[index].value
  );

  // random dice generator
  function generateAllNewDice() {
    const DiceArray = Array.from({ length: 10 }, () => {
      return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        dieId: nanoid(),
      };
    });
    return DiceArray;
  }

  // roll dice
  function rollDice() {
    gameWon
      ? setDice(generateAllNewDice())
      : setDice((prevDice) =>
          prevDice.map((prevDie) =>
            prevDie.isHeld
              ? prevDie
              : {
                  ...prevDie,
                  value: Math.ceil(Math.random() * 6),
                }
          )
        );
  }

  function holdDice(dieId) {
    setDice((prevDice) =>
      prevDice.map((prevDie) =>
        prevDie.dieId === dieId
          ? { ...prevDie, isHeld: !prevDie.isHeld }
          : { ...prevDie }
      )
    );
  }

  return (
    <main>
        {gameWon&& <Confetti />}
      <section className="info">
        <h2>Tenzies</h2>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </section>
      <section className="dice">
        {dice &&
          dice.map((dieObj, index) => (
            <Die
              key={dieObj.dieId}
              dieObj={dieObj}
              holdDice={() => holdDice(dieObj.dieId)}
            />
          ))}
      </section>
      <button
        className="roll-button"
        onClick={rollDice}
      >
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
