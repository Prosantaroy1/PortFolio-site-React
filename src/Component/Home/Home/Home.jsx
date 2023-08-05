import React from "react";
import Banner from "../Banner/Banner";
import Skill from "../SkillSector/Skill";
import SkillParsen from "../SkillParsen/SkillParsen";

const Home = () => {
  return (
    <div>
        <Banner/>
        {/*Skill section */}
        <Skill/>
         {/*Skill parsen section */}
         <SkillParsen/>
    </div>
  );
};

export default Home;
