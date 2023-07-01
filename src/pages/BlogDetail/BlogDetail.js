import React, { useEffect } from "react";
import { isRouteErrorResponse, useLoaderData, useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import cardimage from "../../images/cardimage.jpg"
import person from "../../images/person.jpg"
import { herodata } from "../../dummy_data/herodata";
import PromotionBanner from "../../component/Promotion/PromotionBanner";
import { useLocation } from "react-router-dom";
import AllTopic from "../../component/AllTopic/AllTopic";
import BackHome from "../../component/Button/BackHome";
import {json} from "react-router-dom"
import ErrorPage from "../Error/ErrorPage";


const BlogDetail = () => {

    const blogdetail = useLoaderData();
    // const error = useRouteError();
    // console.log(error)

    // if(error.status === 404){
    //     <ErrorPage message={error.message}/>
    // }

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    const personimg = herodata[blogdetail.id-1].personimg;
    const personname = herodata[blogdetail.id-1].name;
    const personvisitdate = herodata[blogdetail.id-1].date;
    const personcolor = herodata[blogdetail.id-1].color;
    const personblogtitle = herodata[blogdetail.id-1].blogtitle;
    const persontitle = herodata[blogdetail.id-1].title;
    const shareimg = herodata[blogdetail.id-1].image;
    const review = herodata[blogdetail.id-1].review;

    const inspiredsharedata = {
        personimg,
        personname,
        personvisitdate,
        personcolor,
        personblogtitle,
        persontitle,
        shareimg,
        review
    }

    // if(reserror.status === 404){
    //     return 'NOT FOUND'
    // }
    



    
    return(
        <div>
        <div className="max-w-[640px]  py-[50px] px-[20px] mx-auto mt-[24px] border-solid border-b-2 border-[#ddd] font-montserrat">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-4">
                   <picture className="w-[36px] h-[36px]">
                       <img src={personimg} className="w-full h-full object-cover rounded-[50%]" alt="profile"/>
                    </picture>
                 <div className="flex items-start justify-center flex-col">
                    <span className="text-[#00ab6b] capitalize">{personname}</span>
                    <span className="text-black/60 capitalize">{personvisitdate}</span>
                 </div>
                </div>
                <div className=" text-white py-[1px] px-[16px] text-[10px] font-medium capitalize rounded-xl"
                 style={{backgroundColor:`${personcolor}`}}
                >
                    <span>{personblogtitle}</span>
                </div>
            </div>
            <div className="main-container">
                <h2 className="text-[32px] font-bold capitalize my-5">{persontitle}</h2>
                <picture className="w-full h-auto mt-[16px] mb-[12px] block">
                    <img src={shareimg} alt="img" className="w-full h-full object-cover block"/>
                </picture>
                <p className="flex items-center justify-center my-[5px] text-sm text-black/80"><span className="capitalize">the&nbsp;</span> amazing waves in <span className="capitalize">&nbsp;cali</span>.</p>
                <div className="content">
                    <p className="mb-[20px] text-xl text-[#333]">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialisa.</p>
                    <h2 className="text-[#333] mb-[10px] text-[32px] font-bold">On deer horse aboard tritely yikes and much</h2>
                    <p className="mb-[20px] text-xl text-[#333]">The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                    <p className="mb-[20px] text-xl text-[#333]">This however showed weaselWell uncritical so misledGoodness much until that fluid owl</p>
                    <p className="mb-[20px] text-xl text-[#333]">When she reached the first hills of the <span>Italic Mountains</span>, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of <span>Alphabet Village</span> and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.</p>
                    <h2 className="text-[#333] mb-[10px] text-[32px] font-bold">Overlaid the jeepers uselessly much excluding</h2>
                    <p className="mb-[20px] text-xl text-[#333]">But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with <span>Longe and Parole</span> and dragged her into their agency, where they abused her for their projects again and again. And if she hasn’t been rewritten, then they are still using her.</p>
                </div>
            </div>
        </div>
        <PromotionBanner sharedata={inspiredsharedata}/>
        <BackHome btntxt={'back home'}/>
        <AllTopic/>
        </div>
    )
}

export default BlogDetail;


export const loader = async ({request, params}) => {

    let {blogid} = params;
    if(blogid >= 11){
        blogid = 201;
    }
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${blogid}`)
    // console.log('respnse', response)
    if(!response.ok){
        console.log("ERROR FOUND")
        throw json(
            {
              message: "The page you requested is not available.",
            },
            { status: 404 }
          );
        // throw json({message: 'the blog you requested is not available at the moment'}, {status: 404});
      
    }
    else{
        return response;
    }
}