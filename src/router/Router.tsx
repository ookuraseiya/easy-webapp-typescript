import { Switch } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
// import { Home } from "../components/pages/Home";
import { HomeRoutes } from "./HomeRoutes";
import { HeaderLayout } from "../components/templets/HeaderLayout";

export const Router: VFC = memo(() => {
  // Homeroutersをmapで回してcomponetsを出力する。
  const routemap = HomeRoutes.map(({ path, exact, children }) => (
    <Route path={path} exact={exact} element={children} />
  ));

  return (
    <Switch>
      <Routes>
        <Route path={"/login"} element={<Login />} />
        <HeaderLayout>{routemap}</HeaderLayout>
      </Routes>
    </Switch>
  );
});

{
  /* typescriptではこのような書き方をする事。
  <Routes>
    <Route path="/" element={<Login />} />
  </Routes> */
}
