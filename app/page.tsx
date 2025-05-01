"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Award, Clock, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { SlideIn, StaggerChildren, StaggerItem, ScrollAnimation, HoverCard } from "@/components/animations"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-[#38bdf8]">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <SlideIn direction="left">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="block"
                  >
                    Transform
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="block"
                  >
                    Your Future
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="block mt-2"
                  >
                    With Quality{" "}
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.7, delay: 0.6 }}
                      className="text-5xl md:text-6xl lg:text-7xl"
                    >
                      Education
                    </motion.span>
                  </motion.span>
                </h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="mt-6 text-white text-lg max-w-md"
                >
                  Discover courses taught by industry experts and enhance your skills for tomorrow's challenges
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="mt-8 flex flex-wrap gap-4"
                >
                  <Link href="/courses">
                    <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full">
                      Explore Courses
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button
                      variant="outline"
                      className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-full"
                    >
                      Learn More
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </SlideIn>
            <SlideIn direction="right" delay={0.3} className="hidden lg:block">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Student with books"
                width={600}
                height={600}
                className="object-cover"
              />
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Courses</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Expand your knowledge with our most popular and highly-rated courses
              </p>
            </div>
          </ScrollAnimation>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Web Development",
                category: "CODING",
                description: "Master HTML, CSS, JavaScript, and modern frameworks to build responsive websites",
                image: "/placeholder.svg?height=200&width=300",
                price: "$89.99",
              },
              {
                title: "Data Science",
                category: "TECH",
                description: "Learn data analysis, visualization, and machine learning with Python",
                image: "/placeholder.svg?height=200&width=300",
                price: "$79.99",
              },
              {
                title: "Business Management",
                category: "BUSINESS",
                description: "Develop essential leadership skills and business strategies for career growth",
                image: "/placeholder.svg?height=200&width=300",
                price: "$69.99",
              },
            ].map((course, index) => (
              <StaggerItem key={index}>
                <HoverCard className="bg-gray-50 rounded-lg overflow-hidden">
                  <div className="aspect-video relative">
                    <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary font-medium mb-2">{course.category}</div>
                    <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-primary">{course.price}</span>
                      <Link href="/courses">
                        <Button size="sm" className="bg-primary text-white hover:bg-primary/90">
                          Enroll Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We provide a comprehensive learning experience with features designed to help you succeed
              </p>
            </div>
          </ScrollAnimation>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Expert Instructors",
                icon: <Users className="h-10 w-10 text-primary" />,
                description: "Learn from industry professionals with years of real-world experience",
              },
              {
                title: "Flexible Learning",
                icon: <Clock className="h-10 w-10 text-primary" />,
                description: "Study at your own pace with lifetime access to course materials",
              },
              {
                title: "24/7 Support",
                icon: <Award className="h-10 w-10 text-primary" />,
                description: "Get help whenever you need it with our dedicated support team",
              },
              {
                title: "Certificates",
                icon: <BookOpen className="h-10 w-10 text-primary" />,
                description: "Earn recognized certificates to showcase your new skills to employers",
              },
            ].map((feature, index) => (
              <StaggerItem key={index}>
                <HoverCard className="bg-white p-6 rounded-lg shadow-sm h-full">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Testimonials</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear what our students have to say about their learning experiences with EduLearn
              </p>
            </div>
          </ScrollAnimation>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "WEB DEVELOPMENT",
                image: "/placeholder.svg?height=100&width=100",
                quote:
                  "The course exceeded my expectations. I landed a job as a front-end developer within a month of completion.",
              },
              {
                name: "Michael Chen",
                role: "DATA SCIENCE",
                image: "/placeholder.svg?height=100&width=100",
                quote:
                  "Comprehensive curriculum with practical projects. The instructors were knowledgeable and supportive.",
              },
              {
                name: "Emily Rodriguez",
                role: "BUSINESS MANAGEMENT",
                image: "/placeholder.svg?height=100&width=100",
                quote:
                  "This course transformed my career. The skills I gained helped me secure a promotion within weeks.",
              },
            ].map((testimonial, index) => (
              <StaggerItem key={index}>
                <HoverCard className="bg-gray-50 border-none p-6 rounded-lg">
                  <div className="text-sm text-primary font-medium mb-2">{testimonial.role}</div>
                  <h3 className="text-xl font-bold mb-3">{testimonial.name}</h3>
                  <p className="text-gray-600">"{testimonial.quote}"</p>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest from Our Blog</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Stay updated with educational insights, industry trends, and success stories
              </p>
            </div>
          </ScrollAnimation>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Future of Online Learning",
                excerpt: "Exploring emerging technologies and methodologies in education",
                image: "/placeholder.svg?height=200&width=400",
                date: "Apr 15, 2023",
              },
              {
                title: "5 Career Development Tips",
                excerpt: "Essential strategies for professional growth in today's job market",
                image: "/placeholder.svg?height=200&width=400",
                date: "Mar 28, 2023",
              },
              {
                title: "Learning Effectively Online",
                excerpt: "Maximize your online learning experience with these proven techniques",
                image: "/placeholder.svg?height=200&width=400",
                date: "Feb 12, 2023",
              },
            ].map((post, index) => (
              <StaggerItem key={index}>
                <HoverCard className="bg-white overflow-hidden rounded-lg shadow-sm">
                  <div className="aspect-video relative">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link href="/blog" className="text-primary flex items-center font-medium hover:underline">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <ScrollAnimation className="text-center mt-12">
            <Link href="/blog">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full"
              >
                View All Articles
              </Button>
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Start Your Learning Journey?</h2>
            <p className="text-white/90 mb-8">
              Join thousands of students already learning with EduLearn and transform your future today.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
              <Link href="/sign-up">
                <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-medium">
                  Sign Up Now
                </Button>
              </Link>
            </motion.div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </main>
  )
}
