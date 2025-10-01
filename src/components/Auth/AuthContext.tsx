import { createContext } from "react";

// type Animal = "cat" | "dog";
// type FlyingAnimal = Animal & "duck";

// type AuthContextProps = {
//   isLoggedIn: boolean;
// } & { additionalProps: string };

interface AuthContextProps {
  isLoggedIn: boolean;
}

interface Todo {
  title: string;
  description: string;
  createdAt: Date;
}
type OptionalTodo = Partial<Todo>;
type RequiredTodo = Required<Todo>;
type WithoutDate = Omit<Todo, "createdAt">;
type WithoutPick = Pick<Todo, "title" | "description">;
type ReadonlyTodo = Readonly<Todo>;

type CustomReadonly<T> = {
  readonly [K in keyof T]-?: T[K];
};

// type MyCustomReadonly = CustomReadonly<Todo>;

// interface ExtendedInterface extends AuthContextProps {
//   additionalProps: string;
// }

const defaultValue: AuthContextProps = {
  isLoggedIn: false,
};

export const AuthContext = createContext(defaultValue);
