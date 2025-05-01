"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FadeIn, ScrollAnimation, StaggerChildren, StaggerItem } from "@/components/animations"
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <div className="w-48 h-48 mx-auto mb-8">
              <Image
                src="/placeholder.svg?height=200&width=200&text=CONTACT+US"
                alt="Contact Us"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-gray-600 text-lg">
              Have questions about our courses or services? We're here to help you on your educational journey.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Call Us",
                icon: <Phone className="h-8 w-8 text-primary" />,
                description: "Speak to our friendly support team",
                action: "Call Now",
                link: "tel:+15551234567",
              },
              {
                title: "Email Us",
                icon: <Mail className="h-8 w-8 text-primary" />,
                description: "Get answers to all your questions",
                action: "Send Email",
                link: "mailto:info@edulearn.com",
              },
              {
                title: "Live Chat",
                icon: <MessageSquare className="h-8 w-8 text-primary" />,
                description: "Chat with our support representatives",
                action: "Start Chat",
                link: "#chat",
              },
            ].map((option, index) => (
              <StaggerItem key={index}>
                <div className="bg-gray-50 p-6 rounded-lg text-center h-full flex flex-col">
                  <div className="mx-auto mb-4">{option.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{option.description}</p>
                  <Link href={option.link}>
                    <Button className="bg-primary text-white hover:bg-primary/90 w-full">{option.action}</Button>
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gray-50 p-8 rounded-lg">
            <ScrollAnimation>
              <h2 className="text-3xl font-bold mb-8 text-center">Contact Form</h2>
            </ScrollAnimation>

            <form className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <Input id="name" type="text" placeholder="John Doe" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number (Optional)
                </label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input id="subject" type="text" placeholder="How can we help you?" required />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="Please provide details about your inquiry..." rows={6} required />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90 py-6">
                  Submit Message
                </Button>
              </motion.div>
            </form>
          </div>
        </div>
      </section>

      {/* Visit Campus */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8 text-center">Visit Our Campus</h2>
          </ScrollAnimation>

          <div className="mb-8">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=1200" alt="Campus" fill className="object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollAnimation>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Main Campus</h3>
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 text-primary mr-2 mt-1" />
                  <div>
                    <p className="text-gray-700">
                      123 Education Street
                      <br />
                      Learning City, LC 10001
                      <br />
                      United States
                    </p>
                  </div>
                </div>
                <Button className="bg-primary text-white hover:bg-primary/90">Get Directions</Button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="font-medium">10:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
                <Button className="bg-primary text-white hover:bg-primary/90">Schedule Visit</Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          </ScrollAnimation>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "How do I enroll in a course?",
                  answer:
                    "To enroll in a course, simply browse our course catalog, select the course you're interested in, and click the \"Enroll Now\" button. You'll be guided through the registration and payment process.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For corporate training, we also offer invoice-based payments.",
                },
                {
                  question: "Can I get a refund if I'm not satisfied with a course?",
                  answer:
                    "Yes, we offer a 30-day money-back guarantee for most of our courses. If you're not satisfied with your purchase, you can request a refund within 30 days of enrollment.",
                },
                {
                  question: "Do you offer certificates upon course completion?",
                  answer:
                    "Yes, we provide certificates of completion for all our courses. These certificates can be downloaded, printed, or shared on professional platforms like LinkedIn.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Connect With Us */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
            <p className="text-gray-600 mb-8">
              Follow us on social media to stay updated with the latest courses, events, and educational resources
            </p>
            <div className="flex justify-center space-x-4">
              {["Facebook", "Twitter", "LinkedIn", "Instagram", "YouTube"].map((platform, index) => (
                <motion.a key={index} href="#" whileHover={{ y: -5 }} className="text-primary hover:text-primary/80">
                  {platform}
                </motion.a>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </main>
  )
}
