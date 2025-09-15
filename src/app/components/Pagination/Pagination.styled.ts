import styled from "styled-components";

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
  background: ${({ active }) => (active ? "#4f4f4f" : "#eee")};
  color: ${({ active }) => (active ? "white" : "black")};
  cursor: pointer;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? "600" : "400")};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ active }) => (active ? "#3b3b3bff" : "#ddd")};
  }
`;

const PaginationStyled = {
  Container,
  PageButton,
};

export default PaginationStyled;
