"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-9xl font-bold text-primary">404</h1>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="space-x-4"
      >
        <Link href="/">
          <Button className="bg-primary text-white hover:bg-primary/90">Return Home</Button>
        </Link>
        <Link href="/courses">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Browse Courses
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}
