import { useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';
import './App.css';
import Die from './Components/Die';

function App() {
  const randomNumber = (range) => Math.ceil(Math.random() * range);
  const buttonRef = useRef(null);
  const numberOfDice = 10;
  const [dice, setDice] = useState(() => generateAllNewDice());
  const tenzies = dice.every(
    (die) => die.isHeld && die.value === dice[0].value
  );

  useEffect(() => {
    if (tenzies) {
      buttonRef.current.focus();
    }
  }, [tenzies]);

  function generateAllNewDice() {
    return new Array(numberOfDice).fill().map(() => {
      const value = randomNumber(6);

      return { value, isHeld: false, id: nanoid() };
    });
  }

  function rollDice() {
    if (tenzies) {
      setDice(generateAllNewDice);
    } else {
      setDice((prevDice) =>
        prevDice.map((die) =>
          die.isHeld ? die : { ...die, value: randomNumber(6) }
        )
      );
    }
  }

  function holdDie(holdId) {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === holdId ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  const dieElements = dice.map((die) => (
    <Die key={die.id} die={die} holdDie={holdDie} />
  ));

  return (
    <>
      <main>
        {tenzies && <Confetti />}
        <div aria-live="polite" className="sr-only">
          {tenzies ? (
            <p>
              Congratulations: You have won! Press "New Game" to start again.
            </p>
          ) : null}
        </div>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dice-container">{dieElements}</div>
        <button ref={buttonRef} className="roll-dice" onClick={rollDice}>
          {tenzies ? 'New Game' : 'Roll'}
        </button>
      </main>
    </>
  );
}

export default App;

