import React from "react";
import { Outlet } from "react-router-dom";
import Overlay from "../components/common/Overlay";
import DashBoardSidebar from "../modules/dashboard/DashBoardSidebar";
import DashBoardTopBar from "../modules/dashboard/DashBoardTopBar";

const LayoutDashBoard = (props) => {
  // const { children } = props;
  return (
    <div className="p-10 bg-lite min-h-screen ">
      <Overlay></Overlay>
      <DashBoardTopBar></DashBoardTopBar>
      <div className="flex items-start gap-10">
        <DashBoardSidebar></DashBoardSidebar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashBoard;
