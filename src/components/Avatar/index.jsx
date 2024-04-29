import cn from "classnames";
import PropTypes from "prop-types";
import styles from "../../styles/avatar.module.css";

const Avatar = ({ text, className }) => {
    const capitalizedText = text.charAt(0).toUpperCase();

    return (
        <div className={cn(styles.avatar_container, className)}>
            {capitalizedText}
        </div>
    );
};

Avatar.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Avatar;
