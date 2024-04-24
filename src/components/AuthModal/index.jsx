import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { GoEye } from "react-icons/go";
import cn from "classnames";
import PropTypes from "prop-types";
import Button from "../Button";
import Modal from "../Modal";

import styles from "../../styles/auth-modal.module.css";

const AuthModal = ({ setShowModal }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Modal className={styles.container}>
            <IoCloseCircleOutline
                className={styles.close_button}
                onClick={() => setShowModal(false)}
            />
            <div className={styles.content}>
                <div className={styles.heading}>Register to SwipTory</div>
                <div className={styles.form_container}>
                    <div className={styles.form}>
                        <div className={styles.input_container}>
                            <div className={styles.input_label}>Username</div>
                            <input
                                className={styles.input}
                                placeholder="Enter username"
                            ></input>
                        </div>
                        <div className={styles.input_container}>
                            <div className={styles.input_label}>Password</div>
                            <input
                                className={cn(
                                    styles.input,
                                    styles.password_input
                                )}
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter password"
                            ></input>
                            <GoEye
                                className={styles.show_password}
                                onClick={() => setShowPassword(!showPassword)}
                            />
                        </div>
                    </div>
                    <Button
                        text="Register"
                        className={styles.button}
                        color="#73ABFF"
                    />
                </div>
            </div>
        </Modal>
    );
};

AuthModal.propTypes = {
    setShowModal: PropTypes.func.isRequired,
};

export default AuthModal;
