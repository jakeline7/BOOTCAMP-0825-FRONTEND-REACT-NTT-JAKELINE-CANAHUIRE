import type{ Product, Products } from "../domain/product/product";

const productsApiUrl = "https://dummyjson.com";

const getProducts = async (): Promise<Products[]> => {
  try {
    const response = await fetch(`${productsApiUrl}/products`);
    const data = await response.json();

    // la API devuelve { products: [...] }
    return data.products;
  } catch (error) {
    throw new Error("Products network error");
  }
};


const getProduct = async (idProduct: string): Promise<Product> => {
  try {
    const response = await fetch(
      `${productsApiUrl}/product/${idProduct}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error("Product network error");
  }
};

// const getPlanets = async (): Promise<OriginPlanet[]> => {
//   try {
//     const response = await fetch(`${productsApiUrl}/planets`);
//     const data = await response.json();

//     return data.items;
//   } catch (error) {
//     throw new Error("Planets network error");
//   }
// };

export const productRequest = {
  getProduct,
  getProducts,
  // getPlanets,
};
