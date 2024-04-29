import { createContext, useState } from "react";
import PropTypes from "prop-types";

const initialSwipStoryState = {
    showStory: false,
    setShowStory: () => {},
    storyData: [
        {
            heading: "",
            content: "",
            imageUrl: "",
            likes: 0,
        },
    ],
    setStoryData: () => {},
};

const SwipStoryContext = createContext(initialSwipStoryState);

const SwipStoryProvider = ({ children }) => {
    const [showStory, setShowStory] = useState(false);
    const [storyData, setStoryData] = useState([
        {
            heading: "",
            content: "",
            imageUrl: "",
            likes: 0,
        },
    ]);

    const value = { showStory, setShowStory, storyData, setStoryData };

    return (
        <SwipStoryContext.Provider value={value}>
            {children}
        </SwipStoryContext.Provider>
    );
};

SwipStoryProvider.propTypes = {
    children: PropTypes.node,
};

export { SwipStoryContext, SwipStoryProvider };
