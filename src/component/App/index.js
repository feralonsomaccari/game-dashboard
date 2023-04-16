import styles from "./App.module.css";
import Table from "../Table"
import Counter from "../Counter"
import usersDummyData from "../Table/usersDummyData.json"
import gamesDummyData from "../Table/gamesDummyData.json"

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.countersWrapper}>
        <Counter value={usersDummyData.length} title="Registered users" type="users" />
        <Counter value={gamesDummyData.length} title="Available games" type="games" />
      </div>
      <Table headers={['Username', 'Email', 'Creation Date']}>
        {usersDummyData.map((row) => {
          return (
            <tr key={row.id}>
              <td data-th='Username'>{row.username}</td>
              <td data-th='Email'>{row.email}</td>
              <td data-th='Creation Date'>{row.created_at}</td>
            </tr>)
        })}
      </Table>
      <Table headers={['Name', 'Category', 'Developer', 'Creation Date']}>
        {gamesDummyData.map((row) => {
          return (
            <tr key={row.id}>
              <td data-th='Name'>{row.name}</td>
              <td data-th='Category'>{row.category}</td>
              <td data-th='Developer'>{row.developer}</td>
              <td data-th='Creation Date'>{row.created_at}</td>
            </tr>)
        })}
      </Table>
    </div>
  );
}

export default App;
