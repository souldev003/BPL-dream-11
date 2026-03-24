import React from "react";
import myImg from "../../assets/bg-shadow.png";

const Hero = () => {
  return (
    <div
      className="container mx-auto mt-6 h-158.75 bg-contain bg-no-repeat bg-[#131313] rounded-3xl"
      style={{ backgroundImage: `url(${myImg})` }}
    >
      <div>hello</div>
    </div>
  );
};

export default Hero;
