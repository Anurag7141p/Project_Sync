import { useState } from "react";
import { FiList } from "react-icons/fi";
import Accordian from "./Accordian";
import { GoBell } from "react-icons/go";
import { Menus } from "../data";

const SideNav = ({ mobileNav, setMobileNav }) => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);
  const [open, setOpen] = useState(true);

  const handleAccordionClick = (index) => {
    setOpenAccordionIndex(index === openAccordionIndex ? null : index);
  };

  return mobileNav ? (
    <>
      <div className="h-screen w-full bg-black/50 absolute z-50 ">
        <div className="flex w-[50%]">
          <div
            className={` ${
              open ? "w-64" : "w-20 "
            }custom-scrollbar bg-white h-screen p-5   pt-8 relative duration-300 overflow-y-auto`}
          >
            <FiList
              className={`absolute cursor-pointer right-7 top-9 w-7 h-7 text-[#617187]  ${
                !open && "rotate-180"
              }`}
              onClick={() => setMobileNav(!mobileNav)}
            />
            <div className="flex gap-x-4 items-center">
              <h1
                className={`text-black origin-left   text-xl font-semibold duration-200 ${
                  !open && "scale-0"
                }`}
              >
                <span className="text-[#546EEB]">Project</span>
                <span>Sync</span>
                <span className="text-green-300">.</span>
              </h1>
            </div>
            <ul className="pt-6  ">
              {Menus.map((menu, index) => (
                <Accordian
                  key={index}
                  data={menu}
                  open={open}
                  isOpen={index === openAccordionIndex}
                  onClick={() => handleAccordionClick(index)}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="w-[50%]"></div>
      </div>
    </>
  ) : (
    <div className="flex ">
      <div
        className={` ${
          open ? "w-64" : "w-20 "
        } bg-white h-screen p-5   pt-8 relative duration-300 overflow-y-auto `}
      >
        <div className="w-full h-[80%] overflow-y-auto pr-2">
          <FiList
            className={`absolute cursor-pointer right-7 top-8 w-7 h-7 text-[#617187]  ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <h1
              className={`text-black origin-left absolute top-7 bg-white   text-xl font-semibold duration-200 ${
                !open && "scale-0"
              }`}
            >
              <span className="text-[#546EEB]">Project</span>
              <span>Sync</span>
              <span className="text-green-300">.</span>
            </h1>
          </div>

          <ul className="pt-6  ">
            {Menus.map((menu, index) => (
              <Accordian
                key={index}
                data={menu}
                open={open}
                isOpen={index === openAccordionIndex}
                onClick={() => handleAccordionClick(index)}
              />
            ))}
          </ul>
        </div>

        <div
          className={` w-full h-[20%]  flex flex-col justify-end ${open && "pl-2"} `}
        >
          <ul className="pt-6  ">
            <li
              className={`mt-2 rounded-md py-2 cursor-pointer  text-[#617187] text-sm items-center gap-x-4 hover:bg-[#F6F6FE]
             `}
            >
              <div
                className={`flex justify-between  pl-1  py-1  cursor-pointer   text-sm items-center gap-x-4  hover:border-l-4 hover:border-blue-600`}
              >
                <div className="flex items-center gap-x-4  ">
                  <p className="text-lg border  border-gray-300 p-1 rounded-md">
                    <GoBell />
                  </p>
                  <span className={`${!open && "hidden"} origin-left duration-200`}>
                    Notification
                  </span>
                </div>
              </div>
            </li>
            <li
              className={`mt-2 rounded-md py-2 cursor-pointer  text-[#617187] text-sm items-center gap-x-4 hover:bg-[#F6F6FE]
             `}
            >
              <div
                className={`flex justify-between  pl-1  py-1  cursor-pointer   text-sm items-center gap-x-4  hover:border-l-4 hover:border-blue-600`}
              >
                <div className="flex items-center gap-x-4  ">
                  <p className="text-lg border  border-gray-300 p-1 rounded-md">
                    DS
                  </p>
                  <span className={`${!open && "hidden"} origin-left duration-200`}>
                    David Smith
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SideNav;
