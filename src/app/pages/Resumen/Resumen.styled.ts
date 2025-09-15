import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
  color: black;
  gap: 30px;
`;

// Contenedor de la imagen
const ImageContainer = styled.figure`
  width: 400px;
  height: 500px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 10px 5px #d2d2d2ff;
  background-color: #ffffffff;
  border-radius: 10px;
`;

// Imagen principal del producto
const ProductImage = styled.img`
  width: 90%;
  height: 90%;
  object-fit: contain;
  position: absolute;
  z-index: 2;
`;



// Descripción del producto
const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
`;

// Nombre del producto
const Name = styled.h2`
  font-size: 35px;
`;

const ResumenStyled = {
  Container,
  ImageContainer,
  ProductImage,
  Description,
  Name,
};

export default ResumenStyled;
