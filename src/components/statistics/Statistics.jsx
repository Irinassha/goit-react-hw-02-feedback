import React from 'react';
import s from './Statistics.module.css';
import clsx from 'clsx';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p className={s.statisticsText}>Good: {good}</p>
      <p className={s.statisticsText}>Neutral: {neutral}</p>
      <p className={s.statisticsText}>Bad: {bad}</p>
      <p className={s.statisticsText}>Total: {total}</p>
      <p className={s.statisticsText}>
        Positive feedback:{' '}
        <span
          className={clsx(s.statisticsText,
            positivePercentage > 50 && s.statisticsTextGreen,
            positivePercentage < 50 && s.statisticsTextRed
          )}
        >
          {Math.round(positivePercentage)}%
        </span>
      </p>
    </div>
  );
};
