import React from "react";
import propTypes from "prop-types";
import "./Input.scss";

function Input({id, type, placeholder, incomeClasses, text, handler}) {
    return(
        <input type={type} placeholder={placeholder} name={name || id} id={id}
               className={`form-control ${incomeClasses}`} onChange={handler} value={text}></input>
    );
}

Input.defaultProps = {
    type: "text",
    placeholder: "Type here",
    incomeClasses: ""
};

export default React.memo(Input, (props1, props2) => ((props1.text === props2.text)));