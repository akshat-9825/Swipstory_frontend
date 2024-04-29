import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { SwipStoryContext } from "../../context";
import StoryCard from "../Story/StoryCard";

import styles from "../../styles/category.module.css";
import Button from "../Button";

const Category = ({ text }) => {
    const { data } = useContext(SwipStoryContext);

    const [limit, setLimit] = useState(4);

    const handleButtonClick = () => {
        setLimit(data.length);
    };

    return (
        <div className={styles.category_container}>
            <div className={styles.category_heading}>
                Top Stories about {text}
            </div>
            <div className={styles.stories_container}>
                {data.length === 0
                    ? "No stories Available"
                    : data.slice(0, limit).map((item, index) => {
                          return (
                              <StoryCard
                                  key={index}
                                  heading={item.heading}
                                  content={item.content}
                                  imageUrl={item.imageUrl}
                              />
                          );
                      })}
            </div>
            {data.length > 4 && limit === 4 ? (
                <Button
                    onClick={handleButtonClick}
                    className={styles.button}
                    color="#FF7373"
                >
                    See More
                </Button>
            ) : null}
        </div>
    );
};

Category.propTypes = {
    text: PropTypes.string,
};

export default Category;
