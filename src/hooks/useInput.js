import React, { useState } from "react";

const useInput = (ValidateValue) => {

    const [value, setValue] = useState("");
    const [isTouch, setIsTouch] = useState(false);

    const isValid = ValidateValue(value);
    const hasError = !isValid && isTouch;

    const valueChangeHandler = (e) => {
        setValue(e.target.value);
    }
    const resetHandler = () => {
        setValue('');
        setIsTouch(false);
    }

    const onBlurHandler = () => {
        setIsTouch(true);
    }
    return{
        value,
        isValid,
        hasError,
        valueChangeHandler,
        resetHandler,
        onBlurHandler,
    }
}

export default useInput;

