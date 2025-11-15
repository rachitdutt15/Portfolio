import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import AvatarImg from "../../assets/avatar.png";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer", "Web Developer", "Programmer"],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
  });

  return (
    <div className="text-white w-full min-h-screen flex flex-col md:flex-row justify-between items-center p-10 md:p-20">
      
      {/* LEFT SIDE */}
      <div className="md:w-1/2 md:pt-10 flex flex-col gap-4">
        <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tight">
          Hello, I am Rachit...
        </h1>

        <h2 className="text-xl md:text-4xl font-semibold tracking-tight">
          I'm a{" "}
          <span className="text-blue-500">
            {text}
            <Cursor cursorColor="red" />
          </span>
        </h2>

        <p className="text-sm md:text-2xl tracking-tight mt-2">
          A passionate developer and designer building web applications
          and experiences on the internet.
        </p>

        <button className="mt-6 bg-blue-600 px-5 py-3 rounded-lg text-white font-semibold hover:bg-blue-700 transition-all duration-300 w-fit">
          Hire Me
        </button>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img src={AvatarImg} alt="Avatar" className="w-[300px] md:w-[450px] object-contain" />
      </div>
    </div>
  );
};

export default Home;
