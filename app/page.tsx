import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import WhatWeDo from "@/components/WhatWeDo"

export default function Home() {
  return (
    <div className="relative min-h-screen text-white w-full bg-black">
      <Navbar/>
      <Hero/>

      <WhatWeDo/>

      <Footer/>
    </div>
  )
}
