import {
  useId,
  forwardRef,
  type ComponentPropsWithRef,
  type ForwardedRef,
} from "react";
import type { FieldError } from "react-hook-form";

type Props = {
  label: string;
  error?: FieldError;
} & ComponentPropsWithRef<"input">;

export const Input = forwardRef(
  (
    { label, id, error, ...rest }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const reactId = useId();
    const componentId = id ? id : reactId;
    return (
      <div>
        <label htmlFor={componentId}>{label}</label>
        <input id={componentId} ref={ref} {...rest} />
        {error && <p style={{ color: "red" }}>{`${error.message}`}</p>}
      </div>
    );
  }
);
