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
    <div className="px-10 pb-8 pt-16 flex justify-between items-center  text-white">
      {/*Banner left part */}
      <div>
        <h2 className="flex items-center text-5xl gap-4 font-semibold">
          Hi all, I'm Prosanta Roy
          <span>
            <img
              src="../../../../public/wave-hi.gif"
              className="rounded-full w-14 "
              alt=""
            />
          </span>
        </h2>
        <p className="text-2xl leading-10 pt-10">
          Hi I like to introduce myself A passionate Fronted
          <br /> JavaScript Developer 🚀 having an experience of designing
          <br /> and building Web and Mobile applications with JavaScript /
          <br /> Reactjs / Nodejs and some other cool libraries
          <br /> and frameworks.
        </p>
        <div className="flex gap-4 text-4xl  pt-10 pb-12">
          <a href="" target="_blank">
            <span>
              <AiFillGithub />
            </span>
          </a>
          <a href="#" target="_blank">
            <span className="text-[#e62929]">
              <AiFillMail />
            </span>
          </a>
          <a href="" target="_blank">
            <span className="text-[#5b29e6]">
              <AiFillFacebook />
            </span>
          </a>
          <a href="" target="_blank">
            <span className="text-[#d9e629]">
              <AiFillLinkedin />
            </span>
          </a>
          <a href="#" target="_blank">
            <span className="text-[#29e6bd]">
              <AiFillInstagram />
            </span>
          </a>
          <a href="#" target="_blank">
            <span className="text-[#daebda]">
              <AiFillTwitterSquare />
            </span>
          </a>
        </div>
        <div className="flex gap-5">
          <button className="btn   hover:bg-white 
           hover:text-slate-800 text-xl btn-primary">
            CONTACT ME
          </button>
          <button className="btn hover:bg-white hover:text-blue-950 text-xl btn-secondary">
            SEE MY RESUME
          </button>
        </div>
      </div>
      {/*Banner right part */}
      <div  className="pb-6 ">
        <img src={bannerimg} alt="bannerImg" className="p-2 animate-pulse" />
      </div>
    </div>
  );
};

export default Banner;
