import React, { useState, useMemo, useCallback } from 'react';
import Child from './Child';
import './Parent.css';

const Parent = () => {
  const [num, setNum] = useState(0);
  const [light, setLight] = useState(true);
  const numPlusFour = useMemo(() => plusFour(num), [num]);
  const numPlusFive = useCallback(() => plusFive(num), [num]);
  return (
    <div className={light ? 'light' : 'dark'}>
      <div>
        <h1>With useCallback</h1>
        <h2>
          Current number: {num}, Minus one: {numPlusFour},
          <Child someFunc={numPlusFive} />
        </h2>
        <div className="button-container">
          <button
            onClick={() => {
              setNum(num + 1);
            }}
          >
            Update Number
          </button>
          <button
            onClick={() => {
              setLight(!light);
            }}
          >
            Toggle the light
          </button>
        </div>
      </div>
    </div>
  );
};

function plusFour(num) {
  console.log('useMemo');
  return num + 4;
}

function plusFive(num) {
  console.log('useCallback');
  return num + 5;
}

export default Parent;
