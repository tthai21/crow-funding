import React from "react";
import { Link } from "react-router-dom";
import IconFolder from "../../../components/icons/IconFolder";

const CamCategory = (props) => {
  const { text = "Education", className="text-xs " } = props;
  return (
    <Link
      to="/"
      className={`${className} font-medium flex items-baseline gap-x-3 text-text3 mb-4`}
    >
      <IconFolder></IconFolder>
      <span>{text}</span>
    </Link>
  );
};

export default CamCategory;
