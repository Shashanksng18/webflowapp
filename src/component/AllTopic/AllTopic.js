import React from "react";
import { NavLink } from "react-router-dom";

const AllTopic = () => {
    return(
       <section className="border-t-[1px] border-solid border-[#ddd] w-full my-4">
         <div className="flex items-center justify-center flex-col my-10 max-w-[600px] w-full m-auto py-[26px]">
            <h2 className="capitalize font-bold mb-6 px-[10px] text-[16x] leading-[22px] text-[#333]">all topics</h2>
            <ul className="flex items-center justify-between w-full md:flex-wrap">
                <li className="px-[10px]">
                    <NavLink to="/food" className={`capitalize rounded-[20px]  px-[18px] mb-[5px] text-[16px] leading-[20px] text-[#cacaca] font-normal border-[1px] border-solid border-[#ddd] `}>
                        food
                    </NavLink>
                </li>
                <li className="px-[10px]">
                    <NavLink to="/life" className={`capitalize rounded-[20px]  px-[18px] mb-[5px] text-[16px] leading-[20px] text-[#cacaca] font-normal border-[1px] border-solid border-[#ddd] `}>
                        life
                    </NavLink>
                </li>
                <li className="px-[10px]">
                    <NavLink  to="/music" className={`capitalize rounded-[20px]  px-[18px] mb-[5px] text-[16px] leading-[20px] text-[#cacaca] font-normal border-[1px] border-solid border-[#ddd] `}>
                        music
                    </NavLink>
                </li>
                <li className="px-[10px]">
                    <NavLink to="/travel" className={`capitalize rounded-[20px]  px-[18px] mb-[5px] text-[16px] leading-[20px] text-[#cacaca] font-normal border-[1px] border-solid border-[#ddd] `}>
                        travel
                    </NavLink>
                </li>
            </ul>
        </div>
       </section>
    )
}

export default AllTopic;