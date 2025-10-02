import type { ApiListResponse, ProductDto } from "@/types/api";
import { api } from "./api";

export const fetchProducts = async () => {
  const response = await api.get<ApiListResponse<ProductDto>>("/products");

  return response.data;
};
