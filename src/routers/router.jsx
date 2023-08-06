import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../Component/Home/Home/Home";
import Skill from "../Component/Home/SkillSector/Skill";
import Projectpage from "../Component/Home/ProjectPage/Projectpage";
import OpenSourcePage from "../Component/Home/OpenSourcePage/OpenSourcePage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
          path: 'skill',
          element: <Skill/>
        },
        {
          path: 'project',
          element: <Projectpage/>
        },
        {
          path: 'opensource',
          element: <OpenSourcePage/>
        }
      ]
    },
  ]);

export default router;