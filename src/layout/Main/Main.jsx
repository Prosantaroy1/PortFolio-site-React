import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarSection from '../../Component/Shared/NavbarSection/NavbarSection';
import Footer from '../../Component/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className='bg-[#171c28]'>
            <NavbarSection/>
             {/*outlet open */}
               <Outlet/>
             {/*outlet open */}
            
        </div>
    );
};

export default Main;