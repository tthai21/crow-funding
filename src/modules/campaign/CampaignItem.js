import React from "react";
import CampAuthor from "./parts/CampAuthor";
import CamCategory from "./parts/CampCategory";
import CampDescription from "./parts/CampDescription";
import CamMeta from "./parts/CampMeta";
import CampPhoto from "./parts/CampPhoto";
import CampTitle from "./parts/CampTitle";

const CampaignItem = () => {
  return (
    <div>
      <CampPhoto></CampPhoto>
      <div className="py-4 px-5 ">
        <CamCategory></CamCategory>
        <CampTitle>Powered Kits Learning Boxes</CampTitle>
        <CampDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </CampDescription>
        <div className="flex items-start justify-between gap-x-5 mb-5">
          <CamMeta></CamMeta>
          <CamMeta amount="173" text="Total Bracker"></CamMeta>
        </div>
        <CampAuthor></CampAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
