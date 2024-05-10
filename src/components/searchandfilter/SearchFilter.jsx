import React from "react";
import { AiOutlineDown, AiOutlineFilter, AiOutlineSearch } from "react-icons/ai";

const SearchFilter = () => {
  return (
    <div className="md:grid md:grid-cols-12 xs:grid-cols-1 px-5">
      <div className="md:col-span-4">
        <div className="pt-8 w-full px-4 text-sm flex flex-col gap-3">
          <div>
            <h1 className="text-[#3C5678] font-semibold text-xl">Surveys</h1>
            <p className="text-[#617187] text-sm">{"CSAT Management > Surveys"} </p>
          </div>
          <div className="w-full">
            <h1 className="text-[#3C5678] font-semibold">
              24 result found{" "}
              <span className="bg-white p-1 font-normal rounded-xl text-gray-500 ">
                clear filter
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="md:grid md:col-span-8 md:justify-start md:items-center md:pt-0 xs:pt-5">
        <div className="w-full  gap-2 text-gray-600 text-sm ">
          <div className="xxs:flex xs md:justify-center md:items-center xs:gap-3">
            <div className="relative xxs:w-[30%] xs:pt-1 xxs:pt-0">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 pr-10 pl-4 border border-gray-300 rounded-lg focus:outline-none"
              />
              <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <div className="relative xxs:w-[20%] xs:pt-1 xxs:pt-0">
              <select className="w-full p-2 pr-10 pl-4 border bg-white border-gray-300 rounded-lg focus:outline-none appearance-none">
                <option value="">2023</option>
                <option value="">2022</option>
                <option value="">2021</option>
              </select>
              <AiOutlineDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
            <div className="relative xxs:w-[20%] xs:pt-1 xxs:pt-0">
              <select className="w-full p-2 pr-10 pl-4 border bg-white border-gray-300 rounded-lg focus:outline-none appearance-none">
                <option value="">All</option>
                <option value="">Option 2</option>
                <option value="">Option 3</option>
              </select>
              <AiOutlineDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
            <button
              // onClick={onClick}
              className="flex items-center justify-center px-4 py-2 xs:mt-1 xxs:mt-0 rounded-lg bg-[#3C557C] text-white focus:outline-none   disabled:opacity-50"
            >
              <AiOutlineFilter className="mr-2" />
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
