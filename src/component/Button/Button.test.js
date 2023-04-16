import { render, screen } from "@testing-library/react";

import Button from ".";

describe("<Button/>", () => {
  it("should render a Button component", () => {
    render(<Button />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeTruthy();
  });

  it("should render a Button component with the text 'New User", () => {
    render(<Button text="New User" />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toHaveTextContent("New User");
  });

  it("should render a disabled Button", () => {
    render(<Button disabled={true} />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toHaveProperty("disabled", true);
  });
});
