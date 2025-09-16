import { useEffect, useState } from "react";
import { useLocation} from "react-router-dom";
import type { Product } from "@/app/domain/product/product";
import { productRequest } from "../../proxy/product-request";
import ResumenStyled from "./Resumen.styled";

const Resumen: React.FC = () => {
  const location = useLocation();
  const idProduct = location.pathname.split("/")[2];
  const [product, setProduct] = useState<Product | null>(null);
  const [productImage, setProductImage] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      const data = await productRequest.getProduct(idProduct);
      setProduct(data);
      setProductImage(data.images[0]);
    };

    getProduct();
  }, []);

  return (
    <ResumenStyled.Container>
      <ResumenStyled.ImageContainer>
        <ResumenStyled.ProductImage src={productImage} alt={product?.title} />
      </ResumenStyled.ImageContainer>

      <ResumenStyled.Description>
        <ResumenStyled.Name>{product?.title}</ResumenStyled.Name>
        <p>{product?.description}</p>
      </ResumenStyled.Description>
    </ResumenStyled.Container>
  );
};

export default Resumen;
