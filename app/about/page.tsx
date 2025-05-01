"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FadeIn, ScrollAnimation, StaggerChildren, StaggerItem } from "@/components/animations"
import { motion } from "framer-motion"

import about from "@/public/images/about.png"
import profile from "@/public/images/profile.png";

export default function AboutPage() {
  return (
    <main className="mx-auto">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
            <Image
              src={about}
              alt="Students collaborating"
              fill
              className="object-fit"
            />
          </div>

          <FadeIn className="text-center max-w-3xl mx-auto mt-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About EduLearn</h1>
            <p className="text-gray-600 text-lg">Empowering learners worldwide with quality education since 2015</p>
          </FadeIn>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-center text-lg leading-relaxed">
              Founded in 2015, EduLearn began with a simple mission: to make quality education accessible to everyone.
              After starting as a small team of passionate educators, the company has grown into a global learning
              platform that serves thousands of students across the countries. Our journey reflects our commitment to
              innovation, excellence, and student success.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Mission & Values</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <ScrollAnimation>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-sm text-primary font-medium mb-2">MISSION</div>
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To democratize education by providing accessible, high-quality learning experiences that empower
                  individuals to achieve their full potential.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation >
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-sm text-primary font-medium mb-2">VISION</div>
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  A world where quality education is a right, not a privilege, and where learning knows no boundaries of
                  geography, economics, or background.
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Inclusivity",
                icon: "diversity_3",
                description:
                  "We believe education should be accessible to all, regardless of background or circumstances.",
              },
              {
                title: "Excellence",
                icon: "auto_awesome",
                description:
                  "We are committed to maintaining the highest standards in our curriculum and teaching methods.",
              },
              {
                title: "Innovation",
                icon: "lightbulb",
                description:
                  "We continuously evolve our approach to meet the changing needs of learners and industries.",
              },
              {
                title: "Community",
                icon: "handshake",
                description:
                  "We foster a supportive learning environment where collaboration and mutual respect thrive.",
              },
            ].map((value, index) => (
              <StaggerItem key={index}>
                <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                  <div className="text-sm text-primary font-medium mb-2">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Meet Our Leadership Team</h2>
          </ScrollAnimation>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "FOUNDER & CEO",
                image: profile,
                bio: "Former professor with 15+ years in education technology. PhD in Educational Psychology from Stanford University.",
              },
              {
                name: "Michael Chen",
                role: "CHIEF ACADEMIC OFFICER",
                image: profile,
                bio: "Education innovator with experience at leading universities. Specializes in curriculum development and learning outcomes.",
              },
              {
                name: "Emily Rodriguez",
                role: "HEAD OF TECHNOLOGY",
                image: profile,
                bio: "Tech industry veteran focused on creating intuitive learning platforms. Previously led engineering teams at major EdTech companies.",
              },
            ].map((member, index) => (
              <StaggerItem key={index}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-sm text-primary font-medium mb-2">{member.role}</div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto my-4">
                    <Image
                      src={member.image || profile}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Impact</h2>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <div className="h-[400px] relative">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "var(--bar-height)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute bottom-0 left-[10%] w-[10%] bg-primary rounded-t-md"
                    style={{ "--bar-height": "50px" } as any}
                  />
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "var(--bar-height)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="absolute bottom-0 left-[25%] w-[10%] bg-primary rounded-t-md"
                    style={{ "--bar-height": "100px" } as any}
                  />
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "var(--bar-height)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="absolute bottom-0 left-[40%] w-[10%] bg-primary rounded-t-md"
                    style={{ "--bar-height": "150px" } as any}
                  />
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "var(--bar-height)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="absolute bottom-0 left-[55%] w-[10%] bg-primary rounded-t-md"
                    style={{ "--bar-height": "220px" } as any}
                  />
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "var(--bar-height)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="absolute bottom-0 left-[70%] w-[10%] bg-primary rounded-t-md"
                    style={{ "--bar-height": "300px" } as any}
                  />
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "var(--bar-height)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-0 left-[85%] w-[10%] bg-primary rounded-t-md"
                    style={{ "--bar-height": "350px" } as any}
                  />

                  {/* X-axis labels */}
                  <div className="absolute bottom-[-30px] left-[10%] text-sm text-gray-500">2018</div>
                  <div className="absolute bottom-[-30px] left-[25%] text-sm text-gray-500">2019</div>
                  <div className="absolute bottom-[-30px] left-[40%] text-sm text-gray-500">2020</div>
                  <div className="absolute bottom-[-30px] left-[55%] text-sm text-gray-500">2021</div>
                  <div className="absolute bottom-[-30px] left-[70%] text-sm text-gray-500">2022</div>
                  <div className="absolute bottom-[-30px] left-[85%] text-sm text-gray-500">2023</div>

                  {/* Y-axis labels */}
                  <div className="absolute bottom-0 left-[-40px] text-sm text-gray-500">0</div>
                  <div className="absolute bottom-[100px] left-[-40px] text-sm text-gray-500">25K</div>
                  <div className="absolute bottom-[200px] left-[-40px] text-sm text-gray-500">50K</div>
                  <div className="absolute bottom-[300px] left-[-40px] text-sm text-gray-500">75K</div>
                  <div className="absolute bottom-[400px] left-[-40px] text-sm text-gray-500">100K</div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Students Enrolled Per Year</h2>
          </ScrollAnimation>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                value: "100,000+",
                label: "Students worldwide",
                icon: "groups",
              },
              {
                value: "50+",
                label: "Countries reached",
                icon: "public",
              },
              {
                value: "200+",
                label: "Expert instructors",
                icon: "school",
              },
              {
                value: "95%",
                label: "Completion rate",
                icon: "workspace_premium",
              },
            ].map((stat, index) => (
              <StaggerItem key={index}>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="text-sm text-primary font-medium mb-2">{stat.icon}</div>
                  <h3 className="text-3xl text-primary font-bold mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
            <p className="text-gray-600 mb-8">
              We're always looking for passionate educators and innovators to join our mission
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-primary text-white hover:bg-primary/90">View Open Positions</Button>
            </motion.div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </main>
  )
}
