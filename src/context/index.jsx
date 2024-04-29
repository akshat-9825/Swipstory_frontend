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
    data: "",
    setData: () => {},
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
    const [data, setData] = useState([
        {
            heading: "Heading comes here",
            content: `Inspirational designs, illustrations, and graphic elements from the world&apos;s best designers.`,
            imageUrl: "",
        },
        {
            heading: "Heading comes here",
            content: `Inspirational designs, illustrations, and graphic elements from the world&apos;s best designers.`,
            imageUrl: "",
        },
        {
            heading: "Heading comes here",
            content: `Inspirational designs, illustrations, and graphic elements from the world&apos;s best designers.`,
            imageUrl: "",
        },
        {
            heading: "Heading comes here",
            content: `Inspirational designs, illustrations, and graphic elements from the world&apos;s best designers.`,
            imageUrl: "",
        },
        {
            heading: "Heading comes here",
            content: `Inspirational designs, illustrations, and graphic elements from the world&apos;s best designers.`,
            imageUrl: "",
        },
    ]);

    const value = {
        showStory,
        setShowStory,
        storyData,
        setStoryData,
        data,
        setData,
    };

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
