import { DieProps } from '../models/die-props';
import Pips from './Pips';

const Die = (props: DieProps) => {
  return (
    <button
      type='button'
      onClick={() => props.holdDie(props.die.id)}
      className={props.die.isHeld ? 'held' : ''}
      aria-label={'Die with value ' + props.die.value + ' is ' + (props.die.isHeld ? 'held' : 'not held')}
    >
      <Pips value={props.die.value} />
    </button>
  );
};

export default Die;
