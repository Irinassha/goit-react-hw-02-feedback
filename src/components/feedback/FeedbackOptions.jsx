import React from 'react';
import s from './FeedbackOptions.module.css';
import clsx from 'clsx';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.feedback}>
      {options.map(item => {
        return (
          <li className={s.btnOptions} key={item}>
            <button
              type="button"
              name={item}
              className={clsx(
                item === 'good' ? s.feedbackBtnGreen : s.feedbackBtn,
                item === 'bad' ? s.feedbackBtnRed : s.feedbackBtn
              )}
              onClick={() => onLeaveFeedback(item)}
            >
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
