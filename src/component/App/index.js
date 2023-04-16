import { useState } from "react"
import styles from "./App.module.css";
import tableStyles from "../Table/Table.module.css";
import Table from "../Table"
import Counter from "../Counter"
import usersDummyData from "../Table/usersDummyData.json"
import gamesDummyData from "../Table/gamesDummyData.json"
import { filterRows } from "../utils"


function App() {

  const [originalUsersData] = useState([...usersDummyData]);
  const [originalGamesData] = useState([...gamesDummyData]);
  const [usersData, setUsersData] = useState([...usersDummyData]);
  const [gamesData, setGamesData] = useState([...gamesDummyData]);

  const filterUsersHandler = (event) => {
    setUsersData(filterRows(originalUsersData, event.target.value))
  }
  const filterGamesHandler = (event) => {
    setGamesData(filterRows(originalGamesData, event.target.value))
  }

  const addNewUserHandler = () => {

  }

  const addNewGame = () => {

  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.countersWrapper}>
        <Counter value={usersData.length} title="Registered users" type="users" />
        <Counter value={gamesData.length} title="Available games" type="games" />
      </div>
      <Table headers={['Username', 'Email', 'Creation Date']} filterHandler={filterUsersHandler} addElementHandler={addNewUserHandler}>
        {usersData.length ? usersData.map((row) => {
          return (
            <tr key={row.id}>
              <td data-th='Username'>{row.username}</td>
              <td data-th='Email'>{row.email}</td>
              <td data-th='Creation Date'>{row.created_at}</td>
              <td data-th='Actions' id="action-header">
                <button className={`${tableStyles.icon} ${tableStyles.edit}`} />
                <button className={`${tableStyles.icon} ${tableStyles.delete}`} />
              </td>
            </tr>)
        }): <span>No data has been found</span>}
      </Table>
      <Table headers={['Name', 'Category', 'Developer', 'Creation Date']} filterHandler={filterGamesHandler} addElementHandler={addNewGame}>
        {gamesData.length ? gamesData.map((row) => {
          return (
            <tr key={row.id}>
              <td data-th='Name'>{row.name}</td>
              <td data-th='Category'>{row.category}</td>
              <td data-th='Developer'>{row.developer}</td>
              <td data-th='Creation Date'>{row.created_at}</td>
            </tr>)
        }): <span>No data has been found</span>}
      </Table>
    </div>
  );
}

export default App;
