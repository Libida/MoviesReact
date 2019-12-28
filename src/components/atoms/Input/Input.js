import React from "react";
import propTypes from "prop-types";

export default function Input({id, type, value, placeholder, incomeClasses, text, handler}) {
    return(
        <input type={type} value={value} placeholder={placeholder} name={name || id} id={id}
               className={`form-control ${incomeClasses}`} onChange={handler} value={text}></input>
    );
}

Input.defaultProps = {
    type: "text",
    placeholder: "Type here",
    incomeClasses: ""
};