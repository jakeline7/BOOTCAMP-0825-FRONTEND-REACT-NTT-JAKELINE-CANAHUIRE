import type{ DimensionsResponse } from "../product/dimension";
import type{ MetaResponse } from "../product/meta";
import type{ ReviewResponse } from "../product/review";


export interface Products extends Omit<ProductsResponse, "thumbnail"> {}
export interface Product extends Omit<ProductResponse, "thumbnail"> {}


export interface ProductsResponse {
  id:                   number;
  title:                string;
  description:          string;
  category:             string;
  price:                number;
  discountPercentage:   number;
  rating:               number;
  stock:                number;
  tags:                 string[];
  brand:                string;
  sku:                  string;
  weight:               number;
  warrantyInformation:  string;
  shippingInformation:  string;
  availabilityStatus:   string;
  returnPolicy:         string;
  minimumOrderQuantity: number;
  thumbnail:            string;
  images:               string[];
}

export interface ProductResponse extends ProductsResponse {
  dimensions: DimensionsResponse;
  reviews: ReviewResponse[];
  meta: MetaResponse[];
}
