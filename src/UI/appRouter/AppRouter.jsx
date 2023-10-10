import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../router/routes";
import { useContext } from "react";
import { AuthContext } from "../../context/context";

const AppRouter = () => {
  const {isAuth,setIsAuth} = useContext(AuthContext);
  return (
    <Routes>
      {isAuth ?
        privateRoutes.map(el => <Route key={el.id} path={el.path} element={<el.component />} />) :
        publicRoutes.map(el => <Route key={el.id} path={el.path} element={<el.component />} />)}
    </Routes>
  );
};

export default AppRouter
