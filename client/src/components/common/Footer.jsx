import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-primary_black">
      <div className="container mx-auto py-20 flex items-center justify-between">
        {/* Fisrt Scetion  */}
        <div className="flex flex-col gap-10">
          <h1 className="text-white text-5xl font-semibold">
            Start learning with 67.1k <br />
            students around the world
          </h1>
          <div className="flex gap-10 items-center">
            <button className="py-2 px-4 bg-primary_orange text-white text-xm font-medium">
              Join the Family
            </button>
          </div>
        </div>
        <div className="flex items-center gap-20 text-white">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-6xl font-medium">6.3k</h1>
            <p>Online Cources</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-6xl font-medium">26k</h1>
            <p>Certified Instructor</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-6xl font-medium">99.9%</h1>
            <p>Sucess Rate</p>
          </div>
        </div>
      </div>

      <hr />

      {/* Second Part */}
      <div className="container mx-auto py-20 flex items-center justify-between text-white">
        <div className="flex flex-col gap-10">
          <img src="" alt="" />
          <p>
            Aliquam rhoncus ligula est, Non pulvinar elit convailis nec, Donec
            mattis odio at.
          </p>
          <div className="flex items-center gap-5">
            <a href="">
              <img src="facebook" alt="" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1>Top 4 Category</h1>
          <Link>Development</Link>
          <Link>Development</Link>
          <Link>Development</Link>
          <Link>Development</Link>
        </div>
        <div className="flex flex-col gap-5">
          <h1>Top 4 Category</h1>
          <Link>Development</Link>
          <Link>Development</Link>
          <Link>Development</Link>
          <Link>Development</Link>
        </div>
        <div className="flex flex-col gap-5">
          <h1>Top 4 Category</h1>
          <Link>Development</Link>
          <Link>Development</Link>
          <Link>Development</Link>
          <Link>Development</Link>
        </div>
        <div className="flex flex-col gap-5">
          <h1>Top 4 Category</h1>
          <a href="">
            <img src="" alt="" />
          </a>
        </div>
      </div>

      <hr />

      {/* Laste Section  */}
      <div className="container mx-auto py-5 flex items-center justify-between text-white">
        <p>
          Aliquam rhoncus ligula est, Non pulvinar elit convailis nec, Donec
          mattis odio at.
        </p>
        <p>Made with Love by Shriyansh</p>
      </div>
    </div>
  );
};

export default Footer;
