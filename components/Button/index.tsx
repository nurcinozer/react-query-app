import { ButtonHTMLAttributes } from "react";


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  color = "primary",
  children,
  ...rest
}) => {
  const baseStyle = "inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg";
  const colorStyle = color === "primary" ? "text-white bg-indigo-500 hover:bg-indigo-600" : "text-gray-400 bg-gray-800 hover:bg-gray-700 hover:text-white";
  return (
    <button className={`${baseStyle} ${colorStyle}`} {...rest}>
      {children}
    </button>
  )
}