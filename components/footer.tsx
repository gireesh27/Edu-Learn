"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations"

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <StaggerItem>
            <div>
              <Link href="/" className="flex items-center mb-4">
                <motion.span whileHover={{ scale: 1.05 }} className="text-2xl font-bold">
                  <span className="text-primary">Edu</span>Learn
                </motion.span>
              </Link>
              <p className="text-gray-600 mb-4">
                Empowering individuals through accessible, high-quality education to achieve their full potential.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <Facebook size={20} />, href: "#" },
                  { icon: <Twitter size={20} />, href: "#" },
                  { icon: <Instagram size={20} />, href: "#" },
                  { icon: <Linkedin size={20} />, href: "#" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="text-gray-500 hover:text-primary transition-colors"
                    whileHover={{ y: -3 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </StaggerItem>

          {/* Quick Links */}
          <StaggerItem>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Courses", href: "/courses" },
                  { label: "Testimonials", href: "/testimonials" },
                  { label: "Blog", href: "/blog" },
                  { label: "Contact", href: "/contact" },
                ].map((link, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <Link href={link.href} className="text-gray-600 hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          {/* Contact Info */}
          <StaggerItem>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin size={20} className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">123 Education Street, Learning City, 10001</span>
                </li>
                <li className="flex items-center">
                  <Phone size={20} className="text-primary mr-2 flex-shrink-0" />
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <Mail size={20} className="text-primary mr-2 flex-shrink-0" />
                  <span className="text-gray-600">info@edulearn.com</span>
                </li>
              </ul>
            </div>
          </StaggerItem>

          {/* Newsletter */}
          <StaggerItem>
            <div>
              <h3 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h3>
              <p className="text-gray-600 mb-4">Stay updated with our latest courses and educational resources.</p>
              <form className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <motion.button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </StaggerItem>
        </StaggerChildren>

        <FadeIn className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-600">© {new Date().getFullYear()} EduLearn. All rights reserved.</p>
        </FadeIn>
      </div>
    </footer>
  )
}

export default Footer
