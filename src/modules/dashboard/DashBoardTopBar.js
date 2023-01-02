import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import DashBoardFund from "./DashBoardFund";
import DashBoardSearch from "./DashBoardSearch";

const DashBoardTopBar = () => {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-x-10 flex-1">
        <img srcSet="/logo.png 2x" alt="logo" 
        onClick={()=>{navigate("/")}} 
        className="cursor-pointer"
        />
        <div className="max-w-[458px] w-full">
          <DashBoardSearch></DashBoardSearch>
        </div>
      </div>
      <div className="flex items-center justify-end gap-x-10 flex-1">
       <DashBoardFund></DashBoardFund>
        <Button type="button" className="bg-secondary border-secondary px-7 text-white">
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
