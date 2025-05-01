"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { FadeIn, ScrollAnimation, StaggerChildren, StaggerItem, HoverCard } from "@/components/animations"
import { motion } from "framer-motion"
import { Play } from "lucide-react"

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=1200"
              alt="Students with reviews"
              fill
              className="object-cover"
            />
          </div>

          <FadeIn className="text-center max-w-3xl mx-auto mt-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Success Stories</h1>
            <p className="text-gray-600 text-lg">
              Hear firsthand about the transformative learning experiences our students have had
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Testimonial Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <ScrollAnimation>
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
                <TabsTrigger value="all">All Categories</TabsTrigger>
                <TabsTrigger value="coding">Coding Courses</TabsTrigger>
                <TabsTrigger value="business">Business</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="science">Science</TabsTrigger>
              </TabsList>
            </ScrollAnimation>

            <TabsContent value="all" className="mt-6">
              {/* Featured Testimonials */}
              <div className="mb-16">
                <ScrollAnimation>
                  <h2 className="text-3xl font-bold mb-8">Featured Testimonials</h2>
                </ScrollAnimation>

                <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Sarah Johnson",
                      course: "Web Development Bootcamp",
                      image: "/placeholder.svg?height=100&width=100",
                      quote:
                        "The Web Development course completely changed my career trajectory. I went from knowing almost nothing about coding to landing a job as a front-end developer within just three months of completing the course. The curriculum was comprehensive and the instructors were incredibly supportive.",
                    },
                    {
                      name: "Michael Chen",
                      course: "Data Science Masterclass",
                      image: "/placeholder.svg?height=100&width=100",
                      quote:
                        "After completing the Data Science course, I was able to transition from my role in marketing to a data analyst position. The hands-on projects and real-world applications made complex concepts accessible and practical. I'm now using these skills daily in my new career.",
                    },
                    {
                      name: "Priya Patel",
                      course: "UX/UI Design Professional",
                      image: "/placeholder.svg?height=100&width=100",
                      quote:
                        "The design course gave me both the technical skills and confidence to launch my freelance design career. Within weeks of finishing, I had secured my first three clients. The portfolio projects were particularly valuable for showcasing my abilities to potential clients.",
                    },
                  ].map((testimonial, index) => (
                    <StaggerItem key={index}>
                      <HoverCard className="bg-gray-50 p-6 rounded-lg h-full">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              width={48}
                              height={48}
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">{testimonial.name}</h3>
                            <p className="text-primary text-sm">{testimonial.course}</p>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-primary border-primary hover:bg-primary hover:text-white"
                        >
                          Read More
                        </Button>
                      </HoverCard>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
              </div>

              {/* Career Transformation Stories */}
              <div className="mb-16">
                <ScrollAnimation>
                  <h2 className="text-3xl font-bold mb-8">Career Transformation Stories</h2>
                </ScrollAnimation>

                <div className="space-y-4">
                  {[
                    {
                      name: "James Wilson",
                      before: "Retail Manager",
                      after: "Full Stack Developer at Google",
                      image: "/placeholder.svg?height=60&width=60",
                    },
                    {
                      name: "Anna Rodriguez",
                      before: "Executive Assistant",
                      after: "Data Analyst at Amazon",
                      image: "/placeholder.svg?height=60&width=60",
                    },
                    {
                      name: "David Kim",
                      before: "Teacher",
                      after: "Product Designer at Airbnb",
                      image: "/placeholder.svg?height=60&width=60",
                    },
                    {
                      name: "Sophia Martinez",
                      before: "Sales Representative",
                      after: "Digital Marketing Manager at Netflix",
                      image: "/placeholder.svg?height=60&width=60",
                    },
                  ].map((story, index) => (
                    <ScrollAnimation key={index} delay={index * 0.1}>
                      <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                        <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
                          <Image
                            src={story.image || "/placeholder.svg"}
                            alt={story.name}
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-bold">{story.name}</h3>
                          <p className="text-gray-600 text-sm">
                            {story.before} → <span className="text-primary font-medium">{story.after}</span>
                          </p>
                        </div>
                        <Button variant="ghost" size="sm" className="text-primary">
                          View Story
                        </Button>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>

              {/* Success Metrics */}
              <div className="mb-16">
                <ScrollAnimation>
                  <h2 className="text-3xl font-bold mb-8">Success Metrics</h2>
                </ScrollAnimation>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="h-[300px] relative">
                    {/* Bar Chart */}
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "var(--bar-height)" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="absolute bottom-0 left-[5%] w-[10%] bg-primary rounded-t-md"
                      style={{ "--bar-height": "250px" }}
                    />
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "var(--bar-height)" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="absolute bottom-0 left-[20%] w-[10%] bg-primary rounded-t-md"
                      style={{ "--bar-height": "200px" }}
                    />
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "var(--bar-height)" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="absolute bottom-0 left-[35%] w-[10%] bg-primary rounded-t-md"
                      style={{ "--bar-height": "150px" }}
                    />
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "var(--bar-height)" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="absolute bottom-0 left-[50%] w-[10%] bg-primary rounded-t-md"
                      style={{ "--bar-height": "170px" }}
                    />
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "var(--bar-height)" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="absolute bottom-0 left-[65%] w-[10%] bg-primary rounded-t-md"
                      style={{ "--bar-height": "120px" }}
                    />
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "var(--bar-height)" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="absolute bottom-0 left-[80%] w-[10%] bg-primary rounded-t-md"
                      style={{ "--bar-height": "180px" }}
                    />

                    {/* X-axis labels */}
                    <div className="absolute bottom-[-30px] left-[5%] text-sm text-gray-500">Job Offer</div>
                    <div className="absolute bottom-[-30px] left-[20%] text-sm text-gray-500">Salary</div>
                    <div className="absolute bottom-[-30px] left-[35%] text-sm text-gray-500">Promotion</div>
                    <div className="absolute bottom-[-30px] left-[50%] text-sm text-gray-500">New Career</div>
                    <div className="absolute bottom-[-30px] left-[65%] text-sm text-gray-500">Startup</div>
                    <div className="absolute bottom-[-30px] left-[80%] text-sm text-gray-500">Freelance</div>
                  </div>
                </div>
              </div>

              {/* Video Testimonials */}
              <div>
                <ScrollAnimation>
                  <h2 className="text-3xl font-bold mb-8">Video Testimonials</h2>
                </ScrollAnimation>

                <div className="grid grid-cols-1 gap-8">
                  <ScrollAnimation>
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=500&width=900"
                        alt="Video testimonial"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center cursor-pointer"
                        >
                          <Play className="h-8 w-8 text-primary" />
                        </motion.div>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <StaggerChildren className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {Array.from({ length: 8 }).map((_, index) => (
                      <StaggerItem key={index}>
                        <div className="relative aspect-square rounded-lg overflow-hidden cursor-pointer">
                          <Image
                            src={`/placeholder.svg?height=150&width=150&text=Student${index + 1}`}
                            alt={`Student testimonial ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                            <Play className="h-8 w-8 text-white" />
                          </div>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerChildren>
                </div>
              </div>
            </TabsContent>

            {/* Other tabs would have similar content structure */}
            <TabsContent value="coding" className="mt-6">
              <ScrollAnimation>
                <h2 className="text-3xl font-bold mb-8">Coding Course Testimonials</h2>
                <p className="text-gray-600 mb-8">
                  Hear from students who have completed our programming and development courses
                </p>
              </ScrollAnimation>
              {/* Similar content structure as "all" tab but filtered for coding courses */}
            </TabsContent>

            <TabsContent value="business" className="mt-6">
              <ScrollAnimation>
                <h2 className="text-3xl font-bold mb-8">Business Course Testimonials</h2>
                <p className="text-gray-600 mb-8">
                  Success stories from our business, management, and entrepreneurship students
                </p>
              </ScrollAnimation>
              {/* Similar content structure as "all" tab but filtered for business courses */}
            </TabsContent>

            <TabsContent value="design" className="mt-6">
              <ScrollAnimation>
                <h2 className="text-3xl font-bold mb-8">Design Course Testimonials</h2>
                <p className="text-gray-600 mb-8">
                  Creative journeys from our UX/UI, graphic design, and digital art students
                </p>
              </ScrollAnimation>
              {/* Similar content structure as "all" tab but filtered for design courses */}
            </TabsContent>

            <TabsContent value="science" className="mt-6">
              <ScrollAnimation>
                <h2 className="text-3xl font-bold mb-8">Science Course Testimonials</h2>
                <p className="text-gray-600 mb-8">
                  Insights from students in our data science, research, and analytical courses
                </p>
              </ScrollAnimation>
              {/* Similar content structure as "all" tab but filtered for science courses */}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </main>
  )
}
