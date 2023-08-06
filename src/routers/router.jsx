import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../Component/Home/Home/Home";
import Skill from "../Component/Home/SkillSector/Skill";
import Projectpage from "../Component/Home/ProjectPage/Projectpage";
import OpenSourcePage from "../Component/Home/OpenSourcePage/OpenSourcePage";
import Contactpage from "../Component/Home/Contactpage/Contactpage";

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
        },
        {
          path: 'contact',
          element: <Contactpage/>
        }
      ]
    },
  ]);

export default router;