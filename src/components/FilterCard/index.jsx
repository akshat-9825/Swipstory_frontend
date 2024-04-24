import classNames from "classnames";
import PropTypes from "prop-types";

import allImage from "../../assets/images/All.png";

import styles from "../../styles/filter-card.module.css";

const FilterCard = ({ text, selected }) => {
    return (
        <div
            className={classNames(styles.filter_card, {
                [styles.selected]: selected,
            })}
        >
            <img src={allImage} className={styles.image} />
            {text}
        </div>
    );
};

FilterCard.propTypes = {
    text: PropTypes.string,
    selected: PropTypes.bool,
};

export default FilterCard;
