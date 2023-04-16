import { render, screen } from "@testing-library/react";

import Input from "./";

describe("<Input/>", () => {
    it("should render an Input component", () => {
        render(<Input />);
        const inputEl = screen.queryByTestId("input");
        expect(inputEl).toBeInTheDocument();
    });

    it("should render an Input with 'Search... as placeholder", () => {
        const placeholder = "Search..."
        render(<Input placeholder={placeholder} />);
        const inputEl = screen.queryByTestId("input").getAttribute('placeholder');
        expect(inputEl).toEqual(placeholder);
    });
})
