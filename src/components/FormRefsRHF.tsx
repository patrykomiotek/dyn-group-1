import { useRef, type FormEventHandler } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

const formSchema = z.object({
  email: z.email(),
  password: z.string().min(3, { error: "Too short" }),
  favLanguage: z.enum(["js", "java", "c#"]),
});
type FormSchema = z.infer<typeof formSchema>;

export function FormRefsRHF() {
  const { register, handleSubmit, formState } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    console.log(data);
  };

  const { errors } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="E-mail" id="email" type="email" {...register("email")} />
      {errors && errors.email && (
        <p style={{ color: "red" }}>{`${errors.email.message}`}</p>
      )}
      <Input
        label="Password"
        id="password"
        type="password"
        {...register("password")}
      />
      {errors && errors.password && (
        <p style={{ color: "red" }}>{`${errors.password.message}`}</p>
      )}
      <Input
        label="Favorite language"
        id="favLanguage"
        {...register("favLanguage")}
      />
      {errors && errors.favLanguage && (
        <p style={{ color: "red" }}>{`${errors.favLanguage.message}`}</p>
      )}
      <Button type="submit">Submit</Button>
    </form>
  );
}
