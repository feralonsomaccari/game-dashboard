import React from 'react'
import styles from './Card.module.css'

const Card = ({ title, children }) => {
    return (
        <div className={styles.cardContainer}>
            {title && <h2 className={styles.cardTitle}>{title}</h2>}
            <div className={styles.cardContentContainer}>
                {children}
            </div>
        </div>
    )
}

export default Card