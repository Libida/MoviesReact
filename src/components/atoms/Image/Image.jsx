import React from "react";
import propTypes from "prop-types";
import {NO_IMG_URL} from "../../../constants/strings";
import "./Image.scss";

export function Image({src, alt, title, incomeClasses="", incomeWrapClasses=""}) {
    const isNoImg = (src === NO_IMG_URL);

    return (
        <span className={`img-wrap ${incomeWrapClasses}`}>
            <img src={src || NO_IMG_URL} alt={alt || title} title={title} className={`img ${isNoImg ? "img--no-img" : ""} ${incomeClasses}`}/>
        </span>
    );
};

Image.propTypes = {
    src: propTypes.string,
    classes: propTypes.string
};

Image.defaultProps = {
    src: NO_IMG_URL
};