import { useContext, useState } from "react";
import { SwipStoryContext } from "../../context";
import { FaBookmark } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { isEmpty } from "../../utils";
import Avatar from "../Avatar";
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
    const { user } = useContext(SwipStoryContext);

    return (
        <div className={styles.navbar_container}>
            <div className={styles.navbar_heading}>SwipTory</div>
            {isEmpty(user) ? (
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
            ) : (
                <div className={styles.logged_in_button_container}>
                    <Button color="#FF7373" className={styles.bookmark_btn}>
                        <FaBookmark className={styles.bookmark_icon} />
                        Bookmarks
                    </Button>
                    <Button color="#FF7373" className={styles.add_story_btn}>
                        Add Story
                    </Button>
                    <Avatar text={user.name || ""} />
                    <FiMenu className={styles.menu_icon} />
                </div>
            )}
            {showModal ? (
                <AuthModal type={type} setShowModal={setShowModal} />
            ) : null}
        </div>
    );
};

export default Navbar;
