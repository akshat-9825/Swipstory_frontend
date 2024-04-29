import { useContext, useEffect, useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
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

    const renderSlideCards = () => {
        return newStory.data.map((_, idx) => (
            <div
                className={cn(styles.slide_card, {
                    [styles.active_slide]: idx === index,
                })}
                key={idx}
            >
                Slide {idx + 1}
                {idx > 2 && (
                    <IoCloseCircleOutline
                        className={styles.delete_slide}
                        onClick={() => handleDeleteSlide(idx)}
                    />
                )}
            </div>
        ));
    };

    const renderCategoryItems = () => {
        return (
            dropDown && (
                <div className={styles.category_items}>
                    {categoryItems.map((item, idx) => {
                        return (
                            <div
                                key={idx}
                                className="cursor"
                                onClick={() => handleSetCategory(item)}
                            >
                                {item}
                            </div>
                        );
                    })}
                </div>
            )
        );
    };

    const formFields = [
        {
            name: "heading",
            label: "Heading :",
            placeholder: "Your heading",
            type: "input",
        },
        {
            name: "content",
            label: "Description :",
            placeholder: "Story Description",
            type: "textarea",
            className: styles.description_input,
        },
        {
            name: "imageUrl",
            label: "Image :",
            placeholder: "Add image url",
            type: "input",
        },
        {
            name: "category",
            label: "Category :",
            placeholder: "Select category",
            type: "category",
            className: cn(styles.input, styles.category_btn),
        },
    ];

    const renderFormItems = () => {
        return formFields.map((field, idx) => (
            <div className={styles.form_item} key={idx}>
                <div className={styles.input_label}>{field.label}</div>
                {field.type === "textarea" ? (
                    <textarea
                        className={cn(styles.input, field.className)}
                        name={field.name}
                        placeholder={field.placeholder}
                        onChange={handleChange}
                        value={newStory.data[index]?.[field.name]}
                    />
                ) : field.type === "category" ? (
                    <div className={field.className}>
                        {newStory.metaData.category || field.placeholder}
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
                        {renderCategoryItems()}
                    </div>
                ) : (
                    <input
                        className={styles.input}
                        type="text"
                        name={field.name}
                        placeholder={field.placeholder}
                        onChange={handleChange}
                        value={newStory.data[index]?.[field.name]}
                    />
                )}
            </div>
        ));
    };

    const buttonConfigs = [
        {
            label: "Previous",
            onClick: () => handleNavBtn("prev"),
            color: "#7EFF73",
        },
        {
            label: "Next",
            onClick: () => handleNavBtn("next"),
            color: "#73ABFF",
        },
        {
            label: "Post",
            onClick: handleSubmit,
            className: styles.post_button,
            color: "#FF7373",
        },
    ];

    const renderButtons = () => {
        return buttonConfigs.map((button, idx) => (
            <Button
                key={idx}
                className={cn(styles.button, button.className)}
                onClick={button.onClick}
                color={button.color}
            >
                {button.label}
            </Button>
        ));
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
                    {renderSlideCards()}
                    {newStory.data.length < 6 && (
                        <div
                            className={cn(
                                styles.slide_card,
                                styles.add_slide_card
                            )}
                            onClick={handleAddSlide}
                        >
                            Add +
                        </div>
                    )}
                </div>
                <div className={styles.slide_form}>{renderFormItems()}</div>
            </form>
            <div className={styles.form_buttons}>
                <div className={styles.navigation_btn}>{renderButtons()}</div>
            </div>
        </Modal>
    );
};

AddStoryModal.propTypes = {
    setShowModal: PropTypes.func.isRequired,
};

export default AddStoryModal;
