import React from "react";

const CustomForm = (props) => {
    return(
        <div className={`${props.mainClass}`}>
            <label className={`${props.labelClass}`}>{props.label}</label>
            <input type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            className={`${props.className}`}
            />
        </div>
    )
}

export default CustomForm;