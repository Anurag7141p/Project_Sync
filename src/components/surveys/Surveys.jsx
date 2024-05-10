import React from "react";
import Card from "../reusable/Card";

const Surveys = () => {
  return (
    <div className="pt-4 w-full px-4 text-sm flex flex-col    ">
      <div className="w-full flex md:grid md:grid-cols-1 sm:grid sm:grid-cols-1 xs:grid xs:grid-cols-1    px-2">
        <Card />
      </div>
    </div>
  );
};

export default Surveys;
