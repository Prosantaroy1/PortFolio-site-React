import React from "react";
import { Link } from "react-router-dom";

const OpenSourcePage = () => {
  return (
    <div className="pt-10 px-10 pb-6">
      <h3 className="text-4xl text-[#ffff] font-bold text-center pb-6">
        Open Source Projects
      </h3>
      <div className="flex flex-col w-full text-[#ffff] lg:flex-row gap-5">
        <div className="grid flex-grow h-40 card shadow-lg  shadow-slate-800 hover:bg-[#5a64e7] rounded-box place-items-center">
          <Link
            to="https://github.com/Prosantaroy1/The-Dragon-News-Project"
            target="_blank"
            className="text-2xl font-mono"
          >
            News-Frontend Code
          </Link>
        </div>
        <div className="grid flex-grow h-40 card shadow-lg  shadow-slate-800 hover:bg-[#5a64e7] rounded-box place-items-center">
          <Link
            to="https://github.com/Prosantaroy1/News-dragon-server"
            target="_blank"
            className="text-2xl font-mono"
          >
            News-Server Code
          </Link>
        </div>
      </div>
      {/*part-2  */}
      <div className="flex pt-8 flex-col w-full text-[#ffff] lg:flex-row gap-5">
        <div className="grid flex-grow h-40 card shadow-lg  shadow-slate-800 hover:bg-[#5a64e7] rounded-box place-items-center">
          <Link
            to="https://github.com/Prosantaroy1/car-doctor-client"
            target="_blank"
            className="text-2xl font-mono"
          >
            Car-Doctor-Frontend Code
          </Link>
        </div>
        <div className="grid flex-grow h-40 card shadow-lg   shadow-slate-800 hover:bg-[#5a64e7] rounded-box place-items-center">
          <Link
            to="https://github.com/Prosantaroy1/car-doctor-server"
            target="_blank"
            className="text-2xl font-mono"
          >
            Car-Doctor-Server Code
          </Link>
        </div>
      </div>
      <div className="flex justify-center pt-8 pb-8">
          <Link to='https://github.com/Prosantaroy1?tab=repositories' target="_blank">
              <button className="btn btn-active px-12  btn-primary">All Open Source</button>
          </Link>
      </div>
    </div>
  );
};

export default OpenSourcePage;
