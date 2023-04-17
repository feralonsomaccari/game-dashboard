import React from 'react'
import styles from './Counter.module.css'
import Card from '../Card'

const Counter = ({ value = 0, title = "", type = '' }) => {
    return (
        <Card>
            <aside className={styles.counterContainer} data-testid="counter">
                {type && <span className={`${styles.icon} ${styles[type]}`} data-testid="icon" />}
                <span className={`${styles.counterNum}`} style={{ ["--value"]: value }} />
                <h2 className={styles.title}>{title}</h2>
            </aside>
        </Card>
    )
}

export default Counter