import React from "react";
import HomeBanner from "./HomeBanner";
import HomeBlog from "./HomeBlog";
const HomeSection = () => {
    return(
        <div className="flex items-start justify-between lg:flex-col px-[20px]lg:flex-col relative lg:top-[80px] font-montserrat">
            <div className="w-full h-full relative overflow-hidden mr-4">
                <HomeBanner/>
            </div>
            <div className=" w-full h-full ml-4 lg:ml-0">
                <HomeBlog/>
            </div>
        </div>
    )
}

export default HomeSection;