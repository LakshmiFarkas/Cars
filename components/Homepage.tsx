"use client";
import React from "react";
import { Button } from ".";
import { url } from "inspector";

function handleScroll() {}

const homePage = () => {
  return (
    <div className="home_page homeBG ">
      <div className="flex-1 content-width py-10">
        <h1 className="title dark-black w-[100%] md:w-[50%] text-center md:text-left">
          An icon reenvisioned – Best models ever
        </h1>
        <p className="sub-title dark-black text-center md:text-left">
          Find the car that is best for you
        </p>
        <Button
          title="explore"
          customCSS="bg-[color:var(--blue-col)] text-white mx-auto md:mx-0 flex md:inline-block"
          handleClick={handleScroll}
          type="submit"
        />
        <div className="homeImg">
          <img src={"/car.png"} alt="car image" className=" object-contain" />
        </div>
      </div>
    </div>
  );
};

export default homePage;
