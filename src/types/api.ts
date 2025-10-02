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
