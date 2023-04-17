import { useEffect, useState } from "react"
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
  //Users
  const [originalUsersData] = useState([...usersDummyData]);
  const [usersData, setUsersData] = useState([...usersDummyData]);
  const [usersPage, setUsersPage] = useState(1);
  const [usersPaginationData, updateUsersPaginationData, usersRange] = useTable(usersData, usersPage, 2);
  //Games
  const [originalGamesData] = useState([...gamesDummyData]);
  const [gamesData, setGamesData] = useState([...gamesDummyData]);
  const [gamesPage, setGamesPage] = useState(1);
  const [gamesPaginationData, updateGamesPaginationData, gamesRange] = useTable(gamesData, gamesPage, 2);


  useEffect(() => {
    updateUsersPaginationData(usersData, 2)
  }, [usersData])

  const filterUsersHandler = (event) => {
    setUsersData(filterRows(originalUsersData, event.target.value))
  }
  const filterGamesHandler = (event) => {
    setGamesData(filterRows(originalGamesData, event.target.value))
  }

  const nextPageUsersHandler = () => {
    if (usersPage >= usersRange.length) return;
    setUsersPage(usersPage + 1);
  }
  const prevPageUsersHandler = () => {
    if (usersPage <= 1) return;
    setUsersPage(usersPage - 1);
  }

  const addNewUserHandler = () => {
    setIsModalShown(true);
  }
  const addNewGame = () => { }


  return (
    <>
      {isModalShown && (
        <Modal setIsModalShown={setIsModalShown}>
        </Modal>
      )}
      <div className={styles.wrapper}>
        <div className={styles.countersWrapper}>
          <Counter value={originalUsersData.length} title="Registered users" type="users" />
          <Counter value={originalGamesData.length} title="Available games" type="games" />
        </div>
        <Table headers={['Username', 'Email', 'Created At']}
          filterHandler={filterUsersHandler}
          addElementHandler={addNewUserHandler}
          nextPageHandler={nextPageUsersHandler}
          prevPageHandler={prevPageUsersHandler}
          page={usersPage}
          range={usersRange.length}
        >
          {usersPaginationData.length ? usersPaginationData.map((row) => {
            return (
              <tr key={row.id}>
                <td data-th='Username'>{row.username}</td>
                <td data-th='Email'>{row.email}</td>
                <td data-th='Created At'>{row.created_at}</td>
                <td data-th='Actions' id="action-header" className={tableStyles.actionsContainer}>
                  <button className={`${tableStyles.icon} ${tableStyles.edit}`} />
                  <button className={`${tableStyles.icon} ${tableStyles.delete}`} />
                </td>
              </tr>)
          }) : <tr><td className={tableStyles.noData}>{NO_DATA}</td></tr>}
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
          }) : <tr><td className={tableStyles.noData}>{NO_DATA}</td></tr>}
        </Table>
      </div>
    </>

  );
}

export default App;
