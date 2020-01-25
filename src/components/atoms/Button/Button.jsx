import React from "react";
import propTypes from "prop-types";
import "./Button.scss";

function ButtonFunc({type, text, incomeClasses, isDisabled}) {
    return(
        <button type={type} className={`btn ${incomeClasses}`} disabled={isDisabled}>{text}</button>
    );
}

ButtonFunc.defaultProps = {
    type: "button"
};

export const Button = React.memo(ButtonFunc);