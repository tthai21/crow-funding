import React from "react";
import Overlay from "../components/common/Overlay";
import DashBoardSidebar from "../modules/dashboard/DashBoardSidebar";
import DashBoardTopBar from "../modules/dashboard/DashBoardTopBar";

const LayoutDashBoard = (props) => {
  const { children } = props;
  return (
    <div className="p-10 bg-lite min-h-screen ">
      {/* OverLay */}
      {/* <Overlay></Overlay> */}
      <DashBoardTopBar></DashBoardTopBar>
      <div className="flex items-start gap-10">
        <DashBoardSidebar></DashBoardSidebar>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default LayoutDashBoard;
