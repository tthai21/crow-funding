import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/button";
import Heading from "../components/common/Heading";
import LayoutDashBoard from "../layout/LayoutDashBoard";
import CampaignFeature from "../modules/campaign/CampaignFeature";
import CampaignGrid from "../modules/campaign/CampaignGrid";

const CampaignPage = () => {
   const navigate = useNavigate()
   
  return (
    <LayoutDashBoard>
      <div className="mb-10 bg-white rounded-3xl py-8 px-10">
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-x-6">
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-white bg-secondary bg-opacity-60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h1 className="text-[22px] font-semibold mb-2">
                Create Your Campaign
              </h1>
              <p className="text-text3 text-sm ">Jump right into out editor and create your first Virtue campaign</p>
              <a href="/" className="text-primary text-sm" >Need help? Learn more...</a>
            </div>
          </div>
        <Button type="button" className="border-none border-opacity-20 bg-secondary bg-opacity-20 text-secondary p-5"
        onClick={()=>navigate("/start-campaign")}>Create campaign</Button>
        </div>
      </div>
      <Heading number="4">Your Campaign </Heading>
      <CampaignGrid type="col">
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
      </CampaignGrid>
    </LayoutDashBoard>
  );
};

export default CampaignPage;
