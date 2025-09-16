import styled from "styled-components";
import { ColorApp } from "../../../shared/utils/color";

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;
`;

interface ButtonProps {
  active: boolean;
}

const PageButton = styled.button<ButtonProps>`
  padding: 6px 12px;
  border-radius: 5px;
  border: none;
  background: ${({ active }) => (active ? ColorApp['gris_medio'] : ColorApp['blanco_suave'])};
  color: ${({ active }) => (active ? ColorApp['blanco'] : "black")};
  cursor: pointer;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? "600" : "400")};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ active }) => (active ? ColorApp['gris_oscuro']  : ColorApp['blanco_humo'])};
  }
`;

const PaginationStyled = {
  Container,
  PageButton,
};

export default PaginationStyled;
