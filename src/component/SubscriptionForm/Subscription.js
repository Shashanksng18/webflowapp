import React from "react";
import useInput from "../../hooks/useInput";
import { ToastContainer , toast} from "react-toastify";
import CustomForm from "../Input/CustomForm";
import Button from "../Button/Button";

const Subscription = () => {
    const {
        value: email,
        isValid: emailIsValid,
        hasError: emailHasError,
        resetHandler: emailResetHandler,
        valueChangeHandler: emailChangeHandler,
        onBlurHandler: emailBlurHandler,
    } = useInput((value) => value.includes('@'));

    const submitHandler = (e) => {
        e.preventDefault()
        toast('Thanks you for subscription.',{
            type: 'success',
            pauseOnHover: true,
            autoClose: 5000,
            theme: 'light',
            position: 'top-right'
        })
        emailResetHandler();
        
    }

    let formIsValid = false;

    if(emailIsValid){
        formIsValid = true;
    }
    return(
        <>
        <div className=" pt-[30px] pb-[25px] bg-[#f7f7f7] w-[100%]">
        <ToastContainer/>
       <form className="w-[640px] max-w-[90%] m-auto relative md:flex-col flex items-end justify-between" onSubmit={submitHandler}>
           <CustomForm label="Lets become friends? join my mailing list."
           placeholder="enter your email address"
           className={`border-[1px] border-solid border-[#ddd] pl-[18px] py-[8px] px-[12px] text-[14px] pt-[10px] pb-3  rounded-3xl placeholder:capitalize text-[#00ab6b] focus-within:border-[#72bdbd]  outline-none  w-[100%]`}
           labelClass={`font-bold text-[16px] my-[16px]`}
           mainClass={`flex item-center justify-center flex-col  px-[20px] w-[75%] md:m-auto`}
           value={email}
           onChange={emailChangeHandler}
           onBlur={emailBlurHandler}
           />
           {emailHasError && <p className="absolute -bottom-6 left-6 text-red-600 text-[14px] capitalize">@ required</p>}
           <Button className="capitalize bg-[#00ab6b] px-[26px] py-2 text-[16px] rounded-lg text-white md:my-4 md:w-[60%] md:m-auto" disabled={!formIsValid}>join now</Button>
        </form>
       </div>
        </>
    )
}

export default Subscription;