import React, { useEffect, useState } from "react";
import { herodata } from "../../dummy_data/herodata";
import { useRouteLoaderData } from "react-router-dom";
import BlogCard from "../../component/Card/BlogCard";
import AllTopic from "../../component/AllTopic/AllTopic";


const Travel = () => {
    const [blogs, setBlogs] = useState();
    const data = useRouteLoaderData('blog');
    const filterfood = herodata.filter((item) => item.blogtitle === 'travel' );

    console.log(filterfood);

    useEffect(() => {
        setBlogs(data);
    }, [data])

    console.error(blogs)
    const color = filterfood[0].color;
    const text = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
    return(
        <>
          <div className={`py-[80px] font-bold text-center text-white leading-[52px] mb-[10px] text-[48px]`}
           style={{backgroundColor: `${color}`}}
          >
            <h1>Travel</h1>
          </div>
          <>
            {blogs?.map((blog, index) => {
                const {id} = blog;
                return(
                    <>
                       {filterfood.map((item, findex) => {
                          const{image, name ,date, title, color, blogtitle, personimg, id} = item;
                         return(
                            <div key={findex+2}>
                                {index === findex && <BlogCard title={title} about={text} id={id} index={index} image={image}  name={name} date={date} htitle={title} color={color} blogtitle={blogtitle} personimg={personimg}/>}
                            </div>
                          )
                       })}
                    </>
                )
            })}
          </>
          <AllTopic/>
        </>
    )
}

export default Travel;