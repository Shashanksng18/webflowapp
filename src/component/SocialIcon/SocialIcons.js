import React from "react";
import {BsFacebook, BsSpotify} from "react-icons/bs";
import {AiFillInstagram} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import facebook from "../../images/facebook.svg";
import pininterest from "../../images/pininterest.svg";
import instagram from "../../images/instagram.svg";
import spotify from "../../images/spotify.svg"

const SocialIcons = () => {
    return(
        <ul className=" flex items-center justify-start gap-4">
            <li className=" w-[34px] aspect-square bg-[#72bdbd] rounded-[50%] flex items-center justify-center hover:bg-[#72bdbd]/60">
                <NavLink>
                    <img src={instagram} className="w-[18px] aspect-auto object-cover"/>
                </NavLink>
            </li>
            <li className=" w-[34px] aspect-square bg-[#72bdbd] rounded-[50%] flex items-center justify-center hover:bg-[#72bdbd]/60">
                <NavLink>
                    <img src={pininterest} className="w-[18px] aspect-auto  object-cover"/>
                </NavLink>
            </li>
            <li className=" w-[34px] aspect-square bg-[#72bdbd] rounded-[50%] flex items-center justify-center hover:bg-[#72bdbd]/60">
                <NavLink>
                    <img src={facebook} className="w-[18px] aspect-auto object-cover"/>
                </NavLink>
            </li>
            <li className=" w-[34px] aspect-square bg-[#72bdbd] rounded-[50%] flex items-center justify-center hover:bg-[#72bdbd]/60">
                <NavLink>
                    <img src={spotify} className="w-[18px] aspect-auto h-full object-cover"/>
                </NavLink>
            </li>
        </ul>
    )
}

export default SocialIcons;