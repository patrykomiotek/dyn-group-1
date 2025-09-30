import {
  useId,
  forwardRef,
  type ComponentPropsWithRef,
  type ForwardedRef,
} from "react";

type Props = {
  label: string;
} & ComponentPropsWithRef<"input">;

export const Input = forwardRef(
  ({ label, id, ...rest }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const reactId = useId();
    const componentId = id ? id : reactId;
    return (
      <div>
        <label htmlFor={componentId}>{label}</label>
        <input id={componentId} ref={ref} {...rest} />
      </div>
    );
  }
);
