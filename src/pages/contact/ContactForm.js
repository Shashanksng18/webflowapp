import React, { useState } from "react";
import CustomForm from "../../component/Input/CustomForm";
import useInput from "../../hooks/useInput";
import Button from "../../component/Button/Button";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {

    const [message, setMessage] = useState('');
    const {
        value: name,
        isValid: nameIsValid,
        hasError: nameHasError,
        resetHandler: nameResetHandler,
        valueChangeHandler: nameChangeHandler,
        onBlurHandler: nameBlurHandler,
    } = useInput((value) => value.trim() != '');

    const {
        value: contact,
        isValid: contactIsValid,
        hasError: contactHasError,
        resetHandler: contactResetHandler,
        valueChangeHandler: contactChangeHandler,
        onBlurHandler: contactBlurHandler,
    } = useInput((value) => value.length==10);


    const {
        value: email,
        isValid: emailIsValid,
        hasError: emailHasError,
        resetHandler: emailResetHandler,
        valueChangeHandler: emailChangeHandler,
        onBlurHandler: emailBlurHandler,
    } = useInput((value) => value.includes('@'));

    // const {
    //     value: text,
    //     isValid: textIsValid,
    //     hasError: textHasError,
    //     resetHandler: textResetHandler,
    //     valueChangeHandler: textChangeHandler,
    //     onBlurHandler: textBlurHandler,
    // } = useInput((value) => value.trim().length >= 20);

    let formIsValid = false;

    if(nameIsValid && contactIsValid && emailIsValid){
        formIsValid = true;
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("Submitting");
        toast('Thanks for your suggestion',{
            type: 'success',
            pauseOnHover: true,
            autoClose: 5000,
            theme: 'light',
            position: 'top-right'
        })
        nameResetHandler();
        emailResetHandler();
        contactResetHandler();
        setMessage('');
        
    }

    return(
        <div className=" absolute py-[50px] px-5 mx-8 my-400 ">
            <ToastContainer/>
           <div className="max-w-[600px] m-auto mb-[20px]">
                <h2 className="text-[32px] mb-[10px] text-[#333] font-bold capitalize text-left" style={{fontWeight: 'bold'}}>contact</h2>
               <p className="text-[#333] text-[18px] font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat..</p>
           </div>
           <form className="max-w-[600px] m-auto" onSubmit={(e)=>submitHandler(e)}>
              <CustomForm
              label=""
              type="text"
              placeholder="name"
              value={name}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              className={`border-[1px] border-solid border-[#ddd] pl-[18px] py-[8px] px-[12px] text-[14px] mb-4 pt-[10px] pb-3 w-full rounded-3xl placeholder:capitalize text-[#72bdbd] focus-within:border-[#00ab6b] outline-none `}    
              />
              {nameHasError && <p className="relative bottom-2 text-red-600 flex ml-4 capitalize text-[14px]">please enter a valid name</p>}
            <CustomForm
              label=""
              type="number"
              placeholder="contact number"
              value={contact}
              onChange={contactChangeHandler}
              onBlur={contactBlurHandler}
              className={`border-[1px] border-solid border-[#ddd] pl-[18px] py-[8px] px-[12px] text-[14px] mb-4 pt-[10px] pb-3 w-full rounded-3xl placeholder:capitalize text-[#72bdbd] focus-within:border-[#00ab6b] outline-none`}
             
              />
              {contactHasError && <p  className="relative bottom-2 text-red-600 flex ml-4 capitalize text-[14px]">please enter a 10 digit phone number</p>}

             <CustomForm
              label=""
              type="email"
              placeholder="enter your email address"
              value={email}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              className={`border-[1px] border-solid border-[#ddd] pl-[18px] py-[8px] px-[12px] text-[14px] mb-4 pt-[10px] pb-3 w-full rounded-3xl placeholder:capitalize text-[#72bdbd] focus-within:border-[#00ab6b] outline-none`}
              />
              {emailHasError && <p  className="relative bottom-2 text-red-600 flex ml-4 capitalize text-[14px]">@ required</p>}

           
              <textarea placeholder="tell me your thoughts." className="w-full border-[1px] border-solid border-[#ddd] rounded-[20px] text-[#72bdbd] text-[14px] mb-2.5 py-[8px] px-[12px] focus-within:border-[#72bdbd] outline-none placeholder:capitalize h-20" 
               value={message}
               onChange={(e) => setMessage(e.target.value)}
            //    onChange={textChangeHandler}
            //    onBlur={textBlurHandler}
              >

              </textarea>

            <div className="flex items-end justify-end">
                 <Button className={`bg-[#00ab6b] text-white text-[16px] px-12 rounded-[20px] text-center capitalize py-[9px]`} disabled={!formIsValid}>submit</Button>
            </div>

           </form>
        </div>
    )
}

export default ContactForm;