import React from "react";
import Banner from "../Banner/Banner";
import Skill from "../SkillSector/Skill";
import SkillParsen from "../SkillParsen/SkillParsen";
import Education from "../Educationpage/Education";
import Projectpage from "../ProjectPage/Projectpage";

const Home = () => {
  return (
    <div>
        <Banner/>
        {/*Skill section */}
        <Skill/>
         {/*Skill parsen section */}
         <SkillParsen/>
        {/*Education section */}
        <Education/>
        {/*Projects page section */}
        <Projectpage/>
    </div>
  );
};

export default Home;
