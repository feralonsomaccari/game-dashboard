import { render, screen } from "@testing-library/react";

import Card from ".";

describe("<Card/>", () => {
    it("should render a Card component", () => {
        render(<Card />);
        const cardEl = screen.getByRole("article");
        expect(cardEl).toBeTruthy();
    });

    it("should render a Card component with Title", () => {
        render(<Card title="Games" />);
        const titleEl = screen.queryByRole("heading");
        expect(titleEl).toBeTruthy();
    });

    it("should render a Card component without Title", () => {
        render(<Card />);
        const titleEl = screen.queryByRole("heading");
        expect(titleEl).not.toBeTruthy();
    });

});
