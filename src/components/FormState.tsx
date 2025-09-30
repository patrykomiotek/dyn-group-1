import { useState, type FormEventHandler } from "react";
import { Button } from "../ui/Button";

export function FormState() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [favLanguage, setFavLanguage] = useState("");

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log({ email, password, favLanguage });
  };

  // handleChange

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>
          E-mail: {email}, password: {password}, favLanguage: {favLanguage}
        </p>
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="favLanguage">Favorite language</label>
        <input
          id="favLanguage"
          type="text"
          onChange={(event) => setFavLanguage(event.target.value)}
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
