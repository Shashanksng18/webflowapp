import React from "react";
import RootLayout from "./RootLayout";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../images/logo.png"
import {CgMenuLeftAlt} from "react-icons/cg"
import hemburger from "../images/hemburger.svg";
import SideNavbar from "../component/SideNavbar/SideNavbar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uiAction } from "../store/creatUi";


const MainNavigation = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((toggle) => toggle.ui)

  const openHemburgerHandler = () => {
      dispatch(uiAction.toggleMenuBar())
  }
    return(
        <nav className="fixed left-0 top-0 pr-[10px] pl-[20px] h-[80px]  z-10 w-full font-montserrat">
           <ul className="flex items-center justify-between">
              <li>
                <NavLink className="w-[60px] block py-[24px]">
                    <picture>
                        <img src={logo} alt="logo"/>
                    </picture>
                </NavLink>
              </li>
              <li className="py-[28px] px-[20px] cursor-pointer max-h-20 h-20">
                   <picture className="w-[24px] aspect-square object-cover block" onClick={()=>openHemburgerHandler()}>
                     <img src={hemburger} alt="hemburger" className="w-full h-full object-cover block"/>
                   </picture>
              </li>
           </ul>
           <SideNavbar/>
        </nav>
    )
}

export default MainNavigation;


