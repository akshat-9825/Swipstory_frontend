import { useContext, useState } from "react";
import classNames from "classnames";
import { SwipStoryContext } from "../context";
import Category from "../components/Category";
import FilterCard from "../components/FilterCard";
import Navbar from "../components/Navbar";
import Story from "../components/Story/Story";

import styles from "../styles/home-page.module.css";

const HomePage = () => {
    const filterTexts = ["All", "Medical", "Fruits", "World", "India"];
    const [selectedText, setSelectedText] = useState([]);
    const { showStory, storyData } = useContext(SwipStoryContext);

    const handleOnClick = (text) => {
        if (selectedText.includes(text)) {
            setSelectedText(
                selectedText.filter((currText) => currText !== text)
            );
        } else {
            setSelectedText([...selectedText, text]);
        }
    };

    return (
        <div className={classNames(styles.home_page)}>
            <Navbar />
            {showStory && <Story data={storyData} />}
            <div className={styles.homepage_content}>
                <div
                    className={classNames(
                        styles.filter_cards,
                        "hide_scrollbar"
                    )}
                >
                    {filterTexts.map((text, index) => (
                        <div key={index} onClick={() => handleOnClick(text)}>
                            <FilterCard
                                text={text}
                                selected={selectedText.includes(text)}
                            />
                        </div>
                    ))}
                </div>
                <div className={styles.categories}>
                    {selectedText.map((text, index) => {
                        return <Category key={index} text={text} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
