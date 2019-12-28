import React from "react";
import propTypes from "prop-types";

export default function Button({type, text, incomeClasses, isDisabled}) {
    return(
        <button type={type} className={`btn ${incomeClasses}`} disabled={isDisabled}>{text}</button>
    );
}

Button.defaultProps = {
    type: "button"
};