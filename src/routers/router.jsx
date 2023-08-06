import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../Component/Home/Home/Home";
import Skill from "../Component/Home/SkillSector/Skill";
import Projectpage from "../Component/Home/ProjectPage/Projectpage";

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
        }
      ]
    },
  ]);

export default router;