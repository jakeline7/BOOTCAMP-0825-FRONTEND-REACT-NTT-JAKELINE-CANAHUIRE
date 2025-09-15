// import { useEffect, useState } from "react";
// import { useLocation, useSearchParams } from "react-router-dom";
// import type{ Product } from "@/app/domain/product/product";
// import { productRequest } from "../../proxy/product-request";
// import "./Product.css";

// const ProductPage: React.FC = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const [searchParamsv2] = useSearchParams();
//   const idProduct = location.pathname.split("/")[2];
//   const [product, setProduct] = useState<Product | null>(null);
//   const [productImage, setProductImage] = useState("");

//   useEffect(() => {
//     console.log("location", location);
//     console.log(searchParams.get("id"));
//     console.log(searchParamsv2.get("nombre"));
//     console.log(location.pathname.split("/"));
//     const getProduct = async () => {
//       const data = await productRequest.getProduct(idProduct);
//       setProduct(data);
//       setProductImage(data.images[0]);
//     };

//     getProduct();
//   }, []);

//   return (
//     <div className="product--container">
//       <figure className="product__image--container">
        
//         <img src={productImage} alt="" className="product__image" />
//       </figure>
//       <div className="product__description">
//         <h2 className="product__name">{product?.title}</h2>
//         <p>{product?.description}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;


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
