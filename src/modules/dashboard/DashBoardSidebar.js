import React from "react";
import { NavLink } from "react-router-dom";
import IconCampaign from "../../components/icons/IconCampaign";
import IconDarkmode from "../../components/icons/IconDarkmode";
import IconDashboard from "../../components/icons/IconDashBoard";
import IconLogout from "../../components/icons/IconLogout";
import IconPayment from "../../components/icons/IconPayment";
import IconProfile from "../../components/icons/IconProfile";
import IconWithdraw from "../../components/icons/IconWithdraw";

const sideBarLinks = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: "Dashboard",
    url: "/",
  },
  {
    icon: <IconCampaign></IconCampaign>,
    title: "Campaign",
    url: "/campaign",
  },
  {
    icon: <IconPayment></IconPayment>,
    title: "Payment",
    url: "/payment",
  },
  {
    icon: <IconWithdraw></IconWithdraw>,
    title: "Withdraw",
    url: "/withdraw",
  },
  {
    icon: <IconProfile></IconProfile>,
    title: "Profile",
    url: "/profile",
  },
  {
    icon: <IconLogout></IconLogout>,
    title: "Logout",
    url: "/logout",
    onclick: () => {},
  },
  {
    icon: <IconDarkmode></IconDarkmode>,
    url: "/light",
    title: "Light/Dark",

    onclick: () => {},
  },
];

const navBarClass =
  "flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8  last:bg-white last:shadow-sdprimary";

const DashBoardSidebar = () => {
  return (
    <div className="w-full md:w-[76px] rounded-3xl bg-white shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] px-[14px] py-10 flex flex-col">
      {sideBarLinks.map((item) => (
        <NavLink
          to={item.url}
          key={item.title}
          className={({ isActive }) => {
            return isActive
              ? `text-primary bg-primary bg-opacity-20 ${navBarClass}`
              : `${navBarClass} text-icon-color`;
          }}
        >
          <span>{item.icon}</span>
          <span className="md:hidden">{item.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashBoardSidebar;
