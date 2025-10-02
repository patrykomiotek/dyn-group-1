import type { ApiListResponse, CategoryDto } from "@/types/api";
import { api } from "./api";

export const fetchCategories = async () => {
  const response = await api.get<ApiListResponse<CategoryDto>>("/categories");

  return response.data;
};
