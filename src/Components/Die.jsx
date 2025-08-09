import React from 'react';

const Die = (props) => {
  return (
    <button
      onClick={() => props.holdDie(props.die.id)}
      className={props.die.isHeld ? 'held' : null}
      aria-pressed={props.die.isHeld}
      aria-label={'Die with value ' + props.die.value}
    >
      {props.die.value}
    </button>
  );
};

export default Die;
