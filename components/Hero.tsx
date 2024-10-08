"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Spotlight } from "./ui/spotlight";
import BookACall from "./BookACall";

export default function Hero() {
    useEffect(() => {
        AOS.init({
            duration: 1500, // Animation duration in ms
            once: true,     // Whether animation should happen only once
        });
    }, []);

    return (
        <main className="relative flex items-center justify-center min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8 bg-black">
            {/* Grid background with custom color and dual circles */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 80 80'%3E%3Cg%20fill='none'%20stroke='%23475569'%20stroke-width='1'%3E%3Cpath%20d='M0%2079.5h80'%2F%3E%3Cpath%20d='M.5%200v80'%2F%3E%3C%2Fg%3E%3Cg%20fill='%230E1116'%3E%3Ccircle%20cx='0'%20cy='0'%20r='6'%20/%3E%3Ccircle%20cx='80'%20cy='0'%20r='6'%20/%3E%3Ccircle%20cx='0'%20cy='80'%20r='6'%20/%3E%3Ccircle%20cx='80'%20cy='80'%20r='6'%20/%3E%3C/g%3E%3Cg%20fill='%23475569'%3E%3Ccircle%20cx='0'%20cy='0'%20r='3'%20/%3E%3Ccircle%20cx='80'%20cy='0'%20r='3'%20/%3E%3Ccircle%20cx='0'%20cy='80'%20r='3'%20/%3E%3Ccircle%20cx='80'%20cy='80'%20r='3'%20/%3E%3C/g%3E%3C/svg%3E")`,
                    opacity: 0.1,
                }}
            ></div>

            {/* Radial gradient */}
            <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)] dark:bg-black bg-black z-0"></div>

            {/* Spotlight feature */}
            <Spotlight
                className="absolute -top-32 left-0 md:left-60 md:-top-20 lg:-top-40 lg:left-0 xl:left-60"
                fill="white"
            />

            <div className="max-w-5xl mx-auto relative z-10 text-center">
                {/* Apply fade-down animation to text content */}
                <div data-aos="fade-down">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-white bg-gradient-to-b from-blue-400 to-purple-600">
                        Simulation & evaluation for conversational agents
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl mb-8 text-neutral-300 max-w-3xl mx-auto">
                        Streamline your chat and voice assistant development with CI/CD.
                    </p>

                    <BookACall title="Book A Demo" />
                </div>
            </div>
        </main>
    );
}
