import React from 'react';

const SkillParsen = () => {
    return (
        <div className='mt-10 px-10 pb-4'>
            <h2 className='text-4xl text-[#ffff] font-mono pb-5'>Proficiency</h2>
            <div className='mt-5 space-y-5 pb-5'>
                   {/*Frontend dev */}
                <h3 className='text-[#ffff] text-2xl font-mono'>Frontend / Design</h3>
                <div className='bg-[#fffdfd] h-4 relative rounded-xl'>
                    <span className='bg-[#1463f7] absolute  h-full block w-[95%] rounded' ></span>
                </div>
                {/*react js */}
                <h3 className='text-[#ffff] text-2xl font-mono'>React Js</h3>
                <div className='bg-[#fffdfd] h-4 relative rounded-xl'>
                    <span className='bg-[#1476f7] absolute  h-full block w-[82%] rounded' ></span>
                </div>
                   {/*backend */}
                <h3 className='text-[#ffff] text-2xl font-mono'>Backend Development</h3>
                <div className='bg-[#fffdfd] h-4 relative rounded-xl'>
                    <span className='bg-[#3a7fe7] absolute  h-full block w-[70%] rounded' ></span>
                </div>
                 {/*js program */} 
                <h3 className='text-[#ffff] text-2xl font-mono'>JS Programming</h3>
                <div className='bg-[#fffdfd] h-4 relative rounded-xl'>
                    <span className='bg-[#2265f5] absolute  h-full block w-[89%] rounded' ></span>
                </div>
            </div>
        </div>
    );
};

export default SkillParsen;