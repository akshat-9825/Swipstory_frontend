import { useState } from "react";
import AuthModal from "../AuthModal";
import Button from "../Button";

import styles from "../../styles/navbar.module.css";

const buttonsData = [
    { text: "Register Now", color: "#FF7373" },
    { text: "Sign In", color: "#73ABFF" },
];

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className={styles.navbar_container}>
            <div className={styles.navbar_heading}>SwipTory</div>
            <div className={styles.registration_button_container}>
                {buttonsData.map((button, index) => (
                    <Button
                        key={index}
                        text={button.text}
                        color={button.color}
                        onClick={() => setShowModal(true)}
                    />
                ))}
            </div>
            {showModal ? <AuthModal setShowModal={setShowModal} /> : null}
        </div>
    );
};

export default Navbar;
