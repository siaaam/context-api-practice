import { useContext } from 'react';
import { CounterContext } from './context/CounterContext';

function App() {
  const context = useContext(CounterContext);
  const { incrementCount, decrementCount, resetCount, count } = context;

  return (
    <div className="App">
      <p>count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default App;
