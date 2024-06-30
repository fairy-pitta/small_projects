import React, { useState } from 'react';
import { CounterDisplay } from '../molecules/CounterDisplay';
import styles from './Counter.module.css';

export const Counter = ({ initialCount = 0, disabled = false, loading = false }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <div className={styles.counter}>
      <CounterDisplay 
        count={count} 
        increment={() => setCount(count + 1)} 
        decrement={() => setCount(count - 1)} 
        disabled={disabled} 
        loading={loading}
      />
    </div>
  );
};
