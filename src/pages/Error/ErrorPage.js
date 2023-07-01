import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    const {data} = error;
    let message = '';

    if(error.status === 404){
        message = data.message
    }

    console.log(error)
    return(
        <div className="flex item-center justify-center flex-col h-screen w-full ">
         <h1 className="text-[2rem] font-bold text-center my-5">Page not found</h1>
         <p className="text-center mb-5">{message}</p>
        </div>
    )
}

export default ErrorPage;