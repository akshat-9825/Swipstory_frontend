import PropTypes from "prop-types";

import styles from "../../styles/button.module.css";

const Button = ({ text, color }) => {
    return (
        <button
            className={styles.button}
            style={{ backgroundColor: `${color}` }}
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
};

export default Button;
