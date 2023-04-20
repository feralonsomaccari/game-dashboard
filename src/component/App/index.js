import { useState } from "react"
import styles from "./App.module.css"
import Counter from "../Counter"
import Modal from '../Modal'
import TableContainer from "../TableContainer"
import ConfirmationMenu from "../ConfirmationMenu"
import UsersMenu from "../UsersMenu"
import GamesMenu from "../GamesMenu"
import useUsers from "../../hooks/useUsers"
import useGames from "../../hooks/useGames"

function App() {
  // Users
  const [users, createUser, updateUser, deleteUser, usersLoading, usersError] = useUsers();
  const [usersTableHeight, setUsersTableHeight] = useState(0);
  // Games
  const [games, createGame, updateGame, deleteGame, gamesLoading, gamesError] = useGames();
  const [gamesTableHeight, setGamesTableHeight] = useState(0);
  // Modals
  const [modalTitle, setModalTitle] = useState('');
  const [currentItem, setCurrentItem] = useState('');
  const [modalType, setModalType] = useState('');
  const [isEditCreateUserShown, setIsEditCreateUserShown] = useState(false);
  const [isDeleteUserModalShown, setDeleteUserModalShown] = useState(false);

  const closeModalHandler = () => {
    setIsEditCreateUserShown(false);
    setDeleteUserModalShown(false);
    setCurrentItem(false)
  }

  const createItemModalHandler = (type) => {
    setModalType(type)
    setIsEditCreateUserShown(true);
    switch (type) {
      case 'users':
        setCurrentItem({ username: '', email: '' })
        setModalTitle("Create a new User")
        break;
      case 'users':
        setCurrentItem({
          name: "Name",
          category: "Category",
          developer: "Developer"
        })
        setModalTitle("Publish a new Game")
        break;
    }
  }

  const updateItemModalHandler = (type, item) => {
    setModalType(type)
    setIsEditCreateUserShown(true);
    setCurrentItem(item)
    switch (type) {
      case 'users':
        setModalTitle(`Update ${item?.username} information`)
        break;
      case 'users':
        setModalTitle(`Update ${item?.name} information`)
        break;
    }
  }

  const deleteItemModalHandler = (type) => {
    setModalType(type)
    setDeleteUserModalShown(true);
    setCurrentItem(type.id)
    setModalTitle(`Delete ${type}`)
  }

  const renderCreateEditModal = (type) => {
    if (type === 'users') {
      return (
        <ConfirmationMenu onAccept={currentItem.id ? () => { updateUser(currentItem) } : () => createUser(currentItem)}>
          <UsersMenu currentItem={currentItem} setCurrentItem={setCurrentItem} />
        </ConfirmationMenu>
      )
    }
    if (type === 'games') {
      return (
        <ConfirmationMenu onAccept={currentItem.id ? () => { updateGame(currentItem) } : () => createGame(currentItem)}>
          <GamesMenu currentItem={currentItem} setCurrentItem={setCurrentItem} />
        </ConfirmationMenu>
      )
    }
  }

  return (
    <>
      {/* Edit/Create Modal */}
      <Modal isOpen={isEditCreateUserShown} onClose={closeModalHandler} title={modalTitle}>
        {renderCreateEditModal(modalType)}
      </Modal>
      {/* Delete Modal */}
      <Modal isOpen={isDeleteUserModalShown} onClose={closeModalHandler} title={modalTitle}>
        <ConfirmationMenu onAccept={() => modalType === 'user' ? deleteUser(currentItem) : deleteGame(currentItem)} />
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
          <Counter value={games?.data?.length} title="Published Games" type="games" />
        </div>
        {/* Tables */}
        <TableContainer
          title={"Registered Users"}
          type="users"
          data={users.data}
          headers={users.headers}
          tableHeight={usersTableHeight}
          setTableHeight={setUsersTableHeight}
          addElementHandler={createItemModalHandler}
          updateHandler={updateItemModalHandler}
          deleteHandler={deleteItemModalHandler}
          loading={usersLoading}
        />
        <TableContainer
          title={"Published Games"}
          type="games"
          data={games.data}
          headers={games.headers}
          tableHeight={gamesTableHeight}
          setTableHeight={setGamesTableHeight}
          addElementHandler={createItemModalHandler}
          updateHandler={updateItemModalHandler}
          deleteHandler={deleteItemModalHandler}
          loading={gamesLoading}
        />
      </div>
    </>

  );
}

export default App;
