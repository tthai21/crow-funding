import React from "react";
import { defaultImage } from "../../../constants/global";

const CampAuthor = (props) => {
  const { image = defaultImage, author = "Lorem ipsum" } = props;
  return (
    <div className="flex items-center gap-x-3">
      <img
        src={image}
        alt="avatar"
        className="w-8 h-8 rounded-full object-cover"
      />
      <p className="text-text3 text-xs">by</p>
      <span className="text-text2 font-semibold text-base">{author}</span>
    </div>
  );
};

export default CampAuthor;
