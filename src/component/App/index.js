import { useState, useEffect } from "react"
import styles from "./App.module.css"
import Counter from "../Counter"
import Modal from '../Modal'
import TableContainer from "../TableContainer"
import ConfirmationMenu from "../ConfirmationMenu"

function App() {
  const [isEditCreateShown, setIsEditCreateShown] = useState(false);
  const [isDeleteModalShown, setDeleteModalShown] = useState(false);
  // Users
  const [originalUsersData, setOriginalUsersData] = useState({});
  const [usersData, setUsersData] = useState([]);
  const [usersTableHeight, setUsersTableHeight] = useState(0);
  // Games
  const [originalGamesData, setOriginalGamesData] = useState({});
  const [gamesData, setGamesData] = useState([]);
  const [gamesTableHeight, setGamesTableHeight] = useState(0);

  const [modalTitle, setModalTitle] = useState('')
  const [currentItem, setCurrentItem] = useState('');


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

  useEffect(() => {
  }, [originalUsersData])

  const addNewUserHandler = () => {
    setIsEditCreateShown(true);
  }

  const addNewGamesHandler = () => {
    setIsEditCreateShown(true);
  }
  
  const deleteUserHandler = (id) => {
    setDeleteModalShown(true);
    setCurrentItem(id)
  }

  const deleteUser = () => {
    fetch(`/api/user/${currentItem}`, { method: "DELETE" })
      .then(data => data.json())
      .then(data => {
        setOriginalUsersData(data);
        setUsersData(data.data);
        setDeleteModalShown(false);
      })
      .finally(() => {
        setCurrentItem(false)
      })
  }

  return (
    <>
      {/* Modal */}
      {isEditCreateShown && (
        <Modal setIsModalShown={setIsEditCreateShown} title={modalTitle}>
        </Modal>
      )}
      {isDeleteModalShown && (
        <Modal setIsModalShown={setDeleteModalShown} title={modalTitle}>
          <ConfirmationMenu desc="Are you sure you want to delete an User" cancelHandler={() => setDeleteModalShown(false)} acceptHandler={deleteUser} />
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
          <Counter value={originalUsersData?.data?.length} title="Registered Users" type="users" />
          <Counter value={originalGamesData?.data?.length} title="Published Games" type="games" />
        </div>
        {/* Tables */}
        <TableContainer
          title={"Registered Users"}
          data={usersData}
          originalData={originalUsersData.data}
          headers={originalUsersData.headers}
          setData={setUsersData}
          addElementHandler={addNewUserHandler}
          tableHeight={usersTableHeight}
          setTableHeight={setUsersTableHeight}
          deleteHandler={deleteUserHandler}
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
          deleteHandler={deleteUserHandler}
        />
      </div>
    </>

  );
}

export default App;
