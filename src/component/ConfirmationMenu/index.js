import Button from '../Button'
import styles from './ConfirmationMenu.module.css'

const ConfirmationMenu = ({ acceptHandler, cancelHandler, children }) => {
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