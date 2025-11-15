import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaGithub } from "react-icons/fa";
import {
  SiCplusplus,
  SiPython,
  SiGooglecolab,
  SiJupyter,
} from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold flex-col">
        Frameworks / Tools :)     </h1>

      <div className="flex flex-col items-center justify-around">
        {/* ICON GRID LEFT SIDE */}
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 size={70} color="#E34F26" />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 size={70} color="#1572B6" />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact size={70} color="#61DAFB" />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs size={70} color="#F7DF1E" />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiCplusplus size={70} color="#00599C" />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiPython size={70} color="#3776AB" />
          </span>
        </div>

        {/* GOOGLE COLAB */}
        <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
          <SiGooglecolab size={60} color="#F9AB00" />
          <span className="text-white font-semibold">Google Colab</span>
          <p className="text-md leading-tight font-thin text-white">
            Helpful for machine learning and Python notebooks with GPU support.
          </p>
        </div>

        {/* JUPYTER */}
        <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
          <SiJupyter size={60} color="#F37626" />
          <span className="text-white font-semibold">Jupyter Notebook</span>
          <p className="text-md leading-tight font-thin text-white">
            Essential for data analysis, visualization, and scientific computing.
          </p>
        </div>

        {/* GITHUB */}
        <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
          <FaGithub size={60} color="#FFFFFF" />
          <span className="text-white font-semibold">GitHub</span>
          <p className="text-md leading-tight font-thin text-white">
            Version control & collaboration platform I use to manage my projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
