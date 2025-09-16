import { Navigate, Route, Routes } from "react-router-dom";
import { ModuleRoutes } from "./app/routes";
import Home from "./app/pages/Home/Home";
import Resumen from "./app/pages/Resumen/Resumen";
import Login from "./app/pages/Login/Login";
import { FC, PropsWithChildren } from "react";

const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const user = localStorage.getItem("user");

  if (user) {
    return children;
  }

  return <Navigate to={`/${ModuleRoutes.Login}`} replace />;
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={ModuleRoutes.Login} element={<Login />} />

      <Route
        path={ModuleRoutes.Home}
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />

      <Route
        path={`${ModuleRoutes.Resumen}/:productId`}
        element={
          <PrivateRoute>
            <Resumen />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<Navigate to={ModuleRoutes.Login} replace />} />
    </Routes>
  );
};

export default App;
