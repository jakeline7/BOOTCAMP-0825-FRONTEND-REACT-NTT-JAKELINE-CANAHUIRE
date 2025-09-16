import styled from "styled-components";
import { Link } from "react-router-dom";
import { ColorApp } from "../../utils/color";


// Contenedor principal
const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${ColorApp['gris_claro']};
`;

// Header fijo
const Header = styled.header`
  width: 100%;
  height: 90px;
  padding: 25px 80px;
  font-family: "Oxanium", system-ui;
  color: ${ColorApp.blanco_suave};
  background-color: ${ColorApp.rojo};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;

// Logo con link al home
const LogoLink = styled(Link)`
  display: flex;
  align-items: center;

  img {
    height: 50px;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

// Lista de navegación
const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;

// Item de navegación
const NavItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Enlaces de navegación
const NavLink = styled(Link)`
  text-decoration: none;
  color: ${ColorApp.gris_claro};
  font-weight: 500;
  font-size: 18px;
  transition: all 0.3s;

  &:hover {
    font-size: 20px;
    font-weight: 600;
  }
`;

// 🛒 Estilo del icono del carrito
const CartIcon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const Greeting = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-right: 15px;
  color: ${ColorApp.blanco_suave};
`;

// Contenedor del contenido
const Container = styled.div`
  width: 100%;
  margin-top: 90px;
  padding: 50px 80px;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 90px);
`;

const MainLayoutStyled = {
  MainLayout,
  Header,
  LogoLink,
  NavList,
  NavItem,
  NavLink,
  CartIcon,
  Greeting,
  Container,
};

export default MainLayoutStyled;
