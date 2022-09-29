import { InputHTMLAttributes, useState } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export const Input: React.FC<InputProps> = ({
  name,
  type,
  placeholder,
  onChange,
}) => {
  const [focused, setFocused] = useState(false);

  const baseStyle = "w-full bg-gray-800 rounded border border-gray-700 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out";
  const focusStyle = "ring-2 ring-indigo-900 focus:border-indigo-500";

  return (
    <div className="relative mb-4 mx-4">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        className={
          `${baseStyle} ${focused ? focusStyle : ""}`
        }
      />
    </div>
  )
}