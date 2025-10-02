import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "react-router-dom";

import { Button, Input } from "../../../ui";
import { createProductSchema, type CreateProductDto } from "../types";
import { crateProduct } from "../services/products";

export function CreateProduct() {
  const { register, handleSubmit, formState } = useForm<CreateProductDto>({
    resolver: zodResolver(createProductSchema),
  });

  const onSubmit: SubmitHandler<CreateProductDto> = async (data) => {
    // console.log(data);
    try {
      await crateProduct(data);
      // react-toastify
      redirect("/products"); //
    } catch {
      // display error message
    }
  };

  const { errors, isValid, isSubmitting } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {!isValid && <p className="text-red-500">Invalid form</p>}

      <Input label="Name" error={errors.name} {...register("name")} />

      <Input
        label="Description"
        error={errors.description}
        {...register("description")}
      />

      <Input
        label="Price"
        type="number"
        error={errors.price}
        {...register("price", { valueAsNumber: true })}
      />

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
