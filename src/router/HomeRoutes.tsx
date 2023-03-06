import { Home } from "../components/pages/Home";
import { UserManegiment } from "../components/pages/UserManegiment";
import { Setting } from "../components/pages/Setting";
import { Page404 } from "../components/pages/Page404";

export const HomeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/user_manegiment",
    exact: false,
    children: <UserManegiment />
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
];
