import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";

const RootLayout = () => {
    return(
       <>
        <MainNavigation/>
        <Outlet/>
       </>
    )
}

export default RootLayout;

export const loader = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');

    const data = await response.json();

    return data.slice(0,15);
}