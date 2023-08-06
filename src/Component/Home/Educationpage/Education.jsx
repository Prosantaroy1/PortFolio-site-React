import React from 'react';
import clgImg from '../../../../public/download.jpg'
import schoolImg from '../../../../public/images.jpg'

const Education = () => {
    return (
        <div className='pt-16 px-10'>
           <h2 className='text-4xl text-[#ffff] font-mono pb-5'>Education</h2>
           <div className='pt-4'>
               {/*Diploma thakurgaon */}
                <div className='pt-2 space-y-3 text-[#fff]'>
                    <img src={clgImg} alt="" className='w-[70px] rounded-full'/>
                   <div className='space-y-1'>
                      <h3 className='text-2xl font-bold'>Thakurgaon Polytechnic Institute</h3>
                      <p className='text-xl font-semibold'>Diploma in Computer Science and Engineering</p>
                   </div>
                   <div className='pb-4'>
                       <h4 className='text-xl font-semibold'>I have studied here for 4 years.</h4>
                       <li className='pl-5 text-[#c5bfbf] text-xl'>
                          I earned Computer Science and Engineering Certificate from Education Board in Doploma group
                       </li>
                   </div>
                   <hr  className='w-[75%] transition-all hover:w-[100%] pb-2  text-[#695f5f]'/>
                </div>
                {/*Dipshikha meti school */}
                <div className='pt-8 space-y-3 text-[#fff]'>
                    <img src={schoolImg} alt="" className='w-[70px] rounded-full'/>
                   <div className='space-y-1'>
                      <h3 className='text-2xl font-bold'>Dipshikha METI</h3>
                      <p className='text-xl font-semibold'>Secondary School Certificate in science</p>
                   </div>
                   <hr  className='w-[75%] transition-all hover:w-[100%] pb-6  text-[#695f5f]'/>
                </div>
           </div>
        </div>
    );
};

export default Education;