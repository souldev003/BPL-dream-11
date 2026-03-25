import React from "react";
import myImg from "../../assets/bg-shadow.png";
import heroImg from "../../assets/banner-main.png";

const Hero = () => {
  return (
    <div
      className="container mx-auto mt-6 h-158.75 bg-contain bg-no-repeat bg-[#131313] rounded-3xl py-16 px-2.5 flex flex-col justify-center items-center gap-6"
      style={{ backgroundImage: `url(${myImg})` }}
    >
      <div>
        <img src={heroImg} alt="" />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="capitalize text-4xl font-bold text-white">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-[#B8B8B8] my-6">Beyond Boundaries Beyond Limits</p>
        <span className="p-2 border border-[#D8ED27] rounded-3xl content-center">
          <button className="btn btn-success bg-[#D8ED27] rounded-3xl">
            Claim Free Credit
          </button>
        </span>
      </div>
    </div>
  );
};

export default Hero;
