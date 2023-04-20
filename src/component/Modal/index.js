import { useState, Children, cloneElement } from 'react'
import styles from './Modal.module.css'

const Modal = ({ isOpen, onClose = () => {}, children, title }) => {

    const [isModalOpen, setIsModalOpen] = useState(isOpen)

    const handleClose = () => {
        setIsModalOpen(false)
        onClose();
    }

    if (!isModalOpen) return <></>

    return (
        <div className={styles.modalWrapper}>
            <div className={styles.modalOverlay} />
            <section className={styles.modalContent}>
                <header className={styles.header}>
                    <h3>{title}</h3>
                    <button data-testid="close-btn" className={styles.closeButton} onClick={handleClose}>x</button>
                </header>
                <section className={styles.children}>
                    {Children.map(children, child => {
                        return cloneElement(child, {
                            handleCloseModal: handleClose,
                        });
                    })}
                </section>
            </section>
        </div>
    )
}

export default Modal