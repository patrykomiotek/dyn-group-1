import type { ApiListResponse } from "@/types/api";
import { api } from "../../../services/api";
import type { CreateProductDto, ProductDto } from "../types";

export const fetchProducts = async () => {
  const response = await api.get<ApiListResponse<ProductDto>>("/products");

  return response.data;
};

export const crateProduct = async (data: CreateProductDto) => {
  const response = await api.post("/products", {
    records: [{ fields: data }],
  });

  return response;
};
