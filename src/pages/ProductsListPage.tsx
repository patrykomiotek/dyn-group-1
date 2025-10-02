import axios from "axios";
import { useEffect, useState } from "react";

interface ApiListResponse<T> {
  records: T[];
}

interface ProductDto {
  id: number;
  fields: {
    name: string;
    description: string;
    price: number;
  };
}

// webpack: process.env.API_TOKEN
// vite: import.meta.env.VITE_PUBLIC_API_TOKEN
const API_TOKEN = import.meta.env.VITE_API_TOKEN || "";

export function ProductsListPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<ProductDto[]>([]);

  const loadData = async () => {
    console.log({ API_TOKEN, otherVars: import.meta.env });
    try {
      const response = await axios.get<ApiListResponse<ProductDto>>(
        "https://api.airtable.com/v0/appn8kDF6gXKpZ00E/products",
        {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );
      setData(response.data.records);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl">Products List</h1>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Component error</p>}
      {data.map((elem) => (
        <div key={elem.id} className="space-y-6">
          <h2 className="text-2xl">{elem.fields.name}</h2>
          <p>{elem.fields.description}</p>
        </div>
      ))}
    </div>
  );
}
