import React from "react";
import { useController } from "react-hook-form";

const CheckboxHook = (props) => {
  const { control, text, name, value } = props;
  const { field } = useController({ control, name, defaultValue: false });
  return (
    <label className=" cursor-pointer">
      <input
        type="checkbox"
        {...field}
        {...props}
        id={props.name}
        className=" hidden"
        checked={field.value}
        value={value}
      ></input>
      <div className=" flex items-center gap-x-3 ">
        <div className=" w-full h-full bg-white flex items-center justify-center rounded-md custom-checkbox-square">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>ooui-checkbox-selected</title>
            <g fill="none" fillRule="evenodd">
              <rect
                stroke="#36C"
                fill="#36C"
                x="3.5"
                y="3.5"
                width="13"
                height="13"
                rx="2"
              />
              <path
                stroke="#FFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 10.157L8.572 13 14 7"
              />
            </g>
          </svg>
        </div>
        <label htmlFor={name} className="cursor-pointer">
          {text}
        </label>
      </div>
    </label>
  );
};

export default CheckboxHook;
