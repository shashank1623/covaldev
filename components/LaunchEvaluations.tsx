"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Github, Terminal } from "lucide-react"
import Result3 from '@/components/assets/Launch.webp'

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

export default function LaunchEvaluations() {
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    return (
        <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side: Heading and Content */}
                    <div className="space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-white bg-gradient-to-r from-blue-400 to-purple-600">
                            Launch Evaluations
                        </h2>
                        <p className="text-xl text-gray-300">
                            Easily perform evaluations on any transcript. In addition to our own metrics, you can easily create your own custom metrics.
                        </p>

                        {/* Cards */}
                        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                            <FeatureCard
                                icon={<Github size={32} />}
                                title="GitHub Integration"
                                description="Integrate with GitHub to run evaluations on every PR."
                            />
                            <FeatureCard
                                icon={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        className="iconify iconify--mdi mb-2"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path fill="currentColor" d="M7 7H5a2 2 0 0 0-2 2v8h2v-4h2v4h2V9a2 2 0 0 0-2-2m0 4H5V9h2m7-2h-4v10h2v-4h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2m0 4h-2V9h2m6 0v6h1v2h-4v-2h1V9h-1V7h4v2Z"></path>
                                    </svg>
                                }
                                title="API Access"
                                description="Launch evaluations via API or in our dashboard."
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
                                        src={Result3}
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
                                src={Result3}
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
