"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { MessageCircle, Mic } from 'lucide-react'
import Result1 from '@/components/assets/Results.webp'

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="bg-[#0A0A0A] text-white p-2 rounded-2xl">
      <CardContent className="p-3">
        <div className="text-gray-400">{icon}</div>
        <div className="text-xl font-semibold mb-2">{title}</div>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}

export default function WhatWeDo() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Heading and Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-white bg-gradient-to-r from-blue-400 to-purple-600">
              Simulate thousands of scenarios from a few test cases
            </h2>
            <p className="text-xl text-gray-300">
              You create the prompts, we simulate environments to test your agents from all directions.
            </p>

            {/* Cards */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <FeatureCard
                icon={<MessageCircle size={32} />}
                title="AI-Powered Simulations"
                description="We chat with your agent to generate test cases."
              />
              <FeatureCard
                icon={<Mic size={32} />}
                title="Voice AI Compatible"
                description="We can call your agent via voice just as easily as text."
              />
            </div>
          </div>

          {/* Right Side: Image */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Card className="relative overflow-hidden cursor-pointer transition-transform hover:scale-105">
                <div className="absolute inset-0 "></div>
                <CardContent className="p-0">
                  <Image
                    src={Result1}
                    alt="AI Simulation Dashboard"
                    width={600}
                    height={400}
                    className="rounded-lg w-full h-auto object-cover shadow-2xl"
                  />
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-full p-0">
              <Image
                src={Result1}
                alt="AI Simulation Dashboard"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}
