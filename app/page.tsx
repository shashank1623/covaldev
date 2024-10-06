import DeepDive from "@/components/DeepDive"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import LaunchEvaluations from "@/components/LaunchEvaluations"
import Navbar from "@/components/Navbar"
import WhatWeDo from "@/components/WhatWeDo"

export default function Home() {
  return (
    <div className="relative min-h-screen text-white w-full bg-black">
      <Navbar/>
      <Hero/>

      <WhatWeDo/>

      <DeepDive/>
      
      <LaunchEvaluations/>

      <Footer/>
    </div>
  )
}
