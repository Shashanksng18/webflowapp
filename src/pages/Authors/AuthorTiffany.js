import React, {useState, useEffect} from "react";
import BlogCard from "../../component/Card/BlogCard";
import PromotionBanner from "../../component/Promotion/PromotionBanner";
import { herodata } from "../../dummy_data/herodata";
import { useRouteLoaderData } from "react-router-dom";
import AllTopic from "../../component/AllTopic/AllTopic";
import BackHome from "../../component/Button/BackHome";

const AuthorTiffany  = () => {
    const [blogs, setBlogs] = useState([]);
    const data = useRouteLoaderData('blog');

    useEffect(() => {
        setBlogs(data)
    }, [])

    const filterlisa = herodata.filter((person) => person.name ==='tiffany')
    // console.log(filterlisa)
    const personname = filterlisa[0].name;
    const personimg = filterlisa[0].personimg;
    const review = filterlisa[0].review;

   
    

    
    const sharedata = {
        personname,
        personimg,
        review
    }
    const text = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
    return(
        <div className="font-montserrat">
        <PromotionBanner sharedata={sharedata} className={`!mt-0 !py-16`}/>
        <div>
        {blogs.map((blog, index) => {
            const {id} = blog;
            return(
               <main key={index+1}>
                 {filterlisa.map((author, aindex) => {
                  const{image, name ,date, title, color, blogtitle, personimg, id} = author;
                    return(
                      <div key={aindex+2}>
                          {index === aindex && <BlogCard title={title} about={text} id={id} index={index} image={image}  name={name} date={date} htitle={title} color={color} blogtitle={blogtitle} personimg={personimg}/>}
                      </div>
                    )
                 })}
               </main>
            )
        })}
       
        </div>
        <BackHome btntxt={'back home'}/>
        <AllTopic/>
        </div>
    )
}

export default AuthorTiffany;