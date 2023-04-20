import { render, screen } from "@testing-library/react";

import LoadingSpinner from ".";

describe("<LoadingSpinner/>", () => {
    it("should render a LoadingSpinner component", () => {
        render(<LoadingSpinner />);
        const loadingEl = screen.queryByTestId("loader");
        expect(loadingEl).toBeInTheDocument();
    });
})
