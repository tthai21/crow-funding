import React from "react";
import { image_2 } from "../../constants/global";
import CamCategory from "./parts/CampCategory";
import CampDescription from "./parts/CampDescription";
import CamMeta from "./parts/CampMeta";
import CampPhoto from "./parts/CampPhoto";
import CampTitle from "./parts/CampTitle";

const CampaignFeature = () => {
  return (
    <div className="flex items-center justify-start gap-x-8 w-full max-w-[1148px] mb-8">
      <CampPhoto
        image={image_2}
        className="h-[266px] w-full flex-1"
      ></CampPhoto>
      <div className="flex-1 max-w-[510px]">
        <CamCategory
          text="Architecture"
          className="text-base"
          size="large"
        ></CamCategory>
        <CampTitle size="large">Powered Kits Learning Boxes</CampTitle>
        <CampDescription size="large">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          doloremque.
        </CampDescription>
        <div className="w-full h-[5px] rounded-full bg-[#EFEFEF] mb-5">
          <div className="h-full w-[90%] bg-primary rounded-full"></div>
        </div>
        <div className="grid grid-cols-3 gap-x-7 ">
          <CamMeta size="large"></CamMeta>
          <CamMeta size="large" amount="173" text="Total Bracker"></CamMeta>
          <CamMeta size="large" amount="30" text="Days left"></CamMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;
