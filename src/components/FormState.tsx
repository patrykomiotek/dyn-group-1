import {
  useState,
  type ChangeEventHandler,
  type FormEventHandler,
} from "react";
import { Button } from "../ui/Button";

export function FormState() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [favLanguage, setFavLanguage] = useState("");
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    favLanguage: "",
  });

  const { email, password, favLanguage } = formState;

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log({ email, password, favLanguage });
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    // const name = event.target.name;
    const id = event.target.id;

    setFormState({
      ...formState,
      [id]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>
          E-mail: {email}, password: {password}, favLanguage: {favLanguage}
        </p>
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input id="email" type="email" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="favLanguage">Favorite language</label>
        <input id="favLanguage" type="text" onChange={handleChange} />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
