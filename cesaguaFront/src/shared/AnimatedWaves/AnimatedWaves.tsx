import React from "react";
import { Outlet } from "react-router-dom";

const AnimatedWaves = () => {
  return (
    <>
      <Outlet></Outlet>
      <div className="waves wave2"></div>
      <div className="waves wave3"></div>
      <div className="waves wave1"></div>
    </>
  );
};

export default AnimatedWaves;
