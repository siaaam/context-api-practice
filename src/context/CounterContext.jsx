import { createContext, useReducer } from 'react';
import { DECREMENT, INCREMENT, RESETCOUNT } from './actions';
import { countReducer } from './countReducer';

// create context
export const CounterContext = createContext();

// create provider

const CountProvider = ({ children }) => {
  const [count, dispatch] = useReducer(countReducer, 0);

  const incrementCount = () => {
    // setCount((prev) => prev + 1);
    dispatch({ type: INCREMENT, payload: 1 });
    // increment(dispatch, 2);
  };

  const decrementCount = () => {
    // setCount((prev) => prev - 1);
    dispatch({ type: DECREMENT, payload: 1 });
  };

  const resetCount = () => {
    // setCount(0);
    dispatch({ type: RESETCOUNT });
  };

  const value = {
    count,
    incrementCount,
    decrementCount,
    resetCount,
  };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};
export default CountProvider;
