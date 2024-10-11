"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${isVisible ? 'backdrop-blur-md bg-black/50 shadow-lg' : 'bg-transparent'
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

          {/* Desktop navigation links */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-semibold">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-semibold">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-semibold">
              Contact
            </Link>
          </div>

          {/* Desktop buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href='/signin' className='w-full text-gray-300 hover:bg-gray-700 hover:text-white hover:rounded-full transition-colors px-3 py-2 rounded-md text-base font-medium'>
              Sign in
            </Link>
            <Link href="/signup" passHref>
              <Button className="bg-gray-700 text-white border border-gray-500 px-4 py-2 rounded-full hover:bg-black transition-colors">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Hamburger menu icon for mobile */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleMenuToggle}
              className="text-white"
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile navigation links */}
      {isMenuOpen && (
        <div className="md:hidden bg-transparent backdrop-blur-md w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="/about" className="block text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-base font-medium">
              About Us
            </Link>
            <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <Link href='/signin' className='w-full text-gray-300 hover:bg-gray-700 hover:text-white transition-colors px-3 py-2 rounded-md text-base font-medium'>
                Sign in
              </Link>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <Link href="/signup" passHref>
                <Button className="bg-gray-700 text-white border border-gray-500 px-4 py-2 rounded-full hover:bg-black transition-colors">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
