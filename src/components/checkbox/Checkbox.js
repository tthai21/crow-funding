import React from "react";
import { useController } from "react-hook-form";

const Checkbox = ({
  children,
  value,
  control,  
  name,
  onClick = () => {},
  checked,
  ...rest
}) => {
  const { field } = useController({
    control,
    name:name,
    defaultValue: checked,
  });  

 
  
  return (
    <label className="flex items-start gap-x-5 select-none">
      <label htmlFor={name}  
            className={`inline-flex items-center justify-center p-2 text-white  w-5 h-5 rounded border translate-y-1/2 cursor-pointer ${
          checked ? "bg-primary border-primary" : "border-strock dark:border-text3 "
        }`}
        onClick={onClick}
      >
        <span className={`${checked ? "" : "opacity-0 invisible"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-5"
          >
            <path
              fillRule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </label>
      <input
        {...rest}
        {...field}
        name={name}
        id={name}
        control={control}
        type="checkbox"        
        className="hidden pointer-events-none"
        // onChange={() => {}}
        checked={value}
        value={value}
      />
      <label  onClick={onClick} className="text-text3 cursor-pointer" htmlFor={name}>
        {children}
      </label>
    </label>
  );
};

export default Checkbox;
