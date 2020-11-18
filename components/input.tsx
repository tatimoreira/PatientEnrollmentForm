import React, {FC, InputHTMLAttributes} from 'react'
import styles from './input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
  label: string;
  error?: string;
  type?: string;
  value?: string;
}

const Input : FC<InputProps> = ({ label, error, ...rest }) => {
  return (
    <div className="grid justify-center mb-2">
      <label>{label}</label>
      <input {...rest} className="grid justify-center p-1 mt-1 border-2 border-gray-600 border-solid rounded" />
      {error && (
        <div>
          <span> {error}</span>
        </div>
      )}
    </div>
  )
}
export default Input