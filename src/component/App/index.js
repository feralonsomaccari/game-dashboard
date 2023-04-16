import styles from "./App.module.css";
import Table from "../Table"

const dummyTableData = [
  {
    "id": 1,
    "username": "john_doe",
    "email": "john.doe@example.com",
    "created_at": "2022-03-01T10:00:00Z"
  },
  {
    "id": 2,
    "username": "jane_smith",
    "email": "jane.smith@example.com",
    "created_at": "2022-03-03T15:00:00Z"
  },
  {
    "id": 3,
    "username": "bob_johnson",
    "email": "bob.johnson@example.com",
    "created_at": "2022-03-05T09:00:00Z"
  },
  {
    "id": 4,
    "username": "alice_green",
    "email": "alice.green@example.com",
    "created_at": "2022-03-07T11:00:00Z"
  },
  {
    "id": 5,
    "username": "mike_davis",
    "email": "mike.davis@example.com",
    "created_at": "2022-03-09T14:00:00Z"
  }
]

function App() {
  return (
    <div>
      <Table headers={['Username', 'Email', 'Creation Date']}>

        {dummyTableData.map((row) => {
          return (
            <tr key={row.id}>
              <td>{row.username}</td>
              <td>{row.email}</td>
              <td>{row.created_at}</td>
            </tr>)
        })}

      </Table>
    </div>
  );
}

export default App;
