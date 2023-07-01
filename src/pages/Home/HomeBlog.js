import React, { useEffect, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import BlogCard from "../../component/Card/BlogCard";
import { useNavigation } from "react-router-dom";
import Button from "../../component/Button/Button";
import { useNavigate } from "react-router-dom";
// import InspiredBanner from "../../component/InspiredBanner";
import { herodata } from "../../dummy_data/herodata"
import PromotionBanner from "../../component/Promotion/PromotionBanner";
import Subscription from "../../component/SubscriptionForm/Subscription";


const HomeBlog = () => {
    const [blogs, setBlogs] = useState([]);
    const data = useRouteLoaderData('blog');
    const navigation = useNavigation();

    const navigate = useNavigate();

    const AllPostHandler = () => {
        navigate('/all-post')
    }
    // console.log(data)
    useEffect(() => {
        setBlogs(data)
    }, [data])

    const title = 'inspired?';
    const desc = 'share & follow our stories and moments on our favourite social networks.';

    const sharedata = {
        title,
        desc,
    }
    
    const text = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
    return(
        <div className="h-auto absolute right-0 w-1/2 max-w-full  lg:relative lg:w-full lg:h-full py-[50px] lg:m-auto">
        {/* <h1>RightBlog</h1>
        <p className="text-[100px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc</p> */}
         {/* {navigation.state === 'loading' && <p>please wait...</p>} */}
        {/* {blogs?.map((blog, index) => (
            <div key={blog.id}>
             {index ===3 && <InspiredBanner/>}
             {index <15 && <BlogCard title={blog.title} about={text} id={blog.id} index={index}   />}
            </div>
        ))} */}
        {blogs?.map((blog, index) => {
            const {id, title} = blog;
            return(
                <div key={index+1}>
                {herodata.map((hero, hindex) => {
                const {image, name ,date, title, color, blogtitle, personimg} = hero;
                return(
                     <div key={hindex+2}>
                        {index ===3 && hindex ===3 && <><PromotionBanner sharedata={sharedata}/> <Subscription/></>}
                        {index <9 && index == hindex &&  <BlogCard title={title} about={text} id={id} index={index} image={image}  name={name} date={date} htitle={title} color={color} blogtitle={blogtitle} personimg={personimg}/>}
                     </div>
                )
            })}
                </div>
            )
        })}
        <Button className="capitalize text-center text-[#00ab6b] border-[1px] border-[#00ab6b] border-solid rounde-lg flex items-center justify-center m-auto py-[9px] px-[26px] rounded-[64px] mt-6 "
         onClick={AllPostHandler}
        >
            view all posts
        </Button>
        </div>
    )
}

export default HomeBlog;


