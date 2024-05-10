import React from "react";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import Chart from "../reusable/Chart";
import { BiMessageDots } from "react-icons/bi";
import { moreDetails } from "../data";

const MoreDetails = () => {


  return (
    <>
      {moreDetails.map((curElem,index) => (
        <div className="  w-full py-5 " key={index}>
          <div className=" bg-white h-auto rounded-t-2xl capitalize pb-5">
            <div className="xm:grid xm:grid-cols-4 xxm:grid xxm:grid-cols-2 border-b-2">
              <div className="flex flex-col justify-center xs:border-b border-r-2 p-5 ">
                <p className="text-[13px] text-[#5D6975]">Project name & code </p>
                <h1 className="text-[#5D6975] font-semibold text-sm">
                  {curElem.projectName} | {curElem.code}
                </h1>
              </div>
              <div className="flex flex-col justify-center xs:border-b border-r-2 p-5">
                <p className="text-[13px] text-[#5D6975]">Account name</p>
                <h1 className="text-[#5D6975] font-semibold text-sm">
                  {curElem.projectName}
                </h1>
              </div>
              <div className="flex flex-col justify-center xs:border-b border-r-2 p-5">
                <p className="text-[13px] text-[#5D6975]">Initiate Date </p>
                <h1 className="text-[#5D6975] font-semibold text-sm">
                  {curElem.initiatedDate}
                </h1>
              </div>
              <div className="flex flex-col justify-center border-r-2 p-5">
                <p className="text-[13px] text-[#5D6975]">SBU </p>
                <h1 className="text-[#5D6975] font-semibold text-sm">
                  {curElem.sbu}
                </h1>
              </div>
            </div>
            {/* -------------------- overall survey details------------------------------ */}
            <div>
              <div className="p-5 sm:flex justify-between">
                <div className="flex text-sm justify-normal items-center gap-2">
                  <h1 className="text-[#5D6975] font-semibold text-md">
                    overall average survey details
                  </h1>
                  <p className="p-1 bg-[#EAECFF] text-[#8E90E4] rounded-lg text-[11px]">
                    3/4 responses
                  </p>
                </div>
                <div className="flex ">
                  <div className="bg-[#EAECFF] text-[#8E90E4]  text-[13px] gap-2 p-2 rounded-lg flex justify-normal items-center">
                    <IoShieldCheckmarkOutline />
                    <p>View RCA</p>
                  </div>
                </div>
              </div>
              <div className="grid  grid-cols-5 sm:grid-cols-5 xm:grid-cols-3 xs:grid-cols-2 ">
                {curElem?.avgSurveyDetails.map((surData,surIndex) => (
                  <div className="flex flex-col justify-normal items-center" key={surIndex}>
                    <Chart rating={surData.rating} size={140} />
                    <h1 className="text-[#5D6975] font-semibold text-sm">
                      {surData.name}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* --------------------------------------------------------------------- */}
          <div className="bg-white mt-1 rounded-b-2xl   pt-1">
            {curElem?.userData.map((userData,userIndex) => (
              <div className="grid sm:grid-cols-5 xm:grid-cols-1  px-6 py-1" key={userIndex}>
                <div className="col-span-2 ">
                  <div className="flex justify-normal h-full items-center gap-2">
                    <div>
                      <div className="bg-[#EAECFF] text-[#8E90E4]  text-lg gap-2 p-2 rounded-md flex justify-normal items-center">
                        <BiMessageDots />
                      </div>
                    </div>
                    <div>
                      <p className="text-[13px] text-[#5D6975]">
                        received on : {userData.received}
                      </p>
                      <h1 className="text-[#5D6975] font-semibold text-md">
                        {userData.userName}
                      </h1>
                      <p className="text-[13px] text-[#5D6975]">{userData.gmail}</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 xs:pt-2 sm:pt-0 col-span-3">
                  {userData?.ratings.map((userRating,ratingIndex) => (
                    <div className=" flex flex-col justify-center items-center" key={ratingIndex}>
                      <Chart rating={userRating.rating} size={100} />
                      <h1 className="text-[#5D6975] xs:text-[10px]  xxm:text-sm">{userRating.name}</h1>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <hr />
            {/* ------------------------------------------------feedback------------------------------------ */}
            <div className="px-7 py-5">
              <div className="xxs:flex justify-between">
                <h1 className="text-md font-semibold text-[#5D6975] capitalize">
                  feedback details
                </h1>
                <div className="bg-[#EAECFF] xs:w-28 text-[#8E90E4]  text-[13px] gap-2 p-2 rounded-lg flex justify-normal items-center">
                  <IoShieldCheckmarkOutline />
                  <p>View RCA</p>
                </div>
              </div>
              <div className="flex flex-col gap-8 pt-5">
                {curElem?.feedback.map((feedback,feedbackIndex) => (
                  <div className="flex flex-col gap-3" key={feedbackIndex}>
                    <div className="text-sm  text-[#5D6975] capitalize flex gap-2">
                      <h1>Q:</h1>
                      <h1>{feedback.question}</h1>
                    </div>
                    <div className="text-sm font-semibold text-[#5D6975] capitalize flex gap-2">
                      <h1>A:</h1>
                      <h1>{feedback.answer}</h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MoreDetails;
