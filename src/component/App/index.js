import { useState, useEffect } from "react"
import styles from "./App.module.css"
import Counter from "../Counter"
import Modal from '../Modal'
import TableContainer from "../TableContainer"

function App() {
  const [isModalShown, setIsModalShown] = useState(false);
  // Users
  const [originalUsersData, setOriginalUsersData] = useState({});
  const [usersData, setUsersData] = useState([]);
  const [usersTableHeight, setUsersTableHeight] = useState(0);
  // Games
  const [originalGamesData, setOriginalGamesData] = useState({});
  const [gamesData, setGamesData] = useState([]);
  const [gamesTableHeight, setGamesTableHeight] = useState(0);


  useEffect(() => {
    fetch('/api/user')
      .then(data => data.json())
      .then(data => {
        setOriginalUsersData(data)
        setUsersData(data.data)
      })

    fetch('/api/game')
      .then(data => data.json())
      .then(data => {
        setOriginalGamesData(data)
        setGamesData(data.data)
      })
  }, [])

  const addNewUserHandler = () => {
    setIsModalShown(true);
  }

  const addNewGamesHandler = () => {
    setIsModalShown(true);
  }

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
          <Counter value={originalUsersData?.data?.length} title="Registered Users" type="users"/>
          <Counter value={originalGamesData?.data?.length} title="Published Games" type="games" />
        </div>
        {/* Tables */}
        {/* <TableContainer
          title={"Registered Users"}
          data={usersData}
          originalData={originalUsersData.data}
          headers={originalUsersData.headers}
          setData={setUsersData}
          addElementHandler={addNewUserHandler}
          tableHeight={usersTableHeight}
          setTableHeight={setUsersTableHeight}
        />

        <TableContainer
          title={"Published Games"}
          data={gamesData}
          originalData={originalGamesData.data}
          headers={originalGamesData.headers}
          setData={setGamesData}
          addElementHandler={addNewGamesHandler}
          tableHeight={gamesTableHeight}
          setTableHeight={setGamesTableHeight}
        /> */}
      </div>
    </>

  );
}

export default App;
