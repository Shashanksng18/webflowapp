import React from "react";
import ContactBanner from "./ContactBanner";
import ContactForm from "./ContactForm";

const ContactMain = () => {
    return(
        <section className="flex items-center justify-between lg:flex-col lg:relative lg:top-[80px]">
           <div className="w-1/2  lg:w-full">
               <ContactBanner/>
           </div>
           <div className="w-1/2 lg:w-full">
              <ContactForm/>
           </div>
        </section>
    )
}

export default ContactMain;