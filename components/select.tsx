import React, {FC, InputHTMLAttributes} from 'react'

interface SelectProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
  label: string;
  error?: string;
  options?: [];
  value?: string;
}

const Select : FC<SelectProps> = ({ label, options, error, ...rest }) => {
  return (
    <div className="grid mb-2">
      <label>{label}</label>
      <select 
          className="grid justify-center w-full p-2 mb-2 bg-white border border-gray-400 border-solid rounded" 
          {...rest}
        >
          {
            options.map((item: {value:string, name:string})=>(
            <option value={item.value}>{item.name}</option>
            ))
          }
          
      </select>
      {error && (
        <div>
          <span> {error}</span>
        </div>
      )}
    </div>
  )
}
export default Select;