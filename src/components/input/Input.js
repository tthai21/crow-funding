import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../common/ErrorComponent";

const Input = (props) => {
  const {
    children,
    id,
    name,
    placeholder = "",
    control,
    type = "text",
    error = "",
    ...rest
  } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        className={`w-full py-4 px-6 border rounded-xl text-text1 text-sm font-medium bg-transparent dark:text-white  ${
          error.length > 0
            ? "border-error placeholder-error"
            : "border-strock placeholder:text-text4 dark:border-darkStroke dark:placeholder:text-text2"
        }
        ${children ? "pr-16" : ""}
        `}
        type={type}
        id={id}
        name={name}
        placeholder={error || placeholder}
        control={control}
        {...field}
        {...rest}
      ></input>
      {children && <div className="absolute right-6 -translate-y-1/2 top-1/2 cursor-pointer select-none">
        {children}
      </div>}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  control: PropTypes.any.isRequired,
  type: PropTypes.string,
  error: PropTypes.string,
};

export default withErrorBoundary(Input,{
  FallbackComponent: <ErrorComponent></ErrorComponent>
})
