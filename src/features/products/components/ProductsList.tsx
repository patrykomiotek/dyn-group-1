import type { ProductDto } from "shared/types/api";
import { Link } from "react-router-dom";

type Props = {
  data: ProductDto[];
};

export function ProductList({ data }: Props) {
  return (
    <div>
      {data.map((elem) => (
        <div key={elem.id} className="space-y-6 mb-4">
          <h2 className="text-2xl">
            <Link to={`/products/${elem.id}`} className="text-blue-600">
              {elem.fields.name}
            </Link>
          </h2>
          <p>{elem.fields.description}</p>
        </div>
      ))}
    </div>
  );
}
