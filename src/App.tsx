import { Navigate, Route, Routes } from "react-router-dom";
import { ModuleRoutes } from "./app/routes";
import Home from "./app/pages/Home/Home";
import Resumen from "./app/pages/Resumen/Resumen";
import Login from "./app/pages/Login/Login";
import MainLayout from "./shared/Layout/MainLayout/MainLayout.tsx";
import { FC, PropsWithChildren } from "react";
import { useLocalStorage } from "./shared/hooks/useLocalStorage";
import type { LoginResponse } from "./app/proxy/auth-request";

const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const { storedValue: user } = useLocalStorage<LoginResponse | null>("user", null);
  console.log("Usuario leído en PrivateRoute:", user);

  // Validación simple: que exista el objeto y tenga accessToken
  if (user && (user as LoginResponse).accessToken) {
    console.log("Usuario válido, acceso permitido:", user);
    return <>{children}</>;
  }
  console.log("Usuario no encontrado, redirigiendo al login");
  return <Navigate to="/login" replace />;
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${ModuleRoutes.Login}`} replace />} />
      <Route path={ModuleRoutes.Login} element={<Login />} />
      <Route
        path={`/${ModuleRoutes.Home}`}
        element={
          <PrivateRoute>
            <MainLayout>
              <Home />
            </MainLayout>
          </PrivateRoute>
        }
      />
      <Route
        path={`${ModuleRoutes.Resumen}/:productId`}
        element={
          <PrivateRoute>
            <MainLayout>
              <Resumen />
            </MainLayout>
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to={`/${ModuleRoutes.Login}`} replace />} />
    </Routes>
  );
};

export default App;
