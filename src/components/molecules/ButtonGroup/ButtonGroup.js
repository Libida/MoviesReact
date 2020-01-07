import React from "react";

export default function ButtonGroup({id, groupArray, handler, selectedValue, incomeClasses=""}) {
    let buttonGroupItems = groupArray.map((btnToggle, index) => {
        const text = btnToggle.text || "";
        const textLowerCase = text.toLowerCase();
        const isChecked = (selectedValue === text);

        return (
            <label className={`btn btn-secondary ${isChecked ? "active" : ""}`}
                   key={text.replace(/\s/g, "_")}>
                <input type="radio" name={id} id={`${id}-${index}`} value={textLowerCase} defaultChecked={isChecked}/>
                {textLowerCase}
            </label>
        )
    });

    return(
        <div className={`btn-group btn-group-toggle ${incomeClasses}`} id={id} onChange={handler}>
            {buttonGroupItems}
        </div>
    );
};