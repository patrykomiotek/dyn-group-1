import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Button } from "../ui/Button";
import { Text } from "../ui/Text";

export function Generator() {
  const state = useState(""); // 0 - current state value, 1 - callback to change the state

  const handleIdChange = () => {
    // alert("Hello");
    const newId = uuidv4();
    state[1](newId);
  };

  return (
    <div>
      <Text>{state[0]}</Text>
      <Button onClick={handleIdChange}>Regenerate</Button>
    </div>
  );
}
