'use client'
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export default function Contact(){
    return(
        <div className="relative min-h-screen w-full bg-black">
            <Navbar/>
            
            <ContactForm/>
            <Footer/>
        </div>
    )
}