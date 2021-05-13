import { useState } from 'react';

const useInput = (initial, required) => {
  const [value, setValue] = useState(initial);
  const [error, setError] = useState(null);
  return {
    value,
    error,
    onChange: (event) => setValue(event.target.value),
    onBlur: (event) => {
      if (!event.target.value && required) setError('Required field');
      else setError(null);
    },
  };
};

export default useInput;
