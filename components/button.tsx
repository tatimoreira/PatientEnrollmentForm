import React, {FC, ButtonHTMLAttributes} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  type: 'submit' | 'button' | 'reset';
  disabled: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button:FC<ButtonProps> = ({ type, children,  onClick }) => (
  <button type={type} onClick={onClick} className={styles.Button}>
    {children}
  </button>
)
export default Button;

