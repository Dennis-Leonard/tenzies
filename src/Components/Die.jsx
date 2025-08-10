import Pips from './Pips';

const Die = (props) => {
  return (
    <button
      onClick={() => props.holdDie(props.die.id)}
      className={props.die.isHeld ? 'held' : null}
      aria-pressed={props.die.isHeld}
      aria-label={'Die with value ' + props.die.value}
    >
      <Pips value={props.die.value} />
    </button>
  );
};

export default Die;
