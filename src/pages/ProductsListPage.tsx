import { useApi } from "@/hooks/useApi";
import { fetchProducts } from "@/services/products";
import type { ProductDto } from "@/types/api";

export function ProductsListPage() {
  const { data, isLoading, isError } = useApi<ProductDto[]>(fetchProducts);

  // const records = data?.records

  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  // const [data, setData] = useState<ProductDto[]>([]);

  // const loadData = async () => {
  //   try {
  //     const response = await fetchProducts();
  //     setData(response.records);
  //   } catch {
  //     setIsError(true);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   loadData();
  // }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl">Products List</h1>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Component error</p>}
      {data &&
        data.map((elem) => (
          <div key={elem.id} className="space-y-6">
            <h2 className="text-2xl">{elem.fields.name}</h2>
            <p>{elem.fields.description}</p>
          </div>
        ))}
    </div>
  );
}
