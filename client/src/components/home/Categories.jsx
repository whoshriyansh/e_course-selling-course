import React from "react";

export const box = (heading, subHeading, icon, bg_color) => {
  return (
    <div className={({ bg_color }) => `bg-${bg_color}flex items-center gap-5`}>
      <div>
        <img src="" alt="" />
      </div>
      <div className="flex flex-col items-start gap-3"></div>
    </div>
  );
};

const Categories = () => {
  return (
    <div className="container mx-auto flex flex-col gap-5">
      <h1 className="font-semibold text-4xl text-primary_black">
        Browse top Category
      </h1>
      <div className="grid-rows-4">
        <box heading={"Hello"} subHeading />
      </div>
    </div>
  );
};

export default Categories;
