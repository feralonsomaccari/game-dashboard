import { useState, useEffect } from "react"
import styles from "./App.module.css"
import Counter from "../Counter"
import Modal from '../Modal'
import TableContainer from "../TableContainer"
import ConfirmationMenu from "../ConfirmationMenu"
import Input from '../Input'
import { v4 as uuidv4 } from 'uuid';

function App() {
  // Users
  const [originalUsersData, setOriginalUsersData] = useState({});
  const [usersData, setUsersData] = useState([]);
  const [usersTableHeight, setUsersTableHeight] = useState(0);
  // Games
  const [originalGamesData, setOriginalGamesData] = useState({});
  const [gamesData, setGamesData] = useState([]);
  const [gamesTableHeight, setGamesTableHeight] = useState(0);
  // Modals
  const [isEditCreateShown, setIsEditCreateShown] = useState(false);
  const [isDeleteModalShown, setDeleteModalShown] = useState(false);
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

  const addNewUserHandler = () => {
    setCurrentItem({
      username: '',
      email: ''
    })
    setIsEditCreateShown(true);
    setModalTitle("Create New User")
  }

  const createUser = () => {
    console.log("qqqq")
    const newUser = currentItem;
    newUser.id = uuidv4();
    fetch(`/api/user`, { method: "POST", body: JSON.stringify(newUser) })
      .then(data => data.json())
      .then(data => {
        console.log(data)
        setOriginalUsersData(data);
        setUsersData(data.data);
        closeModalHandler();
      })
  }

  const updateUserHandler = (user) => {
    setCurrentItem(user)
    setIsEditCreateShown(true);
    setModalTitle(`Update ${user.username} data`)
  }

  const updateUser = () => {
    fetch(`/api/user`, { method: "PUT", body: JSON.stringify(currentItem) })
      .then(data => data.json())
      .then(data => {
        setOriginalUsersData(data);
        setUsersData(data.data);
        closeModalHandler();
      })
      .finally(() => {
        setCurrentItem(false)
      })
  }

  const deleteUserHandler = (id) => {
    setDeleteModalShown(true);
    setCurrentItem(id)
    setModalTitle("Delete User")
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

  const closeModalHandler = () => {
    setIsEditCreateShown(false);
    setCurrentItem(false)
  }

  return (
    <>
      {/* Modal */}
      {isEditCreateShown && (
        <Modal setIsModalShown={setIsEditCreateShown} title={modalTitle}>
          <ConfirmationMenu
            cancelHandler={() => setIsEditCreateShown(false)}
            acceptHandler={currentItem.id ? updateUser : createUser}>
            <>
              <label htmlFor="form-username" type="value">Username</label>
              <Input id="form-username" placeholder="Username" onChangeHandler={(e) => setCurrentItem(prevUser => ({ ...prevUser, username: e.target.value }))} value={currentItem.username} />
              <label htmlFor="form-email">Email</label>
              <Input id="form-email" placeholder="Email" type="email" onChangeHandler={(e) => setCurrentItem(prevUser => ({ ...prevUser, email: e.target.value }))} value={currentItem.email} />
            </>
          </ConfirmationMenu>
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
          updateHandler={updateUserHandler}
        />
        {/* <TableContainer
          title={"Published Games"}
          data={gamesData}
          originalData={originalGamesData.data}
          headers={originalGamesData.headers}
          setData={setGamesData}
          addElementHandler={addNewGamesHandler}
          tableHeight={gamesTableHeight}
          setTableHeight={setGamesTableHeight}
          deleteHandler={deleteUserHandler}
        /> */}
      </div>
    </>

  );
}

export default App;
