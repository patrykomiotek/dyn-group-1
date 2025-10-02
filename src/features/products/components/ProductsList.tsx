import type { ProductDto } from "@/types/api";

type Props = {
  data: ProductDto[];
};

export function ProductList({ data }: Props) {
  return (
    <div>
      {data.map((elem) => (
        <div key={elem.id} className="space-y-6">
          <h2 className="text-2xl">{elem.fields.name}</h2>
          <p>{elem.fields.description}</p>
        </div>
      ))}
    </div>
  );
}
