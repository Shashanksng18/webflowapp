import React from "react";
import ContactImage from "../../images/contactimage.jpg"
import {AiOutlineTwitter,AiFillLike} from "react-icons/ai";
import {Link} from "react-router-dom";

const ContactBanner = () => {
    return(
        <main 
         className="w-1/2 bg-no-repeat h-screen  fixed bg-cover bg-bottom top-0 lg:w-full lg:relative lg:h-auto lg:aspect-[1/1] "
         style={{backgroundImage: `linear-gradient(180deg,hsla(0,0%,84.7%,.26),hsla(0,0%,84.7%,.69)),url(${ContactImage})`}}
        >
            <div className="absolute left-0 right-0 bottom-0 top-auto w-[100%]">
               <div className="max-w-[90%] w-[640px] m-auto px-5 pb-[70px]">
                  <h1 className="text-[4vh] leading-[4vh] font-bold  text-[#333] uppercase mb-[10px] z-50">say hello!</h1>
                   <p className="mb-[12px] text-[#333] text-[14px] "><span className="capitalize">my</span> great friends <Link className="text-[#00ab6b] capitalize" to="/authors/lisa">lisa</Link> and <Link className="text-[#00ab6b] capitalize" to="/authors/tiffany">tiffany</Link> also share there thoughts. have something to share? <Link to='/contact' className="text-[#00ab6b] capitalize">contact me</Link></p>
                   <div className="flex items-center justify-start gap-2 mt-3">
                    <button className="flex items-center justify-center gap-1 capitalize bg-[#1d9bf0] text-white py-[1px] px-3 font-medium rounded-tl-lg rounded-bl-lg ml-1 text-[12px] h-5 hover:opacity-70"><AiOutlineTwitter/>tweet</button>
                    <button className="flex items-center justify-center gap-1 capitalize h-[20px] text-[11px] py-0 px-[6px] bg-[#1877f2] text-white cursor-pointer ml-1"><AiFillLike/>follow 92k</button>
                 </div>
               </div>
            </div>
        </main>
    )
}

export default ContactBanner;