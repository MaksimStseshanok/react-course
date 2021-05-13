import { useState, useEffect } from 'react';

const CountHookComponent = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log('useEffect has been run');
  });

  // useEffect(() => {
  //   console.log('useEffect has been run one time');
  // }, []);

  // useEffect(() => {
  //   console.log('useEffect controls only the first counter');
  // }, [counter]);

  return (
    <>
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => setCounter(counter + 1)}
        className="counter"
      >
        <h1>{counter}</h1>
      </div>
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => setCounter2(counter2 + 1)}
        className="counter"
      >
        <h1>{counter2}</h1>
      </div>
    </>
  );
};

export default CountHookComponent;
