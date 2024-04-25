import { useState } from "react";
import AuthModal from "../AuthModal";
import Button from "../Button";

import styles from "../../styles/navbar.module.css";

const buttonsData = [
    { text: "Register Now", color: "#FF7373", type: "register" },
    { text: "Sign In", color: "#73ABFF", type: "login" },
];

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [type, setType] = useState("");

    return (
        <div className={styles.navbar_container}>
            <div className={styles.navbar_heading}>SwipTory</div>
            <div className={styles.registration_button_container}>
                {buttonsData.map((button, index) => (
                    <Button
                        key={index}
                        color={button.color}
                        onClick={() => {
                            setShowModal(true);
                            setType(button.type);
                        }}
                    >
                        {button.text}
                    </Button>
                ))}
            </div>
            {showModal ? (
                <AuthModal type={type} setShowModal={setShowModal} />
            ) : null}
        </div>
    );
};

export default Navbar;
