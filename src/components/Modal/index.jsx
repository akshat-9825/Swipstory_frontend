import cn from "classnames";
import PropTypes from "prop-types";

import styles from "../../styles/modal.module.css";

const Modal = ({ className, children }) => {
    return (
        <div className={cn(styles.modal_overlay)}>
            <div className={cn(styles.modal_container, className)}>
                {children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

export default Modal;
