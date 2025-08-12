import { useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';
import './App.css';
import Die from './components/Die';
import Victory from './assets/brass.mp3';
import { DieState } from './models/die-state';

function App() {
  const randomNumber = (range: number) => Math.ceil(Math.random() * range);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const numberOfDice: number = 10;
  const [dice, setDice] = useState<DieState[]>(() => generateAllNewDice());
  const tenzies: boolean = dice.every((die) => die.isHeld && die.value === dice[0].value);

  useEffect(() => {
    if (tenzies) {
      if (buttonRef.current) {
        buttonRef.current.focus();
        victory.volume = 0.5;
        victory.play();
      }
    }
  }, [tenzies]);

  function generateAllNewDice(): DieState[] {
    return new Array(numberOfDice).fill(10).map(() => {
      const value = randomNumber(6);

      return { value, isHeld: false, id: nanoid() };
    });
  }

  function rollDice(): void {
    if (tenzies) {
      setDice(generateAllNewDice);
    } else {
      setDice((prevDice) => prevDice.map((die) => (die.isHeld ? die : { ...die, value: randomNumber(6) })));
    }
  }

  function holdDie(holdId: string): void {
    setDice((prevDice) => prevDice.map((die) => (die.id === holdId ? { ...die, isHeld: !die.isHeld } : die)));
  }

  const dieElements = dice.map((die) => <Die key={die.id} die={die} holdDie={holdDie} />);

  const victory = new Audio(Victory);

  return (
    <>
      <main>
        {tenzies && <Confetti recycle={false} numberOfPieces={3000} />}
        <div aria-live='polite' className='sr-only'>
          {tenzies ? <p>Congratulations: You have won! Press "New Game" to start again.</p> : null}
        </div>
        <h1 className='title'>Tenzies</h1>
        <p className='instructions'>
          Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
        </p>
        <div className='dice-container'>{dieElements}</div>
        <button ref={buttonRef} className='roll-dice' onClick={rollDice}>
          {tenzies ? 'New Game' : 'Roll'}
        </button>
      </main>
    </>
  );
}

export default App;

