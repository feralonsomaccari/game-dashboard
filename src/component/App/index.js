import { useState, useEffect } from "react"
import styles from "./App.module.css"
import Counter from "../Counter"
import Modal from '../Modal'
import TableContainer from "../TableContainer"
import ConfirmationMenu from "../ConfirmationMenu"
import Input from '../Input'
import useFetchServer from "../../hooks/useFetchServer"
import useUsers from "../../hooks/useUsers"
import UsersMenu from "../UsersMenu"

function App() {
  // Users
  const [users, createUser, updateUser, deleteUser, usersLoading, error] = useUsers();
  const [usersTableHeight, setUsersTableHeight] = useState(0);
  // Games
  const [gamesData, setGamesData, gamesDataError] = useFetchServer('/api/game');
  const [gamesTableHeight, setGamesTableHeight] = useState(0);
  // Modals
  const [isEditCreateShown, setIsEditCreateShown] = useState(false);
  const [isDeleteModalShown, setDeleteModalShown] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [currentItem, setCurrentItem] = useState('');

  const closeModalHandler = () => {
    setIsEditCreateShown(false);
    setDeleteModalShown(false);
    setCurrentItem(false)
  }

  const createUserModalHandler = () => {
    setIsEditCreateShown(true);
    setCurrentItem({ username: '', email: '' })
    setModalTitle("Create a new user")
  }

  const updateUserModalHandler = (user) => {
    setCurrentItem(user)
    setIsEditCreateShown(true);
    setModalTitle(`Update ${user.username} information`)
  }

  const deleteUserModalHandler = (user) => {
    setDeleteModalShown(true);
    setCurrentItem(user.id)
    setModalTitle(`Delete user - ${user.username}`)
  }

  return (
    <>
      {/* Modal */}
      <Modal isOpen={isEditCreateShown} onClose={closeModalHandler} title={modalTitle}>
        <ConfirmationMenu onAccept={currentItem.id ? () => { updateUser(currentItem) } : () => createUser(currentItem)}>
          <UsersMenu currentItem={currentItem} setCurrentItem={setCurrentItem}></UsersMenu>
        </ConfirmationMenu>
      </Modal>
      <Modal isOpen={isDeleteModalShown} onClose={closeModalHandler} title={modalTitle}>
        <ConfirmationMenu onAccept={() => deleteUser(currentItem)} />
      </Modal>
      <div className={styles.wrapper}>
        {/* Title */}
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Hi! Welcome to the Game Dashboard</h1>
          <p>Here you can have a quick general look at your users and games.</p>
        </div>
        {/* Counters */}
        <div className={styles.countersWrapper}>
          <Counter value={users?.data?.length} title="Registered Users" type="users" />
          <Counter value={gamesData?.data?.length} title="Published Games" type="games" />
        </div>
        {/* Tables */}
        <TableContainer
          title={"Registered Users"}
          data={users.data}
          headers={users.headers}
          tableHeight={usersTableHeight}
          setTableHeight={setUsersTableHeight}
          addElementHandler={createUserModalHandler}
          deleteHandler={deleteUserModalHandler}
          updateHandler={updateUserModalHandler}
          loading={usersLoading}
        />
        {/* <TableContainer
          title={"Published Games"}
          data={gamesData.data}
          headers={gamesData.headers}
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
