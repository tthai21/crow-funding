import React from "react";
import { Button } from "../../components/button";
import DashBoardSearch from "./DashBoardSearch";

const DashBoardTopBar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-10 flex-1">
        <img srcSet="/logo.png 2x" alt="logo" />
        <div className="max-w-[458px] w-full">
          <DashBoardSearch></DashBoardSearch>
        </div>
      </div>
      <div className="flex items-center justify-end gap-x-10 flex-1">
        <div className="flex items-center gap-x-2 text-text2 text-base font-medium">
          <span>Fundrising for</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
        <Button className="bg-secondary border-secondary px-7">
          Start a Campaign
        </Button>
        <img
          srcSet="/logo.png 2x"
          alt="logo"
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default DashBoardTopBar;
