export interface ApiListResponse<T> {
  records: T[];
}

export interface ProductDto {
  id: number;
  fields: {
    name: string;
    description: string;
    price: number;
  };
}

// export type CreateProductDto = Omit<ProductDto, "id">["fields"];
export type CreateProductDto = Omit<ProductDto, "id">;

export interface CategoryDto {
  id: number;
  fields: {
    name: string;
  };
}
