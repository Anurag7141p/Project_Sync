import React, { useState } from "react";
import Chart from "./Chart";
import { GoDotFill } from "react-icons/go";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FaFaceAngry } from "react-icons/fa6";
import { surveyData } from "../data";

const Card = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  return (
    <div className="xl:flex xl:flex-col gap-5 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 xs:grid xs:grid-cols-1 md:h-fit xs:pb-1 2xl:pb-20 overflow-x-auto ">
      {surveyData.map((curElem, cardIndex) => (
        <div className={`bg-white  rounded-xl  w-full  flex flex-col gap-1 h-fit `} key={cardIndex}>
          <div className="flex justify-between items-center w-full px-5">
            <div className="w-[80%]">
              <h1 className="font-semibold text-[#515EEF]">{curElem.job}</h1>
              <p className="text-[#5D6975]">PRSYNC | Initiated : {curElem.date}</p>
            </div>
            <div className="w-[20%]">
              <Chart size={100} rating={curElem.rating} />
            </div>
          </div>
          <hr />
          <div
            className="flex justify-between items-center px-3 w-full py-2 cursor-pointer"
            onClick={() => toggleDropdown(cardIndex)}
          >
            <div className="flex justify-between gap-2 py-2 w-[80%]">
              <h1 className="flex justify-normal items-center gap-2">
                <GoDotFill className="text-md text-[#515EEF]" />
                <span className="text-gray-700">{curElem.company}</span>
                <p className={`bg-[#515EEF] text-white px-2 rounded-xl `}>
                  {curElem.companyRating}
                </p>
              </h1>
            </div>
            <div className="w-[20%] flex justify-center">
              {openDropdownIndex == cardIndex ? <FaAngleUp /> : <FaAngleDown />}
            </div>
          </div>
          {/* --------------------------------------------------------------*/}
          {curElem.users.map((userData, userIndex) => (
            <React.Fragment key={userIndex}>
              {openDropdownIndex === cardIndex && (
                <>
                  <hr />
                  <div className=" flex justify-between gap-3 py-2 items-center w-full px-3 text-gray-500  hover:bg-[#F6F6FF] hover:text-[#5063F2] hover:cursor-pointer ">
                    <GoDotFill className="text-md  w-[5%]" />

                    <div className="w-[75%]">
                      <p className="text-gray-400 text-xs">
                        Received : {userData.received}{" "}
                      </p>
                      <h1 className="font-semibold">{userData.userName}</h1>
                    </div>
                    <div
                      className={`w-[20%] flex justify-center ${
                        userData.userRating >= 0 && userData.userRating < 2.0
                          ? "text-red-400 "
                          : ""
                      }${
                        userData.userRating >= 2.0 && userData.userRating < 4.0
                          ? "text-yellow-400 "
                          : ""
                      }${userData.userRating >= 4.0 ? "text-green-500" : ""}`}
                    >
                      <h1>{userData.userRating}</h1>
                    </div>
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Card;
