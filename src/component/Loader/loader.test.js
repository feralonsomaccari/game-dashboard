import { render, screen } from "@testing-library/react";

import Loader from ".";

describe("<Loader/>", () => {
    it("should render a Loader component", () => {
        render(<Loader />);
        const loadingEl = screen.queryByTestId("loader");
        expect(loadingEl).toBeInTheDocument();
    });
})
