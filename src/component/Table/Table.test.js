import { render, screen } from "@testing-library/react";
import dummyTableData from "../../services/dummyData/usersDummyData.json"

import Table from "./";

const headers = {
    "name": "Name",
    "category": "Category",
    "developer": "Developer",
    "created_at": "Created At"
}

describe("<Table/>", () => {
    it("should render a Table component", () => {
        render(<Table headers={headers} />);

        const table = screen.queryByRole("table");
        expect(table).toBeInTheDocument();
    });

    it("should render a Table component right amount of items", () => {
        render(<Table headers={headers}>
            {dummyTableData.data.map((row) => {
                return (
                    <tr key={row.id}>
                        <td data-th='Username'>{row.username}</td>
                        <td data-th='Email'>{row.email}</td>
                        <td data-th='Creation Date'>{row.created_at}</td>
                    </tr>)
            })}
        </Table>);
        const table = screen.queryAllByRole("row");
        expect(table).toHaveLength(dummyTableData.data.length + 1); // Plus one from the head
    });

    it("should render a Table component with an extra prop of aria-label", () => {
        const ariaLabel = "List of registered users"
        render(<Table headers={headers} extraProps={{ 'aria-label': ariaLabel }} />);

        const table = screen.getByRole("table").getAttribute('aria-label');
        expect(table).toEqual(ariaLabel);
    });
});
