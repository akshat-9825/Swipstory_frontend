import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { GoEye } from "react-icons/go";
import cn from "classnames";
import PropTypes from "prop-types";
import Button from "../Button";
import Modal from "../Modal";

import styles from "../../styles/auth-modal.module.css";

const inputFields = [
    {
        label: "Username",
        type: "text",
        name: "username",
        placeholder: "Enter username",
    },
    {
        label: "Password",
        type: "password",
        name: "password",
        placeholder: "Enter password",
    },
];

const AuthModal = ({ setShowModal, type }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [error, setError] = useState("");

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formData.username.trim().length) {
            setError("Please enter Valid Username");
        } else if (!formData.password.trim().length) {
            setError("Please enter Password");
        } else {
            setError("");
            console.log("Form Data: ", formData);
        }
    };

    return (
        <Modal className={styles.container}>
            <IoCloseCircleOutline
                className={styles.close_button}
                onClick={() => setShowModal(false)}
            />
            <div className={styles.content}>
                <div className={styles.heading}>
                    {type === "register" ? "Register" : "Login"} to SwipTory
                </div>
                <div className={styles.form_container}>
                    <div className={styles.form}>
                        {inputFields.map((field, index) => (
                            <div className={styles.input_container} key={index}>
                                <div className={styles.input_label}>
                                    {field.label}
                                </div>
                                <input
                                    autoComplete="on"
                                    className={cn(
                                        styles.input,
                                        field.name === "password" &&
                                            styles.password_input
                                    )}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    name={field.name}
                                    onChange={(event) => handleChange(event)}
                                />
                                {field.name === "password" && (
                                    <GoEye
                                        className={styles.show_password}
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                    {error.length > 0 ? (
                        <div className={styles.error}>{error}</div>
                    ) : null}
                    <Button
                        text={type === "register" ? "Register" : "Login"}
                        className={styles.button}
                        color="#73ABFF"
                        onClick={handleSubmit}
                    />
                </div>
            </div>
        </Modal>
    );
};

AuthModal.propTypes = {
    setShowModal: PropTypes.func.isRequired,
    type: PropTypes.oneOf(["register", "login"]),
};

export default AuthModal;
