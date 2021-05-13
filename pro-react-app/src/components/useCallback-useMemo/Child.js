import { useState, useEffect } from 'react';

const Child = ({ someFunc }) => {
  const [calcNum, setCalcNum] = useState(0);
  useEffect(() => {
    setCalcNum(someFunc());
  }, [someFunc]);

  return <span> Plus five: {calcNum}</span>;
};

export default Child;
