import React from 'react'
import styles from './Card.module.css'

const Card = ({ title, children }) => {
    return (
        <article className={styles.cardContainer}>
            {title && <h2 className={styles.cardTitle}>{title}</h2>}
            <section className={styles.cardContentContainer}>
                {children}
            </section>
        </article>
    )
}

export default Card