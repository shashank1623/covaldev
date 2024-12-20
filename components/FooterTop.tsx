"use client";

import React from "react";
import BookACall from "./BookACall";

export default function FooterTop() {
    return (
        <div className="relative flex items-center text-white justify-center min-h-[50vh] overflow-hidden px-4 sm:px-6 lg:px-8 bg-black">
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

            <div className="max-w-5xl mx-auto relative z-10 text-center">
                {/* Apply fade-down animation to text content */}
                <div data-aos="fade-down">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Looking to build agents<br />you can trust?
                        </h2>
                        <BookACall title="Book A Call" />
                    </div>
                </div>
            </div>
        </div>
    );
}
