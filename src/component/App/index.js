import { useState, useEffect } from "react"
import styles from "./App.module.css"
import Counter from "../Counter"
import Modal from '../Modal'
import TableContainer from "../TableContainer"

function App() {
  const [isModalShown, setIsModalShown] = useState(false);
  //Users
  const [originalUsersData, setOriginalUsersData] = useState({});
  const [usersData, setUsersData] = useState([]);
  const [usersTableHeight, setUsersTableHeight] = useState(0);

  useEffect(() => {
    fetch('/api/user')
      .then(data => data.json())
      .then(data => {
        setOriginalUsersData(data)
        setUsersData(data.data)
      })
  }, [])

  const addNewUserHandler = () => {
    setIsModalShown(true);
  }

  if (!originalUsersData.data || !originalUsersData.data.length) return <div></div>

  return (
    <>
      {/* Modal */}
      {isModalShown && (
        <Modal setIsModalShown={setIsModalShown}>
        </Modal>
      )}
      <div className={styles.wrapper}>
        {/* Title */}
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Hi! Welcome to Game Dashboard</h1>
          <p>Here you can have a quick general look at your users and games.</p>
        </div>
        {/* Counters */}
        <div className={styles.countersWrapper}>
          <Counter value={originalUsersData.data.length} title="Registered Users" type="users" />
          {/* <Counter value={originalGamesData.data.length} title="Published Games" type="games" /> */}
        </div>
        {/* Tables */}
        <TableContainer
          data={usersData}
          originalData={originalUsersData.data}
          headers={originalUsersData.headers}
          setData={setUsersData}
          addElementHandler={addNewUserHandler}
          tableHeight={usersTableHeight}
          setTableHeight={setUsersTableHeight}
        />
      </div>
    </>

  );
}

export default App;


{/* <Card title="Published Games">
          <Table headers={originalGamesData.headers}
            filterHandler={filterGamesHandler}
            addElementHandler={addNewGame}
            nextPageHandler={nextPageGamesHandler}
            prevPageHandler={prevPageGamesHandler}
            page={gamesPage}
            range={gamesRange.length}
            tableHeight={gamesTableHeight}
            setTableHeight={setGamesTableHeight}
            sortHandler={sortGamesByColumn}
          >
            {gamesPaginationData.length ? gamesPaginationData.map((row) => {
              return (
                <tr key={row.id}>
                  <td data-th='Name'>{row.name}</td>
                  <td data-th='Category'>{row.category}</td>
                  <td data-th='Developer'>{row.developer}</td>
                  <td data-th='Created At'>{row.created_at}</td>
                </tr>)
            }) : <tr><td className={tableStyles.noData}>{NO_DATA}</td></tr>}
          </Table>
        </Card> */}