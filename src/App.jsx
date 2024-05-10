import { useMediaQuery } from "react-responsive";
import "./App.css";
import MoreDetails from "./components/moredetails/MoreDetails";
import SearchFilter from "./components/searchandfilter/SearchFilter";
import SideNav from "./components/sidenav/SideNav";
import Surveys from "./components/surveys/Surveys";
import { MdOutlineMenuOpen } from "react-icons/md";
import { useState } from "react";

function App() {
  const isTab = useMediaQuery({ maxWidth: 900 });
  const isLap = useMediaQuery({ minWidth: 1280 });

  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div className=" relative h-screen flex  bg-[#EAEEF9]  font-poppins">
      <div className="navbar">
        {isTab ? (
          <>
            {mobileNav ? (
              <SideNav mobileNav={mobileNav} setMobileNav={setMobileNav} />
            ) : (
              <div className="fixed  left-0 top-10 duration-200 z-50">
                <div className="w-12 h-12 bg-indigo-600/70 rounded-r-xl flex justify-center items-center ">
                  <MdOutlineMenuOpen
                    className="w-9 h-9 text-white"
                    onClick={() => setMobileNav(!mobileNav)}
                  />
                </div>
              </div>
            )}
          </>
        ) : (
          <SideNav />
        )}
      </div>

      <div className="w-full  h-full overflow-y-auto">
        <div className="h-auto">
          {isLap && (
            <div className="w-full pb-4">
              <SearchFilter />
            </div>
          )}
        </div>

        <div
          className={`w-full  xl:grid xl:grid-cols-12 md:grid md:grid-cols-1 xs:grid xs:grid-cols-1  xs:h-full xl:h-[80%]   `}
        >
          <div className=" xl:hidden">
            <SearchFilter />
          </div>
          <div className="xl:col-span-4 md:col-span-1 md:flex xs:col-span-1 xl:h-full xl:overflow-y-scroll  ">
            <Surveys />
          </div>
          <div className="px-4 xl:col-span-8 md:col-span-1 xs:col-span-1 xl:h-full xl:overflow-y-scroll">
            <MoreDetails />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
