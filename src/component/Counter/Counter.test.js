import { render, screen } from "@testing-library/react";

import Counter from "./";

describe("<Counter/>", () => {
    it("should render a Counter component", () => {
        render(<Counter value={50} title="Registered users" />);
        const counter = screen.queryByTestId("counter");
        expect(counter).toBeInTheDocument();
    });

    it("should render a Counter component with title", () => {
        render(<Counter value={50} title="Registered users" />);
        const counter = screen.queryByRole("heading");
        expect(counter).toHaveTextContent("Registered users")
    });

    it("should render a Counter component with title icon", () => {
        render(<Counter value={50} title="Registered users" type="users" />);
        const counter = screen.queryByTestId("icon");
        expect(counter).toHaveClass("users")
    });
})
