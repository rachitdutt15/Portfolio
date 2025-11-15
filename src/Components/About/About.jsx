import React from "react";
import AboutImg from "../../assets/about.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About Me :)</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I am a FrontEnd Developer with experience in building responsive and user-friendly web applications using React, JavaScript, HTML, and CSS. I am passionate about creating seamless user experiences and continuously improving my skills in web development.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Problem Solver
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I’m a problem solver who loves breaking down complex challenges.With a logical mindset and clean coding approach, I build solutions that are simple, fast, and effective.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Future ML Engineer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Future ML Engineer in the making.Learning, experimenting, and growing with every model I build.Problem solving is my foundation, ML is the destination.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;