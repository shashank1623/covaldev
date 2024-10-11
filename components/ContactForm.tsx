"use client";

import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        // Form submission will be handled by Formspree
        form.submit();
    }

    return (
        <div className="relative min-h-screen bg-black text-white flex flex-col justify-center items-center p-4 sm:p-8">
            {/* Grid background */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 80 80'%3E%3Cg%20fill='none'%20stroke='%23475569'%20stroke-width='1'%3E%3Cpath%20d='M0%2079.5h80'%2F%3E%3Cpath%20d='M.5%200v80'%2F%3E%3C%2Fg%3E%3Cg%20fill='%230E1116'%3E%3Ccircle%20cx='0'%20cy='0'%20r='6'%20/%3E%3Ccircle%20cx='80'%20cy='0'%20r='6'%20/%3E%3Ccircle%20cx='0'%20cy='80'%20r='6'%20/%3E%3Ccircle%20cx='80'%20cy='80'%20r='6'%20/%3E%3C/g%3E%3Cg%20fill='%23475569'%3E%3Ccircle%20cx='0'%20cy='0'%20r='3'%20/%3E%3Ccircle%20cx='80'%20cy='0'%20r='3'%20/%3E%3Ccircle%20cx='0'%20cy='80'%20r='3'%20/%3E%3Ccircle%20cx='80'%20cy='80'%20r='3'%20/%3E%3C/g%3E%3C/svg%3E")`,
                    opacity: 0.1,
                }}
            ></div>

            {/* Radial gradient */}
            <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)] dark:bg-black bg-black z-0"></div>

            <div className='pt-36'></div>
            {/* Form and Contact Card */}
            <div className="relative z-10 w-full max-w-4xl bg-[#0A0A0A] rounded-2xl shadow-2xl overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    {/* Contact Details */}
                    <div className="md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r text-white from-blue-400 to-purple-600 bg-clip-text text-transparent">
                            Get in Touch
                        </h1>
                        <p className="text-gray-400 mb-8">
                            We're here to help and answer any questions you might have. Feel free to reach out to us!
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <Mail className="w-6 h-6 mr-4 text-blue-400" />
                                <p>contact@coval.dev</p>
                            </div>
                            <div className="flex items-center">
                                <Phone className="w-6 h-6 mr-4 text-blue-400" />
                                <p>+1 (800) 123 XX21</p>
                            </div>
                            <div className="flex items-center">
                                <MessageSquare className="w-6 h-6 mr-4 text-blue-400" />
                                <p>support@coval.dev</p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="md:w-1/2 bg-black p-8 sm:p-12">
                        <form onSubmit={handleSubmit} action="https://formspree.io/f/asdfkaskdf" method="POST" className="space-y-8">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                                <Input
                                    id="fullName"
                                    name="fullName"
                                    placeholder="John Doe"
                                    className="bg-[#0A0A0A] text-white border border-gray-600 focus:ring-blue-500 focus:border-blue-500 rounded-3xl w-full py-3 px-4 placeholder-gray-500"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    className="bg-[#0A0A0A] text-white border border-gray-600 focus:ring-blue-500 focus:border-blue-500 rounded-3xl w-full py-3 px-4 placeholder-gray-500"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">Company</label>
                                <Input
                                    id="company"
                                    name="company"
                                    placeholder="Acme Inc."
                                    className="bg-[#0A0A0A] text-white border border-gray-600 focus:ring-blue-500 focus:border-blue-500 rounded-3xl w-full py-3 px-4 placeholder-gray-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Type your message here"
                                    className="bg-[#0A0A0A] text-white border border-gray-600 focus:ring-blue-500 focus:border-blue-500 rounded-3xl w-full py-3 px-4 placeholder-gray-500"
                                    rows={5}
                                    required
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-[#0A0A0A] text-white border border-gray-600 focus:ring-blue-500 focus:border-blue-500 rounded-3xl py-3 px-4 placeholder-gray-500"
                            >
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}