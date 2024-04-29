import { useContext } from "react";
import { SwipStoryContext } from "../../context";
import PropTypes from "prop-types";
import DummyStoryImage from "../../assets/images/DummyStoryCard.png";

import styles from "../../styles/story-card.module.css";

const StoryCard = ({ heading, content, imageUrl }) => {
    const { setShowStory, setStoryData } = useContext(SwipStoryContext);

    const handleOnClick = () => {
        setStoryData({
            data: [
                {
                    heading: "Heading",
                    content: "Content",
                    imageUrl: "",
                },
                {
                    heading: "Heading",
                    content: "Content",
                    imageUrl: "",
                },
            ],
            metaData: {
                likes: 0,
            },
        });
        setShowStory(true);
    };

    return (
        <div className={styles.story_card_container} onClick={handleOnClick}>
            <img
                src={imageUrl ? imageUrl : DummyStoryImage}
                alt="Dummy Story Card Image"
                className={styles.story_card_image}
            />
            <div className={styles.story_card_text}>
                <div className={styles.story_card_heading}>{heading}</div>
                <div className={styles.story_card_subheading}>{content}</div>
            </div>
        </div>
    );
};

StoryCard.propTypes = {
    heading: PropTypes.string,
    content: PropTypes.string,
    imageUrl: PropTypes.string,
};

export default StoryCard;
