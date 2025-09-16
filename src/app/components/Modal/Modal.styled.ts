import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Content = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  min-width: 300px;
  max-width: 400px;
  text-align: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h3`
  margin-bottom: 15px;
  font-size: 20px;
  color: #cc292e;
`;

const Body = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  padding: 8px 16px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  background: #cc292e;
  color: white;
  cursor: pointer;

  &:hover {
    background: #a51f24;
  }
`;

const ModalStyled = {
  Overlay,
  Content,
  Title,
  Body,
  CloseButton,
};

export default ModalStyled;
