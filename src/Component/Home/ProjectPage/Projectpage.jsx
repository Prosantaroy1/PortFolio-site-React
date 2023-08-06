import React from "react";
import project1 from '../../../../public/project1.png'
import project2 from '../../../../public/project2.png'
import { Link } from "react-router-dom";
import project3 from '../../../../public/download (3).jpg'

const Projectpage = () => {
  return (
    <div className="pt-8 px-10 text-[#fff] pb-5">
      <h2 className="text-4xl text-[#ffff] font-bold pb-3">Big Projects</h2>
      <p className="">
        SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH
      </p>
      <div className="pt-8 flex items-center flex-wrap justify-center lg:justify-normal gap-5">
        {/*
            emazone site  section 
        */}
        <div className="card w-96 h-[450px] space-y-6 text-[white] bg-[#171c28] shadow-xl shadow-slate-500 hover:shadow-slate-200  border-2 border-zinc-200">
          <figure className="px-10 pt-10">
            <img
              src={project1}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center space-y-3 text-center">
            <h2 className="card-title text-2xl font-bold">PROSHOP E-commerce Website with mern stack</h2>
            <p className="font-semibold">I have create this site for my practice</p>
            <div className="card-actions">
                <Link to='https://ema-zone-app-2.web.app/' target="_black">
                   <button className="btn btn-primary">Live Demo</button>
                </Link>
            </div>
          </div>
        </div>
        {/*
            chef site  section 
        */}
        <div className="card h-[450px] w-96 space-y-6 text-[white] bg-[#171c28] shadow-xl shadow-slate-500 hover:shadow-slate-200 border-2 border-zinc-200">
          <figure className="px-10 pt-10">
            <img
              src={project2}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center  text-center">
            <h2 className="card-title text-2xl font-bold">Bangladesh Chef Site</h2>
            <p className="font-semibold">I have create this site for my practice</p>
            <div className="card-actions">
                <Link to='https://chef-racepi-project.web.app/' target="_black">
                   <button className="btn btn-primary">Live Demo</button>
                </Link>
            </div>
          </div>
        </div>
        {/*
            job website  section 
        */}
        <div className="card h-[450px] w-96 space-y-6 text-[white] bg-[#171c28] shadow-xl shadow-slate-500 hover:shadow-slate-200 border-2 border-zinc-200">
          <figure className="px-10 pt-10">
            <img
              src={project2}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center  text-center">
            <h2 className="card-title text-2xl font-bold">JOB Application website </h2>
            <p className="font-semibold">I have create this site for my practice</p>
            <div className="card-actions">
                <Link to='https://glowing-mousse-349601.netlify.app/' target="_black">
                   <button className="btn btn-primary">Live Demo</button>
                </Link>
            </div>
          </div>
        </div>
        {/*
            html css js  section 
        */}
        <div className="card h-[450px] w-96 space-y-6 text-[white] bg-[#171c28] shadow-xl shadow-slate-500 hover:shadow-slate-200 border-2 border-zinc-200">
          <figure className="px-10 pt-10">
            <img
              src={project3}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center  text-center">
            <h2 className="card-title text-2xl font-bold">Html css javascript React website </h2>
            <p className="font-semibold">I have create this site for my practice</p>
            <div className="card-actions">
                <Link to='https://astonishing-dodol-79b42e.netlify.app/#' target="_black">
                   <button className="btn btn-primary">Live Demo</button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectpage;
