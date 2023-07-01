import React from "react";

const Button = (props) => {

    const className = props.className;


    return(
        <button className={`${props.className}`} onClick={props.onClick} disabled={props.disabled}>
            {props.children}
        </button>
    )
}

export default Button;