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

export const Button = React.memo(ButtonFunc, (props1, props2) => ((props1.text === props2.text) && (props1.isDisabled === props2.isDisabled)));;