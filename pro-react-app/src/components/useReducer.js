import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <span style={{ fontSize: '40px' }}>Count: {state.count}</span>
      <button
        className="counter__btn"
        onClick={() => dispatch({ type: 'decrement' })}
      >
        -
      </button>
      <button
        className="counter__btn"
        onClick={() => dispatch({ type: 'increment' })}
      >
        +
      </button>
    </>
  );
}
