import { useContext, useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import cn from "classnames";
import PropTypes from "prop-types";
import { SwipStoryContext } from "../../context";
import Modal from "../Modal";
import Button from "../../components/Button";

import styles from "../../styles/add-story-modal.module.css";

const AddStoryModal = ({ setShowModal }) => {
    const defaultDataItem = { heading: "", content: "", imageUrl: "" };
    const initialData = Array.from({ length: 3 }, () => ({
        ...defaultDataItem,
    }));

    const [index, setIndex] = useState(0);
    const [dropDown, setDropDown] = useState(false);
    const { categoryItems, setCategoryItems } = useContext(SwipStoryContext);
    useEffect(() => {
        // to delete
        setCategoryItems([
            "food",
            "health and fitness",
            "travel",
            "movies",
            "education",
        ]);
    }, [setCategoryItems]);
    const [newStory, setNewStory] = useState({
        data: initialData,
        metaData: {
            likes: 0,
            category: "",
        },
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewStory((prevState) => ({
            ...prevState,
            data: prevState.data.map((item, i) =>
                i === index ? { ...item, [name]: value } : item
            ),
        }));
    };

    const handleSubmit = () => {
        console.log(newStory);
        setShowModal(false);
    };

    const handleDeleteSlide = (idxToDelete) => {
        setNewStory((prev) => ({
            ...prev,
            data: prev.data.filter((_, i) => i !== idxToDelete),
        }));
        if (idxToDelete === index) {
            setIndex(index - 1);
        }
    };

    const handleAddSlide = () => {
        setNewStory((prev) => ({
            ...prev,
            data: [...prev.data, defaultDataItem],
        }));
    };

    const handleDropDown = () => {
        setDropDown(!dropDown);
    };

    const handleSetCategory = (newCategory) => {
        setNewStory((prevState) => ({
            ...prevState,
            metaData: {
                ...prevState.metaData,
                category: newCategory,
            },
        }));
        setDropDown(false);
    };

    const handleNavBtn = (type) => {
        if (type === "next") {
            setIndex(Math.min(index + 1, newStory.data.length - 1));
        } else {
            setIndex(Math.max(index - 1, 0));
        }
    };

    return (
        <Modal
            setShowModal={setShowModal}
            className={styles.add_story_modal_container}
        >
            <IoCloseCircleOutline
                className={styles.close_button}
                onClick={() => setShowModal(false)}
            />
            <form className={styles.form_container}>
                <div className={styles.slide_list}>
                    {newStory.data &&
                        newStory.data.map((_, idx) => {
                            return (
                                <div
                                    className={cn(styles.slide_card, {
                                        [styles.active_slide]: idx === index,
                                    })}
                                    key={idx}
                                >
                                    Slide {idx + 1}
                                    {idx > 2 ? (
                                        <IoCloseCircleOutline
                                            className={styles.delete_slide}
                                            onClick={() =>
                                                handleDeleteSlide(idx)
                                            }
                                        />
                                    ) : null}
                                </div>
                            );
                        })}
                    {newStory.data.length < 6 ? (
                        <div
                            className={cn(
                                styles.slide_card,
                                styles.add_slide_card
                            )}
                            onClick={handleAddSlide}
                        >
                            Add +
                        </div>
                    ) : null}
                </div>
                <div className={styles.slide_form}>
                    <div className={styles.form_item}>
                        <div className={styles.input_label}>Heading : </div>
                        <input
                            className={styles.input}
                            name="heading"
                            placeholder="Your heading"
                            onChange={handleChange}
                            value={
                                newStory.data[index] &&
                                newStory.data[index].heading
                            }
                        />
                    </div>
                    <div className={styles.form_item}>
                        <div className={styles.input_label}>Description : </div>
                        <textarea
                            className={cn(
                                styles.input,
                                styles.description_input
                            )}
                            name="content"
                            placeholder="Story Description"
                            onChange={handleChange}
                            value={
                                newStory.data[index] &&
                                newStory.data[index].content
                            }
                        />
                    </div>
                    <div className={styles.form_item}>
                        <div className={styles.input_label}>Image : </div>
                        <input
                            className={styles.input}
                            name="imageUrl"
                            placeholder="Add image url"
                            onChange={handleChange}
                            value={
                                newStory.data[index] &&
                                newStory.data[index].imageUrl
                            }
                        />
                    </div>
                    <div className={styles.form_item}>
                        <div className={styles.input_label}>Heading : </div>
                        <div className={cn(styles.input, styles.category_btn)}>
                            {newStory.metaData.category || "Select category"}
                            {!dropDown ? (
                                <FaChevronDown
                                    className={styles.chevron}
                                    onClick={handleDropDown}
                                />
                            ) : (
                                <FaChevronUp
                                    className={styles.chevron}
                                    onClick={handleDropDown}
                                />
                            )}
                            {dropDown ? (
                                <div className={styles.category_items}>
                                    {categoryItems.map((item, idx) => {
                                        return (
                                            <div
                                                key={idx}
                                                className="cursor"
                                                onClick={() =>
                                                    handleSetCategory(item)
                                                }
                                            >
                                                {item}
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </form>
            <div className={styles.form_buttons}>
                <div className={styles.navigation_btn}>
                    <Button
                        className={styles.button}
                        onClick={() => handleNavBtn("prev")}
                        color="#7EFF73"
                    >
                        Previous
                    </Button>
                    <Button
                        className={styles.button}
                        onClick={() => handleNavBtn("next")}
                        color="#73ABFF"
                    >
                        Next
                    </Button>
                </div>
                <Button
                    className={styles.button}
                    color="#FF7373"
                    onClick={handleSubmit}
                >
                    Post
                </Button>
            </div>
        </Modal>
    );
};

AddStoryModal.propTypes = {
    setShowModal: PropTypes.func.isRequired,
};

export default AddStoryModal;
