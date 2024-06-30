import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryButton } from '../atoms/buttons/PrimaryButton';
import { SecondaryButton } from '../atoms/buttons/SecondaryButton';
import styles from './CounterDisplay.module.css';

export const CounterDisplay = ({ count, increment, decrement, disabled, loading }) => {
  return (
    <div className={styles.counterDisplay}>
      <h2>Counter: {count}</h2>
      <PrimaryButton label="Increment" onClick={increment} disabled={disabled} loading={loading} />
      <SecondaryButton label="Decrement" onClick={decrement} disabled={disabled} loading={loading} />
    </div>
  );
};

CounterDisplay.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

CounterDisplay.defaultProps = {
  disabled: false,
  loading: false,
};
