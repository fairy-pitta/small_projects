import React from 'react';
import PropTypes from 'prop-types';
import styles from './PrimaryButton.module.css';

export const PrimaryButton = ({ label, onClick, disabled }) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

PrimaryButton.defaultProps = {
  disabled: false,
};
