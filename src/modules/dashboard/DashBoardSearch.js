import React from "react";
import { useState } from "react";
import IconClose from "../../components/icons/IconClose";
import { defaultImage } from "../../constants/global";

const DashBoardSearch = () => {
  const [showSearch,setShowSearch] = useState(false)
  const handleShowSearch=()=>{
    setShowSearch(!showSearch)
  }
  return (
    <div className="relative z-50">
      <div className="bg-white rounded-full shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] p-2 w-full flex items-center">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Do fundrise now"
            className="w-full bg-transparent text-sm placeholder:text-text4 text-text1 px-5"
          ></input>
        </div>
        <button
        onClick={handleShowSearch}
        className="w-[72px] h-10 flex items-center justify-center rounded-full bg-primary text-white flex-shrink-0">
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      {/* SearchBox */}

     { showSearch && <div>
        <div className="search-results w-full lg:w-[843px] absolute bg-white top-full left-0 z-50 translate-y-5 pb-6 rounded-3xl  ">
          <div className="flex items-center justify-between p-3 bg-graySoft rounded-3xl ">
            <h4 className="text-text1 text-sm font-medium pl-4 underline">
              See all 10,124 fundraisier
            </h4>
            <button className="w-[72px] h-[50px] bg-error bg-opacity-20 flex items-center justify-center rounded-xl text-error">
              <IconClose></IconClose>
            </button>
          </div>
          <div className="p-6 pb-0">
            <div className="flex flex-col gap-y-5 mb-6">
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
            </div>
            <h3 className="text-sm font-semibold mb-4">Related Search</h3>
            <div className="flex flex-col gap-y-3">
              <p className="text-sm text-text2">education fund</p>
              <p className="text-sm text-text2">scholarship fund</p>
              <p className="text-sm text-text2">education and school fund</p>
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
};



function SearchItem() {
  return (
    <div className="flex items-center gap-x-5 ">
      <img
        src={defaultImage}
        alt="avatar"
        className="w-[50px] h-[50px] rounded-lg object-cover "
      />
      <div className="flex-1 text-sm ">
        <h3 className="mb-1">
          <strong>Education</strong> fund for Dugham Family
        </h3>
        <p className="text-text3">By Dugham Family</p>
      </div>
    </div>
  );
}

export default DashBoardSearch;
