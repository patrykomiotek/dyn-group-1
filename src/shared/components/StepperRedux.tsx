import { type KeyboardEventHandler } from "react";
import { Button, Input } from "shared/ui";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "@/features/counter/counterSlice";

export function StepperRedux() {
  const dispatch = useAppDispatch();
  const counterValue = useAppSelector((store) => store.counter.value);

  const handleDecrease = () => dispatch(decrement());
  const handleIncrease = () => dispatch(increment());

  const handleKeyboardChange: KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    const key = event.key; // 'Enter'
    const value = parseInt(event.currentTarget.value, 10);

    if (key === "Enter") {
      dispatch(incrementByAmount(value));
    }
  };

  return (
    <div>
      <div className="flex space-x-2 items-center">
        <Button onClick={handleDecrease}>-</Button>
        <p>{counterValue}</p>
        <Button onClick={handleIncrease}>+</Button>
      </div>
      <div>
        <Input label="" type="number" onKeyDown={handleKeyboardChange} />
      </div>
    </div>
  );
}
