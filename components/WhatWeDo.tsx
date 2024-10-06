"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { MessageCircle } from 'lucide-react'
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
                                icon={<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="32" height="32" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M16.75 4.36c2.02 2.2 2.02 5.25 0 7.27l-1.68-1.69c.84-1.18.84-2.71 0-3.89zM20.06 1c3.94 4.05 3.9 10.11 0 14l-1.63-1.63c2.77-3.18 2.77-7.72 0-10.74zm-6.7 12.76C15.31 14.42 17 15.5 17 17v5H1v-5c0-1.5 1.69-2.58 3.65-3.24L5.27 15l.23.5c-1.5.46-2.6 1.12-2.6 1.5v3.1h4.22L8 15.03l-.94-1.88c.62-.07 1.27-.12 1.94-.12s1.32.05 1.94.12L10 15.03l.88 5.07h4.22V17c0-.38-1.1-1.04-2.6-1.5l.23-.5zM9 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0 6c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4"></path>
                                </svg>}
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
