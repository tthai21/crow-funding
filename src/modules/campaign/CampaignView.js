import React, { Fragment } from "react";
import Button from "../../components/button/Button";
import { image_2 } from "../../constants/global";
import CamCategory from "./parts/CampCategory";
import CampDescription from "./parts/CampDescription";
import CamMeta from "./parts/CampMeta";
import CampPhoto from "./parts/CampPhoto";
import CampTitle from "./parts/CampTitle";
import CampViewAuthor from "./parts/CampViewAuthor";

const CampaignView = () => {
  return (
    <Fragment>
      <div
        className="h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center bg-opacity-40 flex items-center justify-center text-white mb-10"
        style={{
          backgroundImage: `linear-gradient(
            179.14deg,
            rgba(32, 18, 63, 0) -7.14%,
            #000000 200.01%
          ),url(/banner.png)`,
        }}
      >
        <h1 className="text-[40px] font-bold">Education</h1>
      </div>

      {/* Banner2 */}
      <div className="flex items-start justify-start gap-x-10 w-full max-w-[1066px] mb-8">
        <div className="flex-1">
          <CampPhoto image={image_2} className="h-[398px]  mb-8"></CampPhoto>
          <div className="flex justify-center gap-x-5">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  key={index}
                  className="w-[189px] h-[70px] object-cover rounded-lg"
                  src="https://source.unsplash.com/random"
                  alt="details"
                />
              ))}
          </div>
        </div>
        <div className="flex-1 max-w-[443px]">
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
          <CampViewAuthor></CampViewAuthor>
          <div className="w-full h-[5px] rounded-full bg-[#EFEFEF] mb-5">
            <div className="h-full w-[90%] bg-primary rounded-full"></div>
          </div>
          <div className="grid grid-cols-3 gap-x-7 mb-4 ">
            <CamMeta size="large"></CamMeta>
            <CamMeta size="large" amount="173" text="Total Bracker"></CamMeta>
            <CamMeta size="large" amount="30" text="Days left"></CamMeta>
          </div>
          <Button className="w-full text-white bg-primary">
            Back This Project
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between mt-[100px]">
        <div className="flex items-center gap-x-14 text-sm font-medium text-text3">
            <span className="cursor-pointer text-secondary">Campaign</span>
  
        </div>
        <Button className="bg-primary text-white">Back This Project</Button>
      </div>
    </Fragment>
  );
};

export default CampaignView;
