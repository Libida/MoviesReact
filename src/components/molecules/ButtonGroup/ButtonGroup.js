import React from "react";

function ButtonGroup ({id, groupArray, handler, selectedValue, incomeClasses=""}) {
    let buttonGroupItems = groupArray.map((btnToggle, index) => {
        const text = btnToggle.text || "";
        const value = btnToggle.value || text;
        const textLowerCase = text.toLowerCase();
        const valueLowerCase = value.toLowerCase();
        const isChecked = (selectedValue.toLowerCase() === valueLowerCase);

        return (
            <label className={`btn btn-secondary ${isChecked ? "active" : ""}`}
                   key={text.replace(/\s/g, "_")}>
                <input type="radio" name={id} id={`${id}-${index}`} value={valueLowerCase} defaultChecked={isChecked}/>
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

export default React.memo(ButtonGroup, (props1, props2) => (props1.selectedValue === props2.selectedValue));