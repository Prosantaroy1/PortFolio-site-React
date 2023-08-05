import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../Component/Home/Home/Home";
import Skill from "../Component/Home/SkillSector/Skill";

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
        }
      ]
    },
  ]);

export default router;