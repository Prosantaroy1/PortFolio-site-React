import React from 'react';
import imggif from '../../../../public/code.gif'
import {FaHtml5, FaCss3Alt, FaReact, FaGithub  } from 'react-icons/fa';

const Skill = () => {
    return (
        <div className='flex flex-wrap lg:flex-nowrap items-center justify-center  mt-6 px-2 lg:px-10 py-8 gap-8'>
          {/*left side img */}
            <div>
                <img src={imggif} alt="" className='w-[600px] h-[500px] rounded-2xl bg-[#050505]'/>
            </div>
          {/*Right side text */}
            <div className='text-white space-y-8  pl-2'>
                <h2 className='text-4xl font-bold'>What I do</h2>
                <p className='text-xl font-semibold'>
                    CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE<br/> EVERY TECH STACK
                </p>
                <div className='flex gap-3'>
                    <i className='text-[#fff] text-4xl'><FaHtml5/></i>
                    <i className='text-4xl text-[#fff]'><FaCss3Alt/></i>
                    <i className='text-4xl text-[#fff]'></i>
                    <i className='text-4xl text-[#fff]'></i>
                    <i className='text-4xl text-[#fff]'><FaReact/></i>
                    <i className='text-4xl text-[#fff]'></i>
                    <i className='text-4xl text-[#fff]'></i>
                    <i className='text-4xl text-[#fff]'></i>
                    <i className='text-4xl text-[#fff]'><FaGithub/></i>
                    <i className='text-4xl text-[#fff]'></i>
                </div>
                <ul className='text-xl  space-y-4'>
                    <li>⚡ Develop highly interactive Front end / User Interfaces for your web<br/> and mobile applications</li>
                    <li>⚡Progressive Web Applications ( PWA ) in normal and SPA Stacks</li>
                    <li>⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean</li>
                </ul>
            </div>
        </div>
    );
};

export default Skill;