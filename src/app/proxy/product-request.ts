import type{ Product, Products } from "../domain/product/product";

const productsApiUrl = "https://dummyjson.com";

const getProducts = async (): Promise<Products[]> => {
  try {
    const response = await fetch(`${productsApiUrl}/products`);
    const data = await response.json();

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

export const productRequest = {
  getProduct,
  getProducts,
};
