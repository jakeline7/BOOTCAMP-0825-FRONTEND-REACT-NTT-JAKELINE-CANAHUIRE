// import { PropsWithChildren } from "react";
// import { ModuleRoutes } from "../../../app/routes";
// import LogoPlazaVea from "../../../assets/LogoPlazaVea.svg";
// import Carrito from "../../../assets/carrito.png";
// import MainLayoutStyled from "./MainLayout.styled";

// interface MainLayoutI extends PropsWithChildren {}

// const MainLayout: React.FC<MainLayoutI> = ({ children }) => {
//   return (
//     <MainLayoutStyled.MainLayout>
//       <MainLayoutStyled.Header>
//         <img src={LogoPlazaVea} alt="logoPlazaVea" />
//         <nav>
//           <MainLayoutStyled.NavList>
//             <MainLayoutStyled.NavItem>
//               <MainLayoutStyled.NavLink to={ModuleRoutes.Resumen}>
//                 <MainLayoutStyled.CartIcon src={Carrito} alt="miCarrito" />
//               </MainLayoutStyled.NavLink>
//             </MainLayoutStyled.NavItem>
//           </MainLayoutStyled.NavList>
//         </nav>
//       </MainLayoutStyled.Header>
//       <MainLayoutStyled.Container>{children}</MainLayoutStyled.Container>
//     </MainLayoutStyled.MainLayout>
//   );
// };

// export default MainLayout;

import { PropsWithChildren } from "react";
import { ModuleRoutes } from "../../../app/routes";
import LogoPlazaVea from "../../../assets/LogoPlazaVea.svg";
import Carrito from "../../../assets/carrito.png";
import MainLayoutStyled from "./MainLayout.styled";

interface MainLayoutI extends PropsWithChildren {}

const MainLayout: React.FC<MainLayoutI> = ({ children }) => {
  return (
    <MainLayoutStyled.MainLayout>
      <MainLayoutStyled.Header>
        {/* Logo que lleva al Home */}
        <MainLayoutStyled.LogoLink to={ModuleRoutes.Home}>
          <img src={LogoPlazaVea} alt="logoPlazaVea" />
        </MainLayoutStyled.LogoLink>

        <nav>
          <MainLayoutStyled.NavList>
            {/* 👋 Saludo */}
            <MainLayoutStyled.Greeting>Hola Emily</MainLayoutStyled.Greeting>

            {/* 🛒 Carrito */}
            <MainLayoutStyled.NavItem>
              <MainLayoutStyled.NavLink to={ModuleRoutes.Resumen}>
                <MainLayoutStyled.CartIcon src={Carrito} alt="miCarrito" />
              </MainLayoutStyled.NavLink>
            </MainLayoutStyled.NavItem>
          </MainLayoutStyled.NavList>
        </nav>
      </MainLayoutStyled.Header>

      <MainLayoutStyled.Container>{children}</MainLayoutStyled.Container>
    </MainLayoutStyled.MainLayout>
  );
};

export default MainLayout;
