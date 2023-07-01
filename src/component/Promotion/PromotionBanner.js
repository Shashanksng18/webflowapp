import React from "react";
import SocialIcon from "../SocialIcon/SocialIcons"
import CustomForm from "../Input/CustomForm"
import Button from "../Button/Button";

const InspiredBanner = ({sharedata, className}) => {

    // console.log("Shared", sharedata);
    
    return(
        <>
        <div className={`w-full bg-[#DEECEC]`}>
        <div className={` py-[50px] px-[20px]  gap-0 relative left-0 mt-10 max-w-[660px] m-auto ${className}`}>
            <div className="flex items-start justify-between gap-2">
            <div className="flex-[80%]">
               <h1 className="capitalize text-[#72bdbd] mb-2.5 text-[32px] font-bold">{sharedata.personname || sharedata.title}</h1>
               <p className="mb-[16px] text-[#72bdbd] text-[18px] font-normal capitalize">{sharedata.review || sharedata.desc}</p>
            </div> 
            {sharedata?.personimg &&
             <div className="flex-[10%]">
             <picture className="rounded-[50%] w-full h-auto ">
                 <img src={sharedata.personimg} alt="personimg" className="rounded-[50%] w-full full block bg-red-100"/>
             </picture>
         </div>
            }
            </div>
            <SocialIcon/>
        </div>
        </div>
        </>
    )
}

export default InspiredBanner;