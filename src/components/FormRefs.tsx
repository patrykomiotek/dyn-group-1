import { useRef, type FormEventHandler } from "react";
import { Button } from "../ui/Button";

export function FormRefs() {
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const passwordFieldRef = useRef<HTMLInputElement>(null);
  const favLanguageFieldRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const email = emailFieldRef.current?.value || "";
    const password = passwordFieldRef.current?.value || "";
    const favLanguage = favLanguageFieldRef.current?.value || "";

    console.log({ email, password, favLanguage });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">E-mail</label>
        <input id="email" ref={emailFieldRef} type="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" ref={passwordFieldRef} type="password" />
      </div>
      <div>
        <label htmlFor="favLanguage">Favorite language</label>
        <input id="favLanguage" ref={favLanguageFieldRef} type="text" />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
