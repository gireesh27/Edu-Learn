"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn, ScrollAnimation, StaggerChildren, StaggerItem, HoverCard } from "@/components/animations"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=1200"
              alt="Students in a meeting"
              fill
              className="object-cover"
            />
          </div>

          <FadeIn className="text-center max-w-3xl mx-auto mt-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-gray-600 text-lg">
              Comprehensive educational solutions designed to meet your learning needs
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Core Offerings Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Core Offerings</h2>
          </ScrollAnimation>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Online Courses",
                icon: "school",
                description:
                  "Self-paced learning experiences with expert-designed curriculum, interactive assignments, and personalized feedback.",
                cta: "Explore Courses",
                link: "/courses",
              },
              {
                title: "Live Workshops",
                icon: "groups",
                description:
                  "Interactive sessions led by industry experts, offering real-time collaboration and hands-on learning opportunities.",
                cta: "View Schedule",
                link: "/workshops",
              },
              {
                title: "1:1 Tutoring",
                icon: "person",
                description:
                  "Personalized instruction tailored to individual learning styles, goals, and pace with dedicated subject experts.",
                cta: "Book a Session",
                link: "/tutoring",
              },
            ].map((service, index) => (
              <StaggerItem key={index}>
                <HoverCard className="bg-gray-50 p-6 rounded-lg h-full flex flex-col">
                  <div className="text-sm text-primary font-medium mb-2">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  <Link href={service.link}>
                    <Button className="bg-primary text-white hover:bg-primary/90 w-full">{service.cta}</Button>
                  </Link>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Specialized Programs Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Specialized Programs</h2>
          </ScrollAnimation>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Tech Bootcamps",
                icon: "code",
                description:
                  "Intensive training programs in programming, data science, and digital marketing with job placement assistance.",
                cta: "Learn More",
                link: "/bootcamps",
              },
              {
                title: "Corporate Training",
                icon: "business",
                description:
                  "Customized learning solutions for organizations to upskill teams and drive business growth.",
                cta: "Request Info",
                link: "/corporate",
              },
              {
                title: "Certification Prep",
                icon: "school",
                description:
                  "Structured preparation for industry-recognized certifications with practice exams and expert guidance.",
                cta: "View Certifications",
                link: "/certifications",
              },
              {
                title: "Youth Programs",
                icon: "child_care",
                description:
                  "Age-appropriate educational activities for K-12 students to develop critical thinking and creativity.",
                cta: "Discover Programs",
                link: "/youth",
              },
            ].map((program, index) => (
              <StaggerItem key={index}>
                <HoverCard className="bg-white p-6 rounded-lg shadow-sm h-full flex flex-col">
                  <div className="text-sm text-primary font-medium mb-2">{program.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{program.description}</p>
                  <Link href={program.link}>
                    <Button className="bg-primary text-white hover:bg-primary/90 w-full">{program.cta}</Button>
                  </Link>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Learning Resources Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Learning Resources</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  title: "Digital Library",
                  icon: "menu_book",
                  description: "Access thousands of e-books, journals, and research papers.",
                },
                {
                  title: "Video Tutorials",
                  icon: "play_circle",
                  description: "Step-by-step visual guides for complex concepts.",
                },
                {
                  title: "Practice Exercises",
                  icon: "assignment",
                  description: "Interactive problems with instant feedback.",
                },
                {
                  title: "Study Groups",
                  icon: "forum",
                  description: "Collaborative learning spaces for peer discussion.",
                },
                {
                  title: "Mobile Learning App",
                  icon: "smartphone",
                  description: "Learn on-the-go with our dedicated mobile application.",
                },
              ].map((resource, index) => (
                <ScrollAnimation key={index} delay={index * 0.1}>
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-3 rounded-full mr-4">
                      <div className="text-primary font-medium">{resource.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{resource.title}</h3>
                      <p className="text-gray-600">{resource.description}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            <ScrollAnimation delay={0.3}>
              <div className="relative h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Learning resources illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Approach</h2>
          </ScrollAnimation>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Needs Assessment",
                icon: "assessment",
                description: "We begin by understanding your specific learning goals and current knowledge level.",
              },
              {
                title: "Custom Planning",
                icon: "architecture",
                description: "Our experts design a personalized learning path tailored to your objectives.",
              },
              {
                title: "Engaging Delivery",
                icon: "psychology",
                description: "Interactive content keeps you motivated and ensures knowledge retention.",
              },
              {
                title: "Progress Tracking",
                icon: "insights",
                description: "Regular assessments and feedback help measure growth and adjust strategies.",
              },
            ].map((step, index) => (
              <StaggerItem key={index}>
                <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                  <div className="text-sm text-primary font-medium mb-2">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8">Schedule a free consultation with our education advisors</p>
            <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-3">Book Consultation</Button>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </main>
  )
}
