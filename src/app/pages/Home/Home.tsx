import { useEffect, useState } from "react";
import { productRequest } from "../../proxy/product-request";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Products } from "../../domain/product/product";
import HomeStyled from "./Home.styled";
import Pagination from "../../components/Pagination/Pagination";
import usePagination from "../../../shared/hooks/usePagination"; 

const Home: React.FC = () => {
  const [nameSearch, setNameSearch] = useState("");
  const [products, setProducts] = useState<Products[] | null>(null);
const [productsSelected, setProductsSelected] = useState<Products[]>([]);
  
  const { currentPage, totalPages, currentData, setPage, resetPage } = usePagination<Products>(
    productsSelected,
    8
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setNameSearch(name);

    const newProducts =
      products?.filter((product) =>
        product.title.toLowerCase().includes(name.toLowerCase())
      ) || [];

    setProductsSelected(newProducts);
    resetPage(); // vuelve a la página 1 al buscar
  };

  const getProducts = async () => {
    try {
      const data = await productRequest.getProducts();
      setProducts(data);
      setProductsSelected(data);
    } catch (error) {
      console.error("Error al traer productos:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <HomeStyled.Container>
      <HomeStyled.Title>Buscar producto</HomeStyled.Title>
      <HomeStyled.SearchInput
        type="text"
        placeholder="¿Qué estás buscando?"
        value={nameSearch}
        onChange={onChange}
      />

      {products?.length ? (
        <>
          <HomeStyled.ProductsContainer>
            {currentData?.map((product) => (
              <ProductCard key={`${product.id}-${product.title}`} product={product as Products} />
            ))}
          </HomeStyled.ProductsContainer>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      ) : (
        <HomeStyled.LoadingText>Cargando productos...</HomeStyled.LoadingText>
      )}
    </HomeStyled.Container>
  );
};

export default Home;
