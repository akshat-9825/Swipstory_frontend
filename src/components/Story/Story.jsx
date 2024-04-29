import { useContext } from "react";
import classNames from "classnames";
import { BsSend } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { SwipStoryContext } from "../../context";
import backgroundImg from "../../assets/images/DummyStoryCard.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/story.module.css";

const Story = () => {
    const { storyData, setShowStory, setStoryData } =
        useContext(SwipStoryContext);

    const Arrow = ({ className, onClick, direction, icon }) => {
        return (
            <div
                className={classNames(
                    className,
                    styles.arrow,
                    direction === "next" ? styles.next_arrow : styles.prev_arrow
                )}
                onClick={onClick}
            >
                {icon}
            </div>
        );
    };

    Arrow.propTypes = {
        className: PropTypes.string,
        onClick: PropTypes.func,
        direction: PropTypes.oneOf(["next", "prev"]).isRequired,
        icon: PropTypes.node.isRequired,
    };

    const NextArrow = (props) => (
        <Arrow
            {...props}
            direction="next"
            icon={<GoChevronRight className={styles.icon} />}
        />
    );

    const PrevArrow = (props) => (
        <Arrow
            {...props}
            direction="prev"
            icon={<GoChevronLeft className={styles.icon} />}
        />
    );

    const settings = {
        dots: true,
        customPaging: function () {
            return (
                <a className={styles.full_width}>
                    <div className={styles.custom_dots}></div>
                </a>
            );
        },
        dotsClass: classNames(styles.dots),
        infinite: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const handleClose = () => {
        setStoryData({});
        setShowStory(false);
    };

    const renderSlide = (slide) => (
        <div className={styles.slide}>
            <img
                src={slide.imageUrl || backgroundImg}
                alt="story_image"
                className={styles.slide_background_image}
            />
            <div className={styles.tools}>
                <IoMdClose
                    className={styles.tool_icons}
                    onClick={handleClose}
                />
                <BsSend className={styles.tool_icons} />
            </div>
            <div className={styles.text}>
                <div className={styles.slide_heading}>
                    {slide.heading || "Heading comes here"}
                </div>
                <div className={styles.slide_text}>
                    {slide.content ||
                        "Inspirational designs, illustrations, and graphic elements from the world’s best designers."}
                </div>
                <div className={styles.story_features}>
                    <FaBookmark className={styles.bookmark_icon} />
                    <div className={styles.like_container}>
                        <FaHeart className={styles.like_icon} />
                        {storyData.metaData.likes}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className={styles.backdrop}>
            <div className={styles.story_container}>
                {storyData.data.length > 1 ? (
                    <Slider {...settings}>
                        {storyData.data.map((slide, index) => (
                            <div key={index}>{renderSlide(slide)}</div>
                        ))}
                    </Slider>
                ) : (
                    <div>{renderSlide(storyData.data[0])}</div>
                )}
            </div>
        </div>
    );
};

export default Story;
