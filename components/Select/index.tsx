import { SelectHTMLAttributes, useState } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options?: Array<{ label: string; value: string }>;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
  placeholder?: string;
}

export const Select: React.FC<SelectProps> = ({
  options,
  onChange,
  value,
  placeholder
}) => {
  const [focused, setFocused] = useState(false);

  const baseStyle = "w-full bg-gray-800 rounded border border-gray-700 text-base outline-none text-gray-100 py-2.5 px-3 leading-8 transition-colors duration-200 ease-in-out";
  const focusStyle = "ring-2 ring-indigo-900 focus:border-indigo-500";
  return (
    <div className="relative mb-4 mx-4">
      <select
        className={`${baseStyle} ${focused ? focusStyle : ""}`}
        onFocus={() => setFocused(true)}
        value={value}
        onChange={onChange}
      >
        <option value="" label={placeholder} disabled hidden />
        {options?.map((option, index) => (
          <option value={option.value} label={option.label} key={index} />
        ))}
      </select>
    </div>
  );
};
