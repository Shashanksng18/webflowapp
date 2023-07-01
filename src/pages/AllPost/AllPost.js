import React, { useEffect, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import BlogCard from "../../component/Card/BlogCard";
import { herodata } from "../../dummy_data/herodata";
import AllTopic from "../../component/AllTopic/AllTopic";
import { useNavigate } from "react-router-dom";
import BackHome from "../../component/Button/BackHome";
import Button from "../../component/Button/Button";


const AllPost = () => {

   const [blogs, setBlogs] = useState();
   const navigate = useNavigate();
   const data = useRouteLoaderData('blog');
   const text = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
   useEffect(() => {
    setBlogs(data);
   }, [data])
    return(
        <div className="relative top-[80px] font-montserrat ">
         {/* {blogs?.map((blog, index) => (
            <div>
                <BlogCard title={blog.title} about={text} id={blog.id} index={index}/>
            </div>
         ))} */}
          {blogs?.map((blog, index) => {
            const {id, title} = blog;
            return(
                <main key={index+1}>
                {herodata.map((hero, hindex) => {
                const {image, name ,date, title, color, blogtitle, personimg} = hero;
                return(
                     <div key={hindex+2}>
                        {index == hindex &&  <BlogCard title={title} about={text} id={id} index={index} image={image}  name={name} date={date} htitle={title} color={color} blogtitle={blogtitle} personimg={personimg}/>}
                     </div>
                )
            })}
                </main>
            )
        })}
        <BackHome btntxt={'back home'}/>
        <AllTopic/>
        </div>
    )
}

export default AllPost;