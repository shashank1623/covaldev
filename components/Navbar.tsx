// components/Navbar.tsx

"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Moon } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isVisible
                ? 'bg-black/90 backdrop-blur-md shadow-md'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 3738 3236">
                                <path fill="#fff" fillRule="evenodd"
                                    d="M2530.44 1145.64 1869 0 475.379 2413.82c131.695 51.95 260.914 81.02 384.699 81.61 245.352 1.17 513.692-109.55 774.302-492.04 271.17-397.97 579.18-672.62 896.06-857.75Zm235.57 408.02c-260.46 152.82-514.92 381.09-742.39 714.95-331.66 486.76-735.71 699.86-1165.784 697.82-214.975-1.03-423.92-55.96-619.932-141.29L.982 3235.5H3737.02l-971.01-1681.84Z"
                                    clipRule="evenodd"></path>
                            </svg>
                            <span className="text-white font-bold text-lg">Coval</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-semibold">
                            Pricing
                        </Link>
                        <Link href="/blog" className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-semibold">
                            Blog
                        </Link>
                        <Link href="/contact" className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-semibold">
                            Contact
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="ghost" className="text-gray-300 rounded-full hover:bg-gray-500 transition-colors">
                            Login
                        </Button>
                        <Button className="bg-gray-700 text-white border border-gray-500 px-4 py-2 rounded-full hover:bg-black transition-colors">
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
