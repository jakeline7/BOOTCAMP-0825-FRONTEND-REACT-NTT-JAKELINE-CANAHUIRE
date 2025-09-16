import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f6f6f6;
`;

const Form = styled.form`
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  color: #cc292e;
`;

const Input = styled.input<{ isValid?: boolean }>`
  padding: 12px;
  font-size: 14px;
  border: 2px solid ${({ isValid }) => (isValid === false ? "red" : "#ccc")};
  border-radius: 6px;

  &:focus {
    outline: none;
    border-color: #cc292e;
  }
`;

const Button = styled.button<{ disabled?: boolean }>`
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background: ${({ disabled }) => (disabled ? "#aaa" : "#cc292e")};
  border: none;
  border-radius: 6px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    background: ${({ disabled }) => (disabled ? "#aaa" : "#a51f24")};
  }
`;

const Message = styled.p<{ type: "error" | "success" }>`
  text-align: center;
  font-size: 14px;
  color: ${({ type }) => (type === "error" ? "red" : "green")};
`;

const Modal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    background: white;
    padding: 30px;
    border-radius: 8px;
    text-align: center;
  }
`;

const LoginStyled = {
  Container,
  Form,
  Title,
  Input,
  Button,
  Message,
  Modal,
};

export default LoginStyled;
