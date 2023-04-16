import React from 'react'
import styles from './Modal.module.css'

const Modal = ({ setIsModalShown, children, title }) => {

    return (
        <div className={styles.modalWrapper}>
            <div className={styles.modalOverlay} />
            <section className={styles.modalContent}>
                <header className={styles.header}>
                    <h3>{title}</h3>
                    <button data-testid="close-btn" className={styles.closeButton} onClick={() => setIsModalShown(false)}>x</button>
                </header>
                <section className={styles.children}>
                    {children}
                </section>
            </section>
        </div>
    )
}

export default Modal