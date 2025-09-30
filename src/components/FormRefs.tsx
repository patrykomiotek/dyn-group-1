import { useRef, type FormEventHandler } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

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
      <Input label="E-mail" id="email" type="email" ref={emailFieldRef} />
      <Input
        label="Password"
        id="password"
        type="password"
        ref={passwordFieldRef}
      />
      <Input
        label="Favorite language"
        id="favLanguage"
        ref={favLanguageFieldRef}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
