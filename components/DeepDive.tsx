"use client";

import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MessageCircle } from 'lucide-react';
import Result2 from '@/components/assets/Dive-Deep.webp';

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <Card className="bg-[#0A0A0A] text-white p-2 rounded-2xl">
            <CardContent className="p-3">
                <div className="text-gray-400">{icon}</div>
                <div className="text-xl font-semibold mb-2">{title}</div>
                <p className="text-gray-400">{description}</p>
            </CardContent>
        </Card>
    );
}

export default function DeepDive() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    return (
        <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Image with fade-up animation */}
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                            <Card className="relative overflow-hidden cursor-pointer transition-transform hover:scale-105 lg:order-first" data-aos="fade-up">
                                <div className="absolute inset-0 "></div>
                                <CardContent className="p-0">
                                    <Image
                                        src={Result2}
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
                                src={Result2}
                                alt="AI Simulation Dashboard"
                                width={1200}
                                height={800}
                                className="w-full h-auto object-contain"
                            />
                        </DialogContent>
                    </Dialog>

                    {/* Right Side: Heading and Content with fade-up animation */}
                    <div className="space-y-6" data-aos="fade-up">
                        <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-white bg-gradient-to-r from-blue-400 to-purple-600">
                            Dive into Evaluations
                        </h2>
                        <p className="text-xl text-gray-300">
                            We provide a comprehensive evaluation of your agent interactions. Track performance over time or dive into specific runs to determine root causes.
                        </p>

                        {/* Cards */}
                        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
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
                                        <path fill="currentColor" d="m16 11.78l4.24-7.33l1.73 1l-5.23 9.05l-6.51-3.75L5.46 19H22v2H2V3h2v14.54L9.5 8z"></path>
                                    </svg>
                                }
                                title="Advanced Analytics"
                                description="Gain deep insights into your agent's performance over time."
                            />
                            <FeatureCard
                                icon={<MessageCircle size={32}/>}
                                title="Custom Metrics"
                                description="In addition to Coval-built metrics, you can easily create custom metrics to evaluate your agent."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
