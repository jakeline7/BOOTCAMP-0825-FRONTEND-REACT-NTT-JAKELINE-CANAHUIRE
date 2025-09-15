import { Navigate, Route, Routes } from "react-router-dom";
import { ModuleRoutes } from "../src/app/routes";
import Home from "./app/pages/Home/Home";
import Resumen from "./app/pages/Resumen/Resumen";
import { FC, PropsWithChildren } from "react";

const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const user = {
    id: 100,
  };

  if (user.id === 100) {
    console.log("render");
    return children;
  }

  return <Navigate to={`/${ModuleRoutes.Home}`} replace />;
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={ModuleRoutes.Home} element={<Home />} />
      <Route
        path={ModuleRoutes.Secundary}
        element={
          <PrivateRoute>
            {/* <Secundary /> */}
          </PrivateRoute>
        }
      />
      <Route
        path={`${ModuleRoutes.Resumen}/:productId`}
        element={<Resumen />}
      />
      <Route path="*" element={<Navigate to={ModuleRoutes.Home} replace />} />
    </Routes>
  );
};

export default App;
