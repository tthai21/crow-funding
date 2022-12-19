import React from "react";
import DashBoardSidebar from "../modules/dashboard/DashBoardSidebar";
import DashBoardTopBar from "../modules/dashboard/DashBoardTopBar";

const LayoutDashBoard = (props) => {
  const { children } = props;
  return (
    <div className="p-10 bg-lite ">
      <DashBoardTopBar></DashBoardTopBar>
      <div>
        <DashBoardSidebar></DashBoardSidebar>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default LayoutDashBoard;
