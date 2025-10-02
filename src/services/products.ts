import type {
  ApiListResponse,
  CreateProductDto,
  ProductDto,
} from "@/types/api";
import { api } from "./api";

export const fetchProducts = async () => {
  const response = await api.get<ApiListResponse<ProductDto>>("/products");

  return response.data;
};

export const crateProduct = async (data: CreateProductDto) => {
  const response = await api.post("/products", {
    records: [data],
  });

  return response;
};
