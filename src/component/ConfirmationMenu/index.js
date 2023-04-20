import Button from '../Button'
import styles from './ConfirmationMenu.module.css'

const ConfirmationMenu = ({ onAccept = () => {}, onCancel = () => {}, handleCloseModal = () => {}, children }) => {

  const acceptHandler = () => {
    onAccept();
    handleCloseModal();
  }
  const cancelHandler = () => {
    onCancel();
    handleCloseModal();
  }

  return (
    <div className={styles.confirmationMenuContainer}>
      <form className={styles.contentContainer}>
        {children ? (children) : <></>}
      </form>
      <div className={styles.footer}>
        <Button text="Cancel" clickHandler={cancelHandler} />
        <Button text="Accept" clickHandler={acceptHandler} />
      </div>
    </div>
  )
}

export default ConfirmationMenu