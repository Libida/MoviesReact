import React from "react";
import "./TextHighlightValue.scss";

export default function TextHighlightValue(props) {
    const {value, afterValue, className = ""} = props;

    return (
        <span className={`text-highlight-value ${className}`}>
            <span className="text-highlight-value__value">
                {value}
            </span>
            <span className="text-highlight-value__after-value">
                {afterValue}
            </span>
        </span>
    );
}