import React from "react";
import {AiOutlineTwitter,AiFillLike} from "react-icons/ai";
import heroBanner from "../../images/left.jpg";
import { Link } from "react-router-dom";

const HomeBanner = () => {

   
    return(
        <section className=" h-screen bg-no-repeat bg-bottom bg-cover  lg:bg-cover  fixed w-1/2 top-0 lg:relative lg:full lg:w-full lg:aspect-square lg:block  lg:h-auto"
       
        style={{
            backgroundImage: `linear-gradient(180deg,transparent 42%,#fff),url(${heroBanner})`,
            
          }}
         >
            <div className="absolute  left-0 top-auto  bottom-0 w-full px-[20px] pb-[70px] overflow-hidden translate-x max-w-full m-auto montserrat lg:bottom-2">
                 <div className="m-auto max-w-[90%] w-[640px]">
                 <h1 className="text-[4vh] uppercase font-bold leading-[4vh] mb-[10px] text-[#333]">hi - i'm jess & i write about my travels, music & life.</h1>
                 <p className=" text-[#333] leading-[20px] mb-[12px] text-[14px]">My friends <Link className="text-[#00ab6b] capitalize" to="authors/lisa">lisa</Link> and <Link className="text-[#00ab6b] capitalize" to="authors/tiffany">tiffany</Link> also share their thoughts.<br></br> have something to share? <Link className="text-[#00ab6b] capitalize" to='/contact'>contact me</Link>.</p>
                 <div className="flex items-center justify-start gap-2 mt-3">
                    <button className="flex items-center justify-center gap-1 capitalize bg-[#1d9bf0] text-white py-[1px] px-3 font-medium rounded-tl-lg rounded-bl-lg ml-1 text-[12px] h-5 hover:opacity-70"><AiOutlineTwitter/>tweet</button>
                    <button className="flex items-center justify-center gap-1 capitalize h-[20px] text-[11px] py-0 px-[6px] bg-[#1877f2] text-white cursor-pointer ml-1"><AiFillLike/>follow 92k</button>
                 </div>
                 </div>
            </div>
        </section>
    )
}

export default HomeBanner;