import { render, screen } from "@testing-library/react";

import Modal from ".";

const props = {
    setIsModalShown: () => { },
};

describe("<Modal/>", () => {
    it("should have a close button", () => {
        render(<Modal {...props} />);
        const closeBtn = screen.getByTestId("close-btn");
        expect(closeBtn).toBeInTheDocument();
    });

});
