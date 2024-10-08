
import AboutCovalDev from "@/components/AboutCovalDev";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";

export default function About(){
    return(
        <div className="relative min-h-screen w-full bg-black">
            <Navbar/>
            
            <AboutCovalDev/>

            <TeamSection/>
            <Footer/>
        </div>
    )
}