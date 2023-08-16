import React from "react";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillMail,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Contactpage = () => {
  return (
    <div className="pt-12 pb-14 h-full px-10 flex flex-col text-[#ffff] justify-center items-center">
      <h3 className="text-4xl pt-8 font-sans text-[#dbdbdb]">Contact Me ☎️</h3>
      <p className="text-xl font-medium text-center pt-8">
        DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
      </p>
      <p className="text-2xl font-medium pt-4">
        <a href="tel:+8801793446851">(+8801) 793 446 851</a>
      </p>
      <a
        href="mailto: royprosanta172@gmail.com"
        className="text-2xl font-medium pt-4"
      >
        royprosanta172@gmail.com
      </a>
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
      <div className="pt-4 pb-8">
        <p className="text-xl text-center">
          Made with ❤️ by DeveloperFolio Team
        </p>
        <p className="text-xl text-center pt-3 pb-5">
          Theme by{" "}
          <Link
            className="text-[#83a2f5] underline"
            to="https://github.com/saadpasta/developerFolio"
          >
            developerFolio
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Contactpage;
