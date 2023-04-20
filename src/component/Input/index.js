import React from 'react'
import styles from './Input.module.css'

const Input = ({ placeholder, onChangeHandler, ariaLabel, id = '' }) => (
    <input className={styles.input} placeholder={placeholder} onChange={onChangeHandler} data-testid="input" aria-label={ariaLabel} id={id} />
)
export default Input