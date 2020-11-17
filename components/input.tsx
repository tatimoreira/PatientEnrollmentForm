import React, {FC, InputHTMLAttributes} from 'react'
import styles from './input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
  label: string;
  error: string;
}

const Input : FC<InputProps> = ({ label, error, ...rest }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...rest} />
      {error && (
        <div>
          <span> {error}</span>
        </div>
      )}
    </div>
  )
}
export default Input