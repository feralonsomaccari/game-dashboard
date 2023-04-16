import styles from "./App.module.css";
import Table from "../Table"
import dummyTableData from "../Table/usersDummyData.json"

function App() {
  return (
    <div className={styles.wrapper}>
      <Table headers={['Username', 'Email', 'Creation Date']}>
        {dummyTableData.map((row) => {
          return (
            <tr key={row.id}>
              <td data-th='Username'>{row.username}</td>
              <td data-th='Email'>{row.email}</td>
              <td data-th='Creation Date'>{row.created_at}</td>
            </tr>)
        })}
      </Table>
    </div>
  );
}

export default App;
