import React from "react";
import propTypes from "prop-types";
import {NO_IMG_URL} from "../../../constants/strings";

export default function Image({src, alt, title, incomeClasses="", incomeWrapClasses=""}) {
    const isNoImg = (src === NO_IMG_URL);
    let baseClasses = "img";

    if (isNoImg) {
        baseClasses+= " img--no-img";
    }

    return (
        <span className={`img-wrap ${incomeWrapClasses}`}>
            <img src={src || NO_IMG_URL} alt={alt || title} title={title} className={`${baseClasses} ${incomeClasses}`}/>
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