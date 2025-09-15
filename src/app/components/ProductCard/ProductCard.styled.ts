// import styled from "styled-components";
// import { ColorApp } from "../../../shared/utils/color";

// const Card = styled.div`
//   width: 280px;
//   border-radius: 8px;
//   overflow: hidden;
//   background: #fff;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
//   cursor: pointer;
//   transition: transform 0.2s ease-in-out;
//   padding: 5px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;

//   &:hover {
//     transform: scale(1.03);
//   }
// `;


// const Header = styled.div`
//   padding: 10px;
//   text-align: left;
// `;

// const Title = styled.h2`
//   font-size: 18px;
//   font-weight: bold;
//   margin: 5px 0;
// `;

// const Category = styled.span`
//   display: block;
//   font-size: 14px;
//   color: #666;
// `;

// const ImageContainer = styled.figure`
//   display: flex;
//   justify-content: center;
//   padding: 15px;
// `;

// const ProductImage = styled.img`
//   width: 100%;

//   object-fit: contain;
// `;

// const Button = styled.button`
//   width: 100%;
//   color: ${ColorApp.rojo  };
//   font-weight: bold;
//   background: white;                 
//   border: none;
//   padding: 11px 20px; 
//   border-radius: 50px;
//   border:2px solid ${ColorApp.rojo  };
//   cursor: pointer;
//   font-size: 16px;
//   margin-top: 30px;

//   &:hover {
//     background-color: ${ColorApp.rojo  };
//     color: white;
//   }
// `;

// const ProductCardStyled = {
//   Card,
//   Header,
//   Title,
//   Category,
//   ImageContainer,
//   ProductImage,
//   Button,
// };

// export default ProductCardStyled;

import styled from "styled-components";
import { ColorApp } from "../../../shared/utils/color";

const Card = styled.div`
  width: 280px;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: scale(1.03);
  }
`;

const Header = styled.div`
  padding: 10px;
  text-align: left;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0;
`;

const Category = styled.span`
  display: block;
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`;

// 💲 Precio
const Price = styled.span`
  display: block;
  font-size: 16px;
  font-weight: bold;
  color: ${ColorApp.rojo};
`;

// 📦 Stock
const Stock = styled.span`
  display: block;
  font-size: 14px;
  color: #333;
  margin-top: 4px;
`;

const ImageContainer = styled.figure`
  display: flex;
  justify-content: center;
  padding: 15px;
`;

const ProductImage = styled.img`
  width: 100%;
  object-fit: contain;
`;

const Button = styled.button`
  width: 100%;
  color: ${ColorApp.rojo};
  font-weight: bold;
  background: white;
  border: none;
  padding: 11px 20px;
  border-radius: 50px;
  border: 2px solid ${ColorApp.rojo};
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: ${ColorApp.rojo};
    color: white;
  }
`;

const ProductCardStyled = {
  Card,
  Header,
  Title,
  Category,
  Price,   // 👈 nuevo
  Stock,   // 👈 nuevo
  ImageContainer,
  ProductImage,
  Button,
};

export default ProductCardStyled;
