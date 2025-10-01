import { Counter } from "../components/Counter";
import { ValueCollector } from "../components/ValueCollector";
import { ViewPort } from "../components/ViewPort";

export function HomePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl">Home Page</h1>
      <ValueCollector />
      <ViewPort />
      <Counter />
    </div>
  );
}
