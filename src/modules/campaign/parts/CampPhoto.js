import React from "react";
import { defaultImage } from "../../../constants/global";

const CampPhoto = (props) => {
  const { image = defaultImage, alt = "laptop", className = "h-[158px]" } = props;
  return (
    <div className={className}>
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
};

export default CampPhoto;
