// import { Fragment } from "react";
import "./App.css";
import { Button } from "./ui/Button";

import { Text } from "./ui/Text";

function App() {
  return (
    <>
      <div>
        <Text>Hello World!</Text>
      </div>
      <Button color="clouds" bgColor="carrot">
        Click me
      </Button>
      <Button>Click me too</Button>
    </>
  );
}

export default App;
