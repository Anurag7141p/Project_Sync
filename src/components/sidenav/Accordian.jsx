import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { GoBell, GoDotFill, GoPlus } from "react-icons/go";
import { LuDot } from "react-icons/lu";

const Accordian = ({ data, isOpen, onClick, open }) => {
  const { options } = data;

  return (
    <>
      <li
        className={`mt-2 rounded-md py-2 cursor-pointer  text-[#617187] text-sm items-center gap-x-4 hover:bg-[#F6F6FE]
              ${open && "bg-light-white p-2 "} ${isOpen && "bg-[#F6F6FE]"}`}
      >
        <div
          className={`flex justify-between  pl-1  py-1 ${
            isOpen && "border-l-4 border-blue-600"
          } cursor-pointer   text-sm items-center gap-x-4  hover:border-l-4 hover:border-blue-600`}
          onClick={onClick}
        >
          <div className="flex items-center gap-x-4  ">
            <p className="text-lg border  border-gray-300 p-1 rounded-md">
              {data.icon}
            </p>
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {data.title}
            </span>
          </div>
          <div>{isOpen && open && options.length != 0 && <FaAngleDown />}</div>
        </div>
        {isOpen &&
          open &&
          options.map((curElem, index) => (
            <div className="py-2 text-[#617187] hover:text-[#546EEB]" key={index}>
              <div className="flex justify-normal items-center  gap-5 pl-5  font-roboto   uppercase">
                <p>
                  <GoDotFill />
                </p>
                {curElem}
              </div>
            </div>
          ))}
      </li>
    </>
  );
};

export default Accordian;
