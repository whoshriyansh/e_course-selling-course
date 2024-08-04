import React from "react";
import herobanner from "../../assets/images/heroBanner.png";

const HeroSection = () => {
  return (
    <div className="container ml-auto flex justify-between items-center h-[60vh]">
      <div className="flex flex-col gap-9">
        <h1>Learn with expert anytime anywhere</h1>
        <p>
          Our Mission is to help people to find the best course online and Learn
          with expert anytime, anywhere
        </p>
        <button className="bg-primary_orange py-2 px-4">Create Account</button>
      </div>
      <div className="border"></div>
    </div>
  );
};

export default HeroSection;
