import { render, screen } from "@testing-library/react";
import dummyTableData from "../../services/dummyData/usersDummyData.json"

import TableContainer from "./";

const props = {
    title: "",
    data: [],
    headers: {},
    addElementHandler: () => { },
    tableHeight: 100,
    setTableHeight: () => { },
    deleteHandler: () => { },
    updateHandler: () => { },
    loading: false,
    type: "users"
}

it("should not render a Table component", () => {
    render(<TableContainer {...props} loading={true} />);

    const table = screen.queryByRole("table");
    expect(table).not.toBeInTheDocument();
});

it("should render a Table component", () => {
    render(<TableContainer {...props} loading={false} />);

    const table = screen.queryByRole("table");
    expect(table).toBeInTheDocument();
});
