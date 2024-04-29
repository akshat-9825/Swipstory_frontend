import { createContext, useState } from "react";
import PropTypes from "prop-types";

const initialSwipStoryState = {
    showStory: false,
    setShowStory: () => {},
    storyData: {
        data: [
            {
                heading: "",
                content: "",
                imageUrl: "",
            },
        ],
        metaData: {
            likes: 0,
            category: "",
        },
    },
    setStoryData: () => {},
    data: "",
    setData: () => {},
    user: {
        name: "Akshat Dwivedi",
        email: "akshat10dwivedi@gmail.com",
    },
    setUser: () => {},
    categoryItems: [],
    setCategoryItems: () => {},
};

const SwipStoryContext = createContext(initialSwipStoryState);

const SwipStoryProvider = ({ children }) => {
    const [showStory, setShowStory] = useState(false);
    const [storyData, setStoryData] = useState({
        data: [
            {
                heading: "",
                content: "",
                imageUrl: "",
            },
        ],
        metaData: {
            likes: 0,
            category: "",
        },
    });
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
    const [user, setUser] = useState({
        name: "Akshat Dwivedi",
        email: "akshat10dwivedi@gmail.com",
    });
    const [categoryItems, setCategoryItems] = useState([]);

    const value = {
        showStory,
        setShowStory,
        storyData,
        setStoryData,
        data,
        setData,
        user,
        setUser,
        categoryItems,
        setCategoryItems,
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
