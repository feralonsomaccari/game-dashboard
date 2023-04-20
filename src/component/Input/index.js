import React from 'react'
import styles from './Input.module.css'

const Input = ({ placeholder, onChangeHandler, extraProps = {} }) => (
    <input
        className={styles.input}
        placeholder={placeholder}
        onChange={onChangeHandler}
        {...extraProps}
        data-testid="input"/>
)
export default Input