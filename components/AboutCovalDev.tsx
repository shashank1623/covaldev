'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Brook from "@/components/assets/brooke.png"
import BookACall from './BookACall'
export default function AboutCovalDev() {
  return (
    <div className=" text-white min-h-screen">
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="text-center pt-36 mb-16">
          <h1 className="text-4xl font-bold mb-4">About Coval</h1>
          <p className="text-xl text-gray-300">Building Trust in AI Agents</p>
        </header>

        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <Image
              src={Brook}
              alt="Brooke, founder of Coval"
              width={150}
              height={150}
              className="rounded-sm"
            />
            <div>
              <h2 className="text-2xl font-semibold mb-4">Hey! I'm Brooke, the founder of Coval. 👋</h2>
              <p className="text-lg">
                Before starting Coval, I led the evaluation job infrastructure team at Waymo. I coded the first versions of our dataset storage and other foundational simulation systems, and my team built all of the dev tools for launching and running evals.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Our Journey</h2>
          <p className="mb-4">
            Through my conversations with hundreds of engineering teams at startups and enterprises, I've seen that AI agents—models that operate independently and handle complex tasks—are facing similar challenges to those in self-driving.
          </p>
          <p className="mb-4">
            In the early days, autonomous vehicle companies relied heavily on manual evaluation, testing the self-driving cars on racetracks and city streets (remember when autonomous cars still had safety drivers?). However, as startups scaled, a significant shift happened: we moved towards simulating every code change in a "virtual" environment, using the vast amounts of data we collected. The new approach dramatically improved vehicle behavior, leading to hundreds of autonomous cars zipping around the San Francisco streets today!
          </p>
          <p>
            This story mirrors what's happening today with AI agents across various industries. Teams are coming up with promising prototypes but often hit a wall when it comes to their reliability.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
          <p className="mb-4">
            As we build for the future, where AI agents execute much of our work, ranging from sending emails to prescribing medication, the risks posed by untested systems could severely throttle the progress.
          </p>
          <p>
            At Waymo, I developed tools that tested each code modification made by engineers, ensuring that every change improved the Waymo Driver's performance. I believe this methodical approach was key in helping our team address edge cases and maintain peak performance, and it ultimately cemented Waymo's status as a leader in the autonomous vehicle space.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Our Mission at Coval</h2>
          <p className="mb-4">
            Now, at Coval, we're taking these proven strategies and adapting them in a completely new way to speed up the development of AI agents. Our goal is to help engineers build agent experiences that genuinely work for users in the real world.
          </p>
          <p className="text-xl font-semibold">
            Automated simulation and evaluation are critical to trusting agents with impactful tasks across industries.
          </p>
        </section>

        <div className="text-center">
          <BookACall title="Join Us in Shaping The Future of AI"/>
        </div>
      </main>
    </div>
  )
}