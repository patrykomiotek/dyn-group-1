import { render, screen, fireEvent } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Provider } from "react-redux";
import { StepperRedux } from "./StepperRedux";
import { store } from "../../store";

describe("ReduxStepper Component", () => {
  it("should change values", async () => {
    const { debug } = render(
      <Provider store={store}>
        <StepperRedux />
      </Provider>
    );
    // debug();

    //const increaseButton = screen.getByText('+')
    const increaseButton = screen.getByRole("button", { name: "+" });
    fireEvent.click(increaseButton);
    fireEvent.click(increaseButton);

    expect(screen.getByText("2")).toBeInTheDocument();

    const inputField = screen.getByLabelText("Type a number");
    // fireEvent.change(inputField, {
    //   event: { currentTarget: { value: "101" } },
    // });
    // fireEvent.keyDown(inputField, { event: { key: "Enter " } });
    await userEvent.type(inputField, "101");
    // await userEvent.keyboard("Enter");
    // await userEvent.
    await fireEvent.keyDown(inputField, { event: { key: "Enter" } });

    debug();
    expect(screen.getByText("103")).toBeInTheDocument();
  });
});
