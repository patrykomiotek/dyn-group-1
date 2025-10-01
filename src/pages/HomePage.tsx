import { Counter } from "../components/Counter";
import { ViewPort } from "../components/ViewPort";

export function HomePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl">Home Page</h1>
      <ViewPort />
      <Counter />
    </div>
  );
}
