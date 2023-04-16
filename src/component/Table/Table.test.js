import { render, screen } from "@testing-library/react";
import dummyTableData from "../Table/usersDummyData.json"

import Table from "./";

describe("<Table/>", () => {
    it("should render a Table component", () => {
        render(<Table headers={['Username', 'Email', 'Creation Date']} />);

        const table = screen.queryByRole("table");
        expect(table).toBeInTheDocument();
    });

    it("should not render a Table component", () => {
        render(<Table />);

        const table = screen.queryByRole("table");
        expect(table).not.toBeInTheDocument();
    });

    it("should render a Table component right amount of items", () => {
        render(<Table headers={['Username', 'Email', 'Creation Date']}>
            {dummyTableData.map((row) => {
                return (
                    <tr key={row.id}>
                        <td data-th='Username'>{row.username}</td>
                        <td data-th='Email'>{row.email}</td>
                        <td data-th='Creation Date'>{row.created_at}</td>
                    </tr>)
            })}
        </Table>);
        const table = screen.queryAllByRole("row");
        expect(table).toHaveLength(dummyTableData.length + 1); // Plus one from the head
    });

    it("should render a Table component with an extra prop of aria-label", () => {
        const ariaLabel = "List of registered users"
        render(<Table headers={['Username', 'Email', 'Creation Date']} extraProps={{ 'aria-label': ariaLabel }} />);

        const table = screen.getByRole("table").getAttribute('aria-label');
        expect(table).toEqual(ariaLabel);
    });
});
