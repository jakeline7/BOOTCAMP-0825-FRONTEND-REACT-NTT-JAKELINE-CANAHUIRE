import { Products } from "@/app/domain/product/product";
import { useNavigate } from "react-router-dom";
import { ModuleRoutes } from "../../../app/routes";
import ProductCardStyled from "./ProductCard.styled";

interface ProductCardI {
  product: Products;
}

const ProductCard: React.FC<ProductCardI> = ({ product }) => {
  const navigate = useNavigate();
  const { title, category, images, id, price, stock } = product;

  const toProduct = (): void => {
    navigate(`${ModuleRoutes.Resumen}/${id}`);
  };

  return (
    <ProductCardStyled.Card onClick={toProduct}>
      <ProductCardStyled.ImageContainer>
        <ProductCardStyled.ProductImage src={images[0]} alt={title} />
      </ProductCardStyled.ImageContainer>

      <ProductCardStyled.Header>
        <ProductCardStyled.Title>{title}</ProductCardStyled.Title>
        <ProductCardStyled.Category>{category}</ProductCardStyled.Category>

        {/* 💲 Precio y 📦 Stock */}
        <ProductCardStyled.Price>S/ {price}</ProductCardStyled.Price>
        {/* <ProductCardStyled.Stock>Stock: {stock}</ProductCardStyled.Stock> */}

        <ProductCardStyled.Button>AGREGAR</ProductCardStyled.Button>
      </ProductCardStyled.Header>
    </ProductCardStyled.Card>
  );
};

export default ProductCard;
