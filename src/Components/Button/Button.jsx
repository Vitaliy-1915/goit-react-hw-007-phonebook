import React from 'react';
import s from '../Button/Button.module.css';

function Button(props) {
  const { type, text, onClick } = props;
  return (
    <>
      <button type={type} onClick={onClick} className={s.button}>
        {text}
      </button>
    </>
  );
}

export default Button;
