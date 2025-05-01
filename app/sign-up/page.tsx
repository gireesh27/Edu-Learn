"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff } from "lucide-react"
import { AnimatedText, AnimatedButton, AnimatedSection } from "@/app/lib/aceternity-ui"

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would connect to an authentication service
    alert("Sign up functionality would be implemented here!")
  }

  const handleSocialSignUp = (provider: string) => {
    // In a real app, this would redirect to OAuth provider
    alert(`Sign up with ${provider} would be implemented here!`)
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Illustration */}
      <div className="hidden md:flex md:w-1/2 bg-gray-50 items-center justify-center p-8">
        <AnimatedSection className="max-w-md">
          <div className="relative w-full h-[500px]">
            <Image
              src="/assets/images/signup-illustration.jpg"
              alt="Sign Up Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
          <AnimatedText
            text="Join our learning community today"
            className="text-2xl font-bold text-center mt-6 flex flex-wrap justify-center"
          />
          <p className="text-gray-600 text-center mt-4">
            Get access to thousands of courses taught by industry experts
          </p>
        </AnimatedSection>
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md">
          {/* Language Selector */}
          <div className="flex justify-end mb-8">
            <select className="text-sm text-gray-600 bg-transparent border-none focus:outline-none focus:ring-0">
              <option value="en-us">English (United States)</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>

          <AnimatedText text="Sign Up" className="text-3xl font-bold mb-8 text-center flex justify-center" />

          {/* Social Sign Up */}
          <div className="space-y-4 mb-6">
            <AnimatedButton
              className="w-full flex items-center justify-center gap-2 py-6 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              onClick={() => handleSocialSignUp("Google")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue With Google
            </AnimatedButton>

            <AnimatedButton
              className="w-full flex items-center justify-center gap-2 py-6 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              onClick={() => handleSocialSignUp("GitHub")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Continue With GitHub
            </AnimatedButton>
          </div>

          <div className="relative flex items-center justify-center mb-6">
            <div className="border-t border-gray-300 w-full"></div>
            <div className="bg-white px-4 text-sm text-gray-500 absolute">OR</div>
          </div>

          {/* Email Sign Up Form */}
          <form className="space-y-6" onSubmit={handleSignUp}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <Input id="email" type="email" placeholder="example@email.com" required className="w-full py-6" />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  className="w-full py-6"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Use 8 or more characters with a mix of letters, numbers & symbols
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Checkbox id="terms" required />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  Agree to our{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms of use
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <div className="flex items-center gap-2">
                <Checkbox id="newsletter" />
                <label htmlFor="newsletter" className="text-sm text-gray-700">
                  Subscribe to our monthly newsletter
                </label>
              </div>
            </div>

            <AnimatedButton type="submit" className="w-full bg-primary text-white hover:bg-primary/90 py-6 rounded-md">
              Sign Up
            </AnimatedButton>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
