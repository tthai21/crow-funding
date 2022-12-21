import React from "react";
import { useController } from "react-hook-form";

const Textarea = (props) => {
  const {
    children,
    id,
    name,
    placeholder = "",
    control,   
    ...rest
  } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <textarea
      placeholder={placeholder}
      {...field}
      {...rest}
      className={`w-full py-4 px-6 border rounded-xl text-text1 text-sm font-medium bg-transparent dark:text-white resize-none min-h-[140px] outline-none  `}
    ></textarea>
  );
};

export default Textarea;
