import { AuthInfo } from "../components/Auth/AuthInfo";
import { Counter } from "../components/Counter";
import { PostsList } from "../components/PostsList";
import { Stepper } from "../components/Stepper";
import { ValueCollector } from "../components/ValueCollector";
import { ViewPort } from "../components/ViewPort";

export function HomePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl">Home Page</h1>
      <PostsList />
      {/* <AuthInfo /> */}
      {/* <Stepper />
      <ValueCollector />
      <ViewPort />
      <Counter /> */}
    </div>
  );
}
