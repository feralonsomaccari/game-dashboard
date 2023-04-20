import Button from '../Button'
import styles from './ConfirmationMenu.module.css'

const ConfirmationMenu = ({ desc = "", acceptHandler, cancelHandler }) => {
  return (
    <div className={styles.confirmationMenuContainer}>
      <p>{desc}</p>
      <div className={styles.footer}>
        <Button text="Cancel" clickHandler={cancelHandler} />
        <Button text="Accept" clickHandler={acceptHandler} />
      </div>
    </div>
  )
}

export default ConfirmationMenu