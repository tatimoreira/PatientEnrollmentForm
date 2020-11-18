import React, {FC, InputHTMLAttributes} from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
  label: string;
  error?: string;
  type?: string;
  value?: string | Date | number;
}

const Input : FC<InputProps> = ({ label, error, ...rest }) => {
  return (
    <div className="grid mb-2">
      <label>{label}</label>
      <input {...rest} className="p-2 mt-1 border border-gray-400 border-solid rounded " />
      {error && (
        <div>
          <span> {error}</span>
        </div>
      )}
    </div>
  )
}
export default Input