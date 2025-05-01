"use client"

import Navbar from "@/components/navbar"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Star, Clock, Users, BookOpen, CheckCircle, Award, Play, ShoppingCart } from "lucide-react"
import { FadeIn, ScrollAnimation, StaggerChildren, StaggerItem } from "@/components/animations"
import { motion } from "framer-motion"
import { useCart } from "@/components/cart-provider"
import { useState } from "react"

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const { addItem } = useCart()
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  
  // This would normally come from a database or API
  const course = {
    id: params.id,
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    instructorTitle: "Senior Web Developer & Instructor",
    instructorImage: "/placeholder.svg?height=100&width=100",
    level: "Beginner",
    duration: "48 hours",
    lectures: "164",
    students: "12,345",
    rating: 4.8,
    reviews: "1,234",
    price: 89.99,
    originalPrice: 129.99,
    image: "/placeholder.svg?height=400&width=800",
    description:
      "This comprehensive web development bootcamp covers everything you need to know to build professional, responsive websites from scratch. You'll learn HTML, CSS, JavaScript, React, Node.js, and more through hands-on projects and real-world examples.",
    whatYouWillLearn: [
      "Build responsive websites using HTML5, CSS3, and JavaScript",
      "Create dynamic web applications with React.js",
      "Develop backend services using Node.js and Express",
      "Work with databases like MongoDB and MySQL",
      "Deploy your applications to the cloud",
      "Implement authentication and authorization",
      "Optimize website performance and SEO",
      "Debug and troubleshoot common web development issues",
    ],
    curriculum: [
      {
        title: "Introduction to Web Development",
        lectures: 8,
        duration: "3 hours",
        content: [
          "Course Overview and Setup",
          "How the Internet Works",
          "HTML Basics",
          "CSS Fundamentals",
          "JavaScript Introduction",
          "Setting Up Your Development Environment",
          "Version Control with Git",
          "Project: Your First Web Page",
        ],
      },
      {
        title: "HTML5 and CSS3 Deep Dive",
        lectures: 12,
        duration: "6 hours",
        content: [
          "HTML5 Semantic Elements",
          "Forms and Validation",
          "CSS Box Model",
          "Flexbox Layout",
          "CSS Grid",
          "Responsive Design",
          "CSS Variables",
          "CSS Animations",
          "SASS/SCSS",
          "CSS Frameworks Overview",
          "Bootstrap 5",
          "Project: Responsive Portfolio Website",
        ],
      },
      {
        title: "JavaScript Programming",
        lectures: 15,
        duration: "8 hours",
        content: [
          "JavaScript Syntax and Variables",
          "Control Flow and Loops",
          "Functions and Scope",
          "Arrays and Objects",
          "DOM Manipulation",
          "Events and Event Handling",
          "Asynchronous JavaScript",
          "Promises and Async/Await",
          "Fetch API and AJAX",
          "Error Handling",
          "ES6+ Features",
          "JavaScript Modules",
          "Object-Oriented JavaScript",
          "Functional Programming Concepts",
          "Project: Interactive Web Application",
        ],
      },
    ],
    requirements: [
      "Basic computer skills",
      "No prior programming experience required",
      "A computer with internet access",
      "Willingness to learn and practice",
    ],
    targetAudience: [
      "Beginners with no coding experience",
      "Students looking to build a career in web development",
      "Designers wanting to expand their skills",
      "Entrepreneurs building their own websites",
      "Anyone interested in learning how to code",
    ],
  }

  const handleAddToCart = () => {
    addItem({
      id: course.id,
      title: course.title,
      price: course.price,
      image: course.image,
    })
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Course Header */}
      <section className="pt-24 pb-8 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <FadeIn className="lg:col-span-2">
              <div className="mb-4">
                <Badge className="bg-primary text-white">{course.level}</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg text-gray-700 mb-6">{course.description}</p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span className="font-medium mr-1">{course.rating}</span>
                  <span className="text-gray-500">({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-500 mr-1" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 mr-1" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-gray-500 mr-1" />
                  <span>{course.lectures} lectures</span>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  <Image
                    src={course.instructorImage || "/placeholder.svg"}
                    alt={course.instructor}
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium">{course.instructor}</p>
                    <p className="text-sm text-gray-500">{course.instructorTitle}</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-24">
                <div className="aspect-video relative">
                  {isVideoPlaying ? (
                    <iframe
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                      title="Course Preview"
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <>
                      <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <motion.button
                          className="rounded-full w-16 h-16 flex items-center justify-center bg-white/90 hover:bg-white text-primary"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setIsVideoPlaying(true)}
                        >
                          <Play className="h-8 w-8" />
                        </motion.button>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl font-bold text-primary">${course.price.toFixed(2)}</div>
                    <div className="text-lg text-gray-500 line-through">${course.originalPrice.toFixed(2)}</div>
                  </div>
                  <div className="space-y-3 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button className="w-full bg-primary text-white hover:bg-primary/90 py-6" onClick={handleAddToCart}>
                        <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white py-6"
                      >
                        Enroll Now
                      </Button>
                    </motion.div>
                  </div>
                  <div className="text-sm text-gray-500 text-center">30-Day Money-Back Guarantee</div>
                  <div className="mt-6 space-y-3">
                    <h4 className="font-medium">This course includes:</h4>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                      <div>
                        <p>{course.duration} on-demand video</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <BookOpen className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                      <div>
                        <p>{course.lectures} lectures</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                      <div>
                        <p>Assignments and quizzes</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Award className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                      <div>
                        <p>Certificate of completion</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <Tabs defaultValue="curriculum" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="curriculum" className="mt-6">
                <div className="bg-white rounded-lg border p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Course Content</h2>
                    <div className="text-sm text-gray-500">
                      {course.lectures} lectures • {course.duration} total
                    </div>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    {course.curriculum.map((section, index) => (
                      <AccordionItem key={index} value={`section-${index}`}>
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex flex-col items-start text-left">
                            <h3 className="font-semibold">{section.title}</h3>
                            <p className="text-sm text-gray-500">
                              {section.lectures} lectures • {section.duration}
                            </p>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-3">
                            {section.content.map((lecture, lectureIndex) => (
                              <motion.li 
                                key={lectureIndex} 
                                className="flex items-center"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: lectureIndex * 0.05 }}
                              >
                                <Play className="h-4 w-4 text-gray-500 mr-3" />
                                <span>{lecture}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </TabsContent>

              <TabsContent value="overview" className="mt-6">
                <div className="bg-white rounded-lg border p-6">
                  <h2 className="text-2xl font-bold mb-6">What You Will Learn</h2>
                  <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {course.whatYouWillLearn.map((item, index) => (
                      <StaggerItem key={index}>
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <p>{item}</p>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerChildren>

                  <ScrollAnimation>
                    <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                    <ul className="list-disc pl-5 mb-8 space-y-2">
                      {course.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </ScrollAnimation>

                  <ScrollAnimation>
                    <h2 className="text-2xl font-bold mb-4">Who This Course is For</h2>
                    <ul className="list-disc pl-5 space-y-2">
                      {course.targetAudience.map((audience, index) => (
                        <li key={index}>{audience}</li>
                      ))}
                    </ul>
                  </ScrollAnimation>
                </div>
              </TabsContent>

              <TabsContent value="instructor" className="mt-6">
                <div className="bg-white rounded-lg border p-6">
                  <ScrollAnimation>
                    <div className="flex items-start mb-6">
                      <Image
                        src={course.instructorImage || "/placeholder.svg"}
                        alt={course.instructor}
                        width={100}
                        height={100}
                        className="rounded-full mr-6"
                      />
                      <div>
                        <h2 className="text-2xl font-bold mb-2">{course.instructor}</h2>
                        <p className="text-gray-500 mb-4">{course.instructorTitle}</p>
                        <div className="flex items-center mb-4">
                          <Star className="h-5 w-5 text-yellow-400 mr-1" />
                          <span className="font-medium mr-1">4.8</span>
                          <span className="text-gray-500">Instructor Rating</span>
                        </div>
                        <div className="flex items-center space-x-4 text-gray-500">
                          <div>
                            <span className="font-medium">25</span> Courses
                          </div>
                          <div>
                            <span className="font-medium">50,000+</span> Students
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">About the Instructor</h3>
                      <p className="text-gray-700 mb-4">
                        Sarah Johnson is a senior web developer with over 10 years of experience in the industry. She has
                        worked with major tech companies and has a passion for teaching coding skills to beginners. Sarah
                        specializes in front-end development and has helped thousands of students launch their careers in
                        web development.
                      </p>
                      <p className="text-gray-700">
                        She holds a Master's degree in Computer Science and has contributed to several open-source projects.
                        Sarah is known for her clear, practical teaching style and her ability to break down complex
                        concepts into easy-to-understand lessons.
                      </p>
                    </div>
                  </ScrollAnimation>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="bg-white rounded-lg border p-6">
                  <ScrollAnimation>
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
                      <div>
                        <h2 className="text-2xl font-bold mb-2">Student Reviews</h2>
                        <div className="flex items-center">
                          <Star className="h-5 w-5 text-yellow-400 mr-1" />
                          <span className="font-medium mr-1">{course.rating}</span>
                          <span className="text-gray-500">({course.reviews} reviews)</span>
                        </div>
                      </div>
                      <Button className="mt-4 md:mt-0">Write a Review</Button>
                    </div>
                  </ScrollAnimation>
                  <StaggerChildren className="space-y-6">
  {[
    {
      name: "John D.",
      date: "2 months ago",
      rating: 5,
      comment:
        "This course exceeded my expectations. The instructor explains complex concepts in a way that's easy to understand. I went from knowing nothing about web development to building my own portfolio website. Highly recommended!",
    },
    {
      name: "Maria S.",
      date: "3 months ago",
      rating: 4,
      comment:
        "Great course with lots of practical examples. The projects were challenging but very helpful for reinforcing the concepts. The only reason I'm giving 4 stars instead of 5 is that some sections could use more detailed explanations.",
    },
    {
      name: "Robert T.",
      date: "1 month ago",
      rating: 5,
      comment:
        "Sarah is an amazing instructor! Her teaching style is clear and engaging. The course content is comprehensive and up-to-date with the latest web development practices. I landed a junior developer job after completing this course.",
    },
  ].map((review, index) => (
    <StaggerItem key={index}>
      <div className="border-b border-gray-200 pb-6 last:border-0">
        <div className="flex items-center justify-between mb-2">
          <div className="font-medium">{review.name}</div>
          <div className="text-sm text-gray-500">{review.date}</div>
        </div>
        <div className="text-gray-700">{review.comment}</div>
      </div>
    </StaggerItem>
  ))}
</StaggerChildren>

                </div>
              </TabsContent>
            </Tabs>
          </ScrollAnimation>
        </div>
      </section>

      {/* Course Content */}
    </main>
  )
}
