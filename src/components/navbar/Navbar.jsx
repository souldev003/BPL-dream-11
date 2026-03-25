import React from "react";
import dollarImg from "../../assets/dollar_1.png";
import logo from "../../assets/logo-footer.png";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100 shadow-sm flex items-center justify-between">
        <div>
          <img className="max-w-17.5" src={logo} alt="" />
        </div>
        <div className="flex gap-1">
          <a href="#">
            <button className="btn btn-ghost text-lg text-slate-300">
              Home
            </button>
          </a>
          <a href="#">
            <button className="btn btn-ghost text-lg text-slate-300">
              Fixtures
            </button>
          </a>
          <a href="#">
            <button className="btn btn-ghost text-lg text-slate-300">
              Teams
            </button>
          </a>
          <a href="#">
            <button className="btn btn-ghost text-lg text-slate-300">
              Schedules
            </button>
          </a>

          <button className="btn btn-ghost text-lg font-semibold flex items-center justify-center gap-2">
            0 Coin
            <img src={dollarImg} alt="Dollar Image" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
