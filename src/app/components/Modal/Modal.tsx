import React from "react";
import ModalStyled from "./Modal.styled";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, title, children }) => {
  if (!isVisible) return null;

  return (
    <ModalStyled.Overlay>
      <ModalStyled.Content>
        {title && <ModalStyled.Title>{title}</ModalStyled.Title>}
        <ModalStyled.Body>{children}</ModalStyled.Body>
        <ModalStyled.CloseButton onClick={onClose}>Cerrar</ModalStyled.CloseButton>
      </ModalStyled.Content>
    </ModalStyled.Overlay>
  );
};

export default Modal;
