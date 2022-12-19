import React from "react";
import PropTypes from "prop-types";

const Button = ({ type = "button", children, className = "",isLoading = false, ...rest  }) => {
    const child = !!isLoading? <div className="w-6 h-6
    rounded-full border-4 border-white border-t-transparent animate-spin "></div> : children
  return (
    <button
      type={type}
      {...rest}
      className={`${className} ${isLoading? "opacity-50 pointer-events-none" : ""} border border-primary rounded-xl text-base font-semibold px-2 py-4 text-white min-h-[56px]  flex items-center justify-center`}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
};
export default Button;
