import React from 'react';

const Pips = ({ value }) => {
  const pipData = () => {
    switch (value) {
      case 1:
        return {
          color: 'red',
          layout: [false, false, false, false, true, false, false, false, false],
        };
      case 2:
        return {
          color: 'yellow',
          layout: [false, false, true, false, false, false, true, false, false],
        };
      case 3:
        return {
          color: 'orange',
          layout: [false, false, true, false, true, false, true, false, false],
        };
      case 4:
        return {
          color: 'green',
          layout: [true, false, true, false, false, false, true, false, true],
        };
      case 5:
        return {
          color: 'blue',
          layout: [true, false, true, false, true, false, true, false, true],
        };
      case 6:
        return {
          color: 'purple',
          layout: [true, false, true, true, false, true, true, false, true],
        };
    }
  };

  const pips = pipData();

  const pipElements = pips.layout.map((pip, index) => {
    return (
      <span className={pip ? 'circle' : null} style={pip ? { backgroundColor: pips.color } : null} key={index}></span>
    );
  });
  return <div className='pips'>{pipElements}</div>;
};

export default Pips;
