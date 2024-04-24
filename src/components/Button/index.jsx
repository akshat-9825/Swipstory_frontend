import cn from "classnames";
import PropTypes from "prop-types";

import styles from "../../styles/button.module.css";

const Button = ({ text, color, onClick, className }) => {
    return (
        <button
            className={cn(styles.button, className)}
            style={{ backgroundColor: `${color}` }}
            onClick={onClick ? onClick : () => {}}
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string || null,
    onClick: PropTypes.func || null,
    className: PropTypes.string || null,
};

export default Button;
