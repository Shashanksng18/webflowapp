import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {RxCross1} from 'react-icons/rx';
import { uiAction } from "../../store/creatUi";
import SocialIcons from "../SocialIcon/SocialIcons";

const SideNavbar = () => {

    const dispatch = useDispatch();
    const toggle = useSelector((toggle) => toggle.ui.toggle);

    const closeHemburgerHandler = () => {
        dispatch(uiAction.toggleMenuBar());
        // console.log("CLOSES")
    }
    return(
        <div className={`fixed top-0 right-0  h-screen w-[320px] cursor-pointer bg-[#DEECEC]  pt-20 font-montserrat ${toggle ? 'translate-x-0 transition-all ease-linear duration-200':'translate-x-[100%] transition-all ease-linear duration-200'}`}
         
        >
            <nav>
                <ul className="flex item-center flex-col">
                    <li className="absolute right-3 top-0 h-20 py-[25px] px-[20px]" onClick={closeHemburgerHandler}>
                        <RxCross1 size={25}/>
                    </li>
                    <li>
                        {/* className={`text-[#15a5a5] underline px-5 h-[60px] font-bold border-y-[1px] border-solid border-[#b7ddea] uppercase flex items-center`} */}
                        <NavLink to='/'  className={({isActive}) => isActive ? 'text-[#15a5a5]/50 underline px-5 h-[60px] font-bold border-y-[1px] border-solid border-[#b7ddea] uppercase flex items-center text-[14px]': 'text-[#15a5a5]  px-5 h-[60px] font-bold border-y-[1px] border-solid border-[#b7ddea] uppercase flex items-center text-[14px]'}
                         
                        onClick={closeHemburgerHandler}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/all-post' className={({isActive}) => isActive ? 'text-[#15a5a5]/50 underline px-5 h-[60px] font-bold border-y-[1px] border-solid border-[#b7ddea] uppercase flex items-center text-[14px]': 'text-[#15a5a5]  px-5 h-[60px] font-bold border-y-[1px] border-solid border-[#b7ddea] uppercase flex items-center text-[14px]'}
                        onClick={closeHemburgerHandler}
                        >
                            all posts
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className={({isActive}) => isActive ? 'text-[#15a5a5]/50 underline px-5 h-[60px] font-bold border-y-[1px] border-solid border-[#b7ddea] uppercase flex items-center text-[14px]': 'text-[#15a5a5]  px-5 h-[60px] font-bold border-y-[1px] border-solid border-[#b7ddea] uppercase flex items-center text-[14px]'}
                        onClick={closeHemburgerHandler}
                        >
                            contact
                        </NavLink>
                    </li>
                </ul>
                <ul className="bg-[#cde4e4] p-5 ">
                <p className=" capitalize mb-3 font-bold text-[#72bdbd]">follow your journey with us!</p>
                <SocialIcons/>
                </ul>
            </nav>
        </div>
    )
}

export default SideNavbar;