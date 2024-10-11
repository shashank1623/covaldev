'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

interface AuthFormProps {
    mode: 'signup' | 'signin'
}

export default function Auth({ mode }: AuthFormProps) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log({ name, email, password })
    }

    const title = mode === 'signup' ? 'Sign up for an account' : 'Sign in to your account'
    const buttonText = mode === 'signup' ? 'Sign Up' : 'Sign In'
    const alternateMode = mode === 'signup' ? 'signin' : 'signup'
    const alternateText = mode === 'signup' ? 'Already have an account? Sign in' : `Don't have an account? Sign up`

    return (
        <div className="min-h-screen bg-black text-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <Link href="/" className="text-2xl font-bold flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 3738 3236">
                            <path fill="#fff" fillRule="evenodd" d="M2530.44 1145.64 1869 0 475.379 2413.82c131.695 51.95 260.914 81.02 384.699 81.61 245.352 1.17 513.692-109.55 774.302-492.04 271.17-397.97 579.18-672.62 896.06-857.75Zm235.57 408.02c-260.46 152.82-514.92 381.09-742.39 714.95-331.66 486.76-735.71 699.86-1165.784 697.82-214.975-1.03-423.92-55.96-619.932-141.29L.982 3235.5H3737.02l-971.01-1681.84Z" clipRule="evenodd"/>
                        </svg>
                        <span className="ml-2">Coval Dev</span>
                    </Link>
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold">
                    {title}
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-black py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {mode === 'signup' && (
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium">
                                    Full name
                                </label>
                                <div className="mt-1">
                                    <Input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        className="bg-black placeholder-gray-400 text-white border border-gray-600 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                        placeholder="Shashank Bhardwaj"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                        )}

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium">
                                Email address
                            </label>
                            <div className="mt-1">
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="bg-black placeholder-gray-400 text-white border border-gray-600 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    placeholder="hello@johndoe.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium">
                                Password
                            </label>
                            <div className="mt-1 relative">
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    placeholder='******'
                                    className="bg-black placeholder-gray-400 text-white border border-gray-600 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <Button type="submit" className="w-full bg-[#0A0A0A] text-white border border-gray-600 px-4 py-2 rounded-full hover:bg-black transition-colors">
                                {buttonText}
                            </Button>
                        </div>
                    </form>

                    <div className="mt-6 relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-700"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-black text-gray-400">Or continue with</span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <Button variant="outline" className="w-full bg-[#0A0A0A] text-white border border-gray-600 px-4 py-2 rounded-full hover:bg-black transition-colors flex items-center justify-center">
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                        </Button>
                    </div>

                    <p className="mt-6 text-center text-sm text-gray-400">
                        {alternateText}{' '}
                        <Link href={`/${alternateMode}`} className="font-medium text-white hover:underline">
                            {alternateMode === 'signup' ? 'Sign up' : 'Sign in'}
                        </Link>
                    </p>

                    {mode === 'signup' && (
                        <p className="mt-6 text-center text-xs text-gray-400">
                            By clicking on sign up, you agree to our{' '}
                            <a href="/terms" className="underline">
                                Terms of Service
                            </a>{' '}
                            and{' '}
                            <a href="/privacy" className="underline">
                                Privacy Policy
                            </a>
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}
