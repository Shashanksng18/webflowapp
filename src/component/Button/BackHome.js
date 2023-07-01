import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const BackHome = (props) => {

    const navigate = useNavigate();

    const backhandler = () => {
        navigate('/');
    }
    
    return(
        <div className="text-center w-full my-6">
            <Button onClick={()=>backhandler()} className="rounded-[64px] capitalize py-[9px] px-[26px] text-[16px] text-center leading-5  text-[#00ab6b] border-[1px] border-solid border-[#00ab6b]">{props.btntxt}</Button>
        </div>
    )
}

export default BackHome;