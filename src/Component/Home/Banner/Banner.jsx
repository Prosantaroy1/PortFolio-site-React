import React from "react";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillMail,
  AiFillTwitterSquare,
} from "react-icons/ai";
import bannerimg from "../../../../public/banner.png";

const Banner = () => {
  return (
    <div className="px-5 lg:px-10 pb-8 pt-8 flex  gap-3  justify-between items-center  text-white">
      {/*Banner left part */}
      <div className="w-full lg:w-[48%]">
        <h2 className="flex items-center text-xl lg:text-5xl gap-4 font-semibold">
          Hi all, I'm Prosanta Roy
          <span>
            <img
              src="../../../../public/wave-hi.gif"
              className="rounded-full w-14 "
              alt=""
            />
          </span>
        </h2>
        <p className="text-xl lg:text-2xl leading-loose pt-8">
          Hi I like to introduce myself A passionate Fronted
           JavaScript Developer 🚀 having an experience of designing
           and building Web and Mobile applications with JavaScript /
           Reactjs / Nodejs and some other cool libraries
           and frameworks.
        </p>
        <div className="flex gap-4 text-4xl  pt-10 pb-12">
          <a href="https://github.com/Prosantaroy1" target="_blank">
            <span>
              <AiFillGithub />
            </span>
          </a>
          <a href="mailto:royprosanta172@gmail.com" target="_blank">
            <span className="text-[#e62929]">
              <AiFillMail />
            </span>
          </a>
          <a href="https://www.facebook.com/prosantaroy123" target="_blank">
            <span className="text-[#5b29e6]">
              <AiFillFacebook />
            </span>
          </a>
          <a href="https://www.instagram.com/dev.prosantaroy/" target="_blank">
            <span className="text-[#29e6bd]">
              <AiFillInstagram />
            </span>
          </a>
          <a href="https://twitter.com/RoyProsant81869" target="_blank">
            <span className="text-[#daebda]">
              <AiFillTwitterSquare />
            </span>
          </a>
        </div>
        <div className="flex gap-4">
          <button className="btn   hover:bg-white 
           hover:text-slate-800 text-xl btn-primary">
            CONTACT ME
          </button>
          <button className="btn hover:bg-white hover:text-blue-950 text-xl btn-secondary">
            MY RESUME
          </button>
        </div>
      </div>
      {/*Banner right part */}
      <div  className="pb-6 hidden lg:inline-block">
        <img src={bannerimg} alt="bannerImg" className="p-2 max-w-full animate-pulse" />
      </div>
    </div>
  );
};

export default Banner;
