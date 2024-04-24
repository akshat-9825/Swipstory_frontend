import { useState } from "react";
import classNames from "classnames";
import FilterCard from "../components/FilterCard";
import Navbar from "../components/Navbar";

import styles from "../styles/home-page.module.css";

const HomePage = () => {
    const filterTexts = ["All", "Medical", "Fruits", "World", "India"];
    const [selectedText, setSelectedText] = useState([]);

    const handleOnClick = (index) => {
        if (selectedText.includes(index)) {
            setSelectedText(selectedText.filter((idx) => idx !== index));
        } else {
            setSelectedText([...selectedText, index]);
        }
        console.log(selectedText);
    };

    return (
        <div className={styles.home_page}>
            <Navbar />
            <div className={styles.homepage_content}>
                <div
                    className={classNames(
                        styles.filter_cards,
                        "hide_scrollbar"
                    )}
                >
                    {filterTexts.map((text, index) => (
                        <div key={index} onClick={() => handleOnClick(index)}>
                            <FilterCard
                                text={text}
                                selected={selectedText.includes(index)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
