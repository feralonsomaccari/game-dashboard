import styles from "./Button.module.css";

const Button = ({ text, clickHandler, disabled = false, extraProps }) => {
  return (
    <button {...extraProps} className={`${styles.button} ${disabled && styles.disabled}`} onClick={clickHandler} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
