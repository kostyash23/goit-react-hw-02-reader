import React from 'react';
import styles from './Controls.module.css';
import PropTypes from 'prop-types';

const Controls = ({ changeIndex, activeIndex, itemsLength }) => {
  return (
    <div className={styles.controls}>
      <button
        type="button"
        className={styles.button}
        name="prev"
        onClick={changeIndex}
        disabled={!activeIndex}
      >
        Назад
      </button>
      <button
        type="button"
        class={styles.button}
        name="next"
        onClick={changeIndex}
        disabled={!(activeIndex < itemsLength - 1)}
      >
        Вперед
      </button>
    </div>
  );
};

Controls.propTypes = {
  changeIndex: PropTypes.func.isRequired,
  activeIndex: PropTypes.number.isRequired,
  itemsLength: PropTypes.number.isRequired,
};
export default Controls;
