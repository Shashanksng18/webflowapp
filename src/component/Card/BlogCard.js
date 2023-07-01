import React, {useState} from "react";
import person from "../../images/person.jpg";
import cardimage from "../../images/cardimage.jpg"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { uiAction } from "../../store/creatUi";
import { useNavigate } from "react-router-dom";



const BlogCard = ({title, about, id, index, className, image, name, date, htitle, color, blogtitle, personimg}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState();

    const backdrop = useSelector((hover) => hover.ui.backdrop);

    // console.log("BACK", backdrop)
    const showBackdrop = () => {
        dispatch(uiAction.showBackdrop());
        setCurrentIndex(index)
        // console.log("SHOWBACKDROP")
    }
    const closeBackdrop = () => {
        setCurrentIndex()
        dispatch(uiAction.closeBackdrop())
    }

    
   
    return(
        <div className={` max-w-[600px]  px-[20px] mx-auto mt-[24px] `}>
            <div className="py-[20px] border-solid border-b-2 border-[#ddd]">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-4">
                   <picture className="w-[36px] h-[36px]">
                       <img src={personimg} className="w-full h-full object-cover rounded-[50%]" alt="profile"/>
                    </picture>
                   
                 <div className="flex items-start justify-between flex-col">
                    <span className="text-[#00ab6b] capitalize text-[14px] leading-[18px]">{name}</span>
                    <span className="text-black/60 capitalize text-[14px] leading-[18px]">{date}</span>
                 </div>
                </div>
                <div className={`text-white py-[2px] px-[16px] text-[10px] leading-[15px] font-medium capitalize rounded-xl`}
                style={{backgroundColor: `${color}`}}
                >
                    {/* <span>travel</span> */}
                    <Link>{blogtitle}</Link>
                </div>
            </div>
            <div>
                <picture className="w-full h-[180px] mt-[16px] mb-[12px] block relative" onMouseOver={()=>{showBackdrop(); }} onMouseOut={()=>closeBackdrop()}>
                   <Link to={`${id}`}>
                    <img src={image} alt="img" className="w-full h-full object-cover"/>
                    { backdrop && index === currentIndex && <div className="bg-gradient-to-r from-white/30 to-white/50 absolute w-full h-full top-0"></div>}
                    </Link>
                </picture>
               
                <Link to={`/${id}`}>
                <h2 className="text-[32px] font-bold capitalize mb-2.5 text-black/80">{htitle}</h2>
                </Link>
                <p className="text-[18px] text-[#333] font-normal mb-5">{about.substring(0,113)}</p>
                <Link to={`/${id}`}>
                   <span className="capitalize text-black/30 hover:text-[#333]/50">read more...</span>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default BlogCard;