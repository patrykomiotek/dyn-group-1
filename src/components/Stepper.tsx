import { useReducer, useRef, type KeyboardEventHandler } from "react";
import { Button, Input } from "../ui";

interface State {
  value: number;
}

enum ActionType {
  DECREMENT = "action/decrement",
  INCREMENT = "action/increment",
  SET = "action/set",
}

interface Action {
  // type: "increase" | "decrease" | "set";
  type: ActionType;
  payload?: number;
}

const initialState: State = {
  value: 0,
};

const reducer = (state: State, action: Action) => {
  if (action.type === ActionType.DECREMENT) {
    return {
      value: state.value - 1,
    };
  } else if (action.type === ActionType.INCREMENT) {
    return {
      value: state.value + 1,
    };
  } else if (action.type === ActionType.SET) {
    if (action.payload) {
      return {
        value: action.payload,
      };
    }
  }
  // throw new Error('Invalid state');
  return state;
};

export function Stepper() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const inputFieldRef = useRef<HTMLInputElement>(null);

  const handleDecrease = () => dispatch({ type: ActionType.DECREMENT });
  const handleIncrease = () => dispatch({ type: ActionType.INCREMENT });

  const handleKeyboardChange: KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    const key = event.key; // 'Enter'
    const value = parseInt(event.currentTarget.value, 10);
    console.log({ key });
    if (key === "Enter") {
      dispatch({ type: ActionType.SET, payload: value });
    }
  };

  return (
    <div>
      <div>
        <Button onClick={handleDecrease}>-</Button>
        <p>{state.value}</p>
        <Button onClick={handleIncrease}>+</Button>
      </div>
      <div>
        <Input label="" type="number" onKeyDown={handleKeyboardChange} />
      </div>
    </div>
  );
}
