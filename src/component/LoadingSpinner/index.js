import styles from './LoadingSpinner.module.css'

const LoadingSpinner = () => {
    return <span data-testid="loader" className={styles.loader} />
}

export default LoadingSpinner