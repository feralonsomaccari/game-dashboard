import React from 'react'
import styles from './Input.module.css'

const Input = ({ placeholder, onChangeHandler }) => (
    <input className={styles.input} placeholder={placeholder} onChange={onChangeHandler} data-testid="input" aria-label="filter table data" />
)
export default Input