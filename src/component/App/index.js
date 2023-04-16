import { useState } from "react"
import styles from "./App.module.css";
import tableStyles from "../Table/Table.module.css";
import Table from "../Table"
import Counter from "../Counter"
import usersDummyData from "../Table/usersDummyData.json"
import gamesDummyData from "../Table/gamesDummyData.json"
import { filterRows } from "../utils"
import Modal from '../Modal'
import useTable from "../../hooks/useTablePagination";

const NO_DATA = "No data has been found"

function App() {
  const [isModalShown, setIsModalShown] = useState(false);
  const [originalUsersData] = useState([...usersDummyData]);
  const [originalGamesData] = useState([...gamesDummyData]);
  const [usersData, setUsersData] = useState([...usersDummyData]);
  const [gamesData, setGamesData] = useState([...gamesDummyData]);
  const [usersDataPage, setUsersDataPage] = useState(1);
  const { slice, range } = useTable(usersData, usersDataPage, 2);

  const filterUsersHandler = (event) => {
    setUsersData(filterRows(originalUsersData, event.target.value))
  }
  const filterGamesHandler = (event) => {
    setGamesData(filterRows(originalGamesData, event.target.value))
  }

  const addNewUserHandler = () => {
    setIsModalShown(true);
  }

  const addNewGame = () => {

  }

  const nextPageUsersHandler = () => {
    if (usersDataPage >= range.length) return;
    setUsersDataPage(usersDataPage + 1);
  }
  const prevPageUsersHandler = () => {
    if (usersDataPage <= 1) return;
    setUsersDataPage(usersDataPage - 1);
  }

  return (
    <>
      {isModalShown && (
        <Modal setIsModalShown={setIsModalShown}>
        </Modal>
      )}
      <div className={styles.wrapper}>
        <div className={styles.countersWrapper}>
          <Counter value={usersData.length} title="Registered users" type="users" />
          <Counter value={gamesData.length} title="Available games" type="games" />
        </div>
        <Table headers={['Username', 'Email', 'Created At']}
          filterHandler={filterUsersHandler}
          addElementHandler={addNewUserHandler}
          nextPageHandler={nextPageUsersHandler}
          prevPageHandler={prevPageUsersHandler}
          page={usersDataPage}
          range={range.length}
          >
          {slice.length ? slice.map((row) => {
            return (
              <tr key={row.id}>
                <td data-th='Username'>{row.username}</td>
                <td data-th='Email'>{row.email}</td>
                <td data-th='Created At'>{row.created_at}</td>
                <td data-th='Actions' id="action-header">
                  <button className={`${tableStyles.icon} ${tableStyles.edit}`} />
                  <button className={`${tableStyles.icon} ${tableStyles.delete}`} />
                </td>
              </tr>)
          }) : <span>{NO_DATA}</span>}
        </Table>
        <Table headers={['Name', 'Category', 'Developer', 'Created At']} filterHandler={filterGamesHandler} addElementHandler={addNewGame}>
          {gamesData.length ? gamesData.map((row) => {
            return (
              <tr key={row.id}>
                <td data-th='Name'>{row.name}</td>
                <td data-th='Category'>{row.category}</td>
                <td data-th='Developer'>{row.developer}</td>
                <td data-th='Created At'>{row.created_at}</td>
              </tr>)
          }) : <span>{NO_DATA}</span>}
        </Table>
      </div>
    </>

  );
}

export default App;
