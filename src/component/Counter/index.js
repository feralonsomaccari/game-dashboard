import React from 'react'
import styles from './Counter.module.css'
import Card from '../Card'
import Loader from '../Loader'

const Counter = ({ value = 0, title = "", type = '' }) => {
    return (
        <aside className={styles.counterContainer} data-testid="counter">
            {!value ? (
                <Loader />
            ) : (

                <Card>
                    <div className={styles.counter}>
                        {type && <span className={`${styles.icon} ${styles[type]}`} data-testid="icon" />}
                        <span className={`${styles.counterNum}`} style={{ ["--value"]: value }} />
                        <h2 className={styles.title}>{title}</h2>
                    </div>
                </Card >
            )}
        </aside >
    )
}

export default Counter