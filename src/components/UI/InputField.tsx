import React from 'react'

interface InputFieldProps {
    name: string;
    value: string;
    onchange:(e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputField = ({ name, value, onchange }: InputFieldProps) => {
  return (
    <div key={name} className="input-field">
      <label>{name}</label>
      <input value={value} onChange={onchange} />
    </div>
  )
}

export default InputField;
