import React from 'react';
import { PipsProps } from '../models/pips-props';
import { PipsData } from '../models/pips-data';
import { PipValues } from '../models/enums/pip-values.enum';

const Pips: React.FC<PipsProps> = ({ value }) => {
  const pipData = (): PipsData => {
    switch (value) {
      case PipValues.ONE:
        return {
          color: 'red',
          layout: [false, false, false, false, true, false, false, false, false],
        };
      case PipValues.TWO:
        return {
          color: 'yellow',
          layout: [false, false, true, false, false, false, true, false, false],
        };
      case PipValues.THREE:
        return {
          color: 'orange',
          layout: [false, false, true, false, true, false, true, false, false],
        };
      case PipValues.FOUR:
        return {
          color: 'green',
          layout: [true, false, true, false, false, false, true, false, true],
        };
      case PipValues.FIVE:
        return {
          color: 'blue',
          layout: [true, false, true, false, true, false, true, false, true],
        };
      case PipValues.SIX:
        return {
          color: 'purple',
          layout: [true, false, true, true, false, true, true, false, true],
        };
    }
  };

  const pips = pipData();

  const pipElements = pips.layout.map((pip, index) => {
    return <span className={pip ? 'circle' : ''} style={pip ? { backgroundColor: pips.color } : {}} key={index}></span>;
  });
  return <div className='pips'>{pipElements}</div>;
};

export default Pips;
