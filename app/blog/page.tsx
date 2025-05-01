"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FadeIn, ScrollAnimation, StaggerChildren, StaggerItem, HoverCard } from "@/components/animations"
import { Search, ArrowRight, Calendar, Clock } from "lucide-react"

import blog from "@/public/images/blog_Image.png";
import article from "@/public/images/article.png";
import ai from "@/public/images/ai.png";
import article1 from "@/public/images/article1.png";
import article2 from "@/public/images/article2.png";

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden">
            <Image src={blog} alt="Blog header" fill className="object-cover" />
          </div>

          <FadeIn className="text-center max-w-3xl mx-auto mt-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">EduLearn Blog</h1>
            <p className="text-gray-600 text-lg">
              Insights, tips, and trends in education, career development, and lifelong learning
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12">
            <div className="w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input type="text" placeholder="Search articles..." className="pl-10 pr-4 py-2 w-full md:w-[300px]" />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                "Popular Articles",
                "Career Development",
                "Learning Tips",
                "Student Stories",
                "Industry Insights",
                "Remote Work",
              ].map((category, index) => (
                <Button key={index} variant="outline" size="sm" className="rounded-full text-sm">
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
          </ScrollAnimation>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "The Future of Remote Learning",
                category: "EDUCATION",
                excerpt: "Exploring emerging technologies and methodologies that are reshaping online education",
                image: article,
                date: "Apr 15, 2023",
                readTime: "8 min read",
              },
              {
                title: "Top Skills Employers Want in 2023",
                category: "CAREER",
                excerpt:
                  "Discover the most in-demand skills that can help you stand out in today's competitive job market",
                image: article,
                date: "Mar 28, 2023",
                readTime: "6 min read",
              },
              {
                title: "Effective Learning Strategies",
                category: "LEARNING",
                excerpt: "Science-backed techniques to improve retention, focus, and overall learning efficiency",
                image: article,
                date: "Feb 12, 2023",
                readTime: "5 min read",
              },
            ].map((article, index) => (
              <StaggerItem key={index}>
                <HoverCard className="bg-white overflow-hidden rounded-lg shadow-sm h-full flex flex-col">
                  <div className="aspect-video relative">
                    <Image
                      src={article.image || article}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white text-xs font-medium px-2.5 py-1 rounded">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <div className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{article.excerpt}</p>
                    <Link
                      href={`/blog/${article.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-primary flex items-center font-medium hover:underline mt-auto"
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
          </ScrollAnimation>

          <div className="space-y-6">
            {[
              {
                title: "How AI is Changing Education Assessment",
                category: "TECHNOLOGY",
                excerpt:
                  "Exploring how artificial intelligence is transforming the way we evaluate student learning and progress",
                image: ai,
                date: "May 5, 2023",
                readTime: "7 min read",
              },
              {
                title: "Building a Portfolio That Gets You Hired",
                category: "CAREER",
                excerpt:
                  "Tips and strategies for creating a compelling portfolio that showcases your skills to potential employers",
                image: ai,
                date: "Apr 28, 2023",
                readTime: "9 min read",
              },
              {
                title: "The Power of Micro-Learning: Small Steps, Big Results",
                category: "LEARNING",
                excerpt:
                  "How breaking down learning into small, manageable chunks can lead to better retention and skill development",
                image: ai,
                date: "Apr 15, 2023",
                readTime: "5 min read",
              },
              {
                title: "From Beginner to Senior Developer in 2 Years",
                category: "SUCCESS STORY",
                excerpt:
                  "A step-by-step journey of how one student accelerated their programming career through strategic learning",
                image: ai,
                date: "Apr 10, 2023",
                readTime: "10 min read",
              },
              {
                title: "Cybersecurity Skills That Opportunities for New Grads",
                category: "INDUSTRY",
                excerpt:
                  "The most in-demand cybersecurity skills that can help recent graduates land their first job in the field",
                image: ai,
                date: "Apr 3, 2023",
                readTime: "6 min read",
              },
              {
                title: "Balancing Full-Time Work and Online Learning",
                category: "PRODUCTIVITY",
                excerpt:
                  "Practical strategies for managing your time effectively while pursuing education alongside a career",
                image: ai,
                date: "Mar 27, 2023",
                readTime: "8 min read",
              },
            ].map((article, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="flex flex-col md:flex-row gap-6 bg-gray-50 p-6 rounded-lg">
                  <div className="w-full md:w-24 h-24 relative flex-shrink-0">
                    <Image
                      src={article.image || ai}
                      alt={article.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center mb-2">
                      <span className="text-xs font-medium text-primary mr-3">{article.category}</span>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center text-xs text-gray-500 ml-3">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                    <p className="text-gray-600 mb-3">{article.excerpt}</p>
                    <Link
                      href={`/blog/${article.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-primary flex items-center font-medium hover:underline"
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8">Popular Topics</h2>
          </ScrollAnimation>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              "Web Development",
              "Data Science",
              "UX/UI Design",
              "Digital Marketing",
              "Career Transitions",
              "Remote Work",
              "Learning Methods",
              "Industry Trends",
            ].map((topic, index) => (
              <ScrollAnimation key={index} delay={index * 0.05}>
                <Button
                  variant="outline"
                  className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  {topic}
                </Button>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Editor's Picks */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8">Editor's Picks</h2>
          </ScrollAnimation>

          <div className="space-y-6">
            <ScrollAnimation>
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
                <Image
                  src={article1}
                  alt="Editor's pick featured article"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                  <span className="text-white text-sm font-medium bg-primary px-2 py-1 rounded mb-3 w-fit">
                    FEATURED
                  </span>
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                    The Future of Work: How Education is Adapting to Industry 4.0
                  </h3>
                  <p className="text-white/90 mb-4 max-w-2xl">
                    An in-depth look at how educational institutions and online learning platforms are evolving to
                    prepare students for the rapidly changing job market
                  </p>
                  <Button className="bg-white text-primary hover:bg-gray-100 w-fit">Read Article</Button>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
                <Image
                  src={article2}
                  alt="Editor's pick second article"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                  <span className="text-white text-sm font-medium bg-primary px-2 py-1 rounded mb-3 w-fit">
                    CASE STUDY
                  </span>
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                    From College Dropout to Tech Lead: A Learning Journey
                  </h3>
                  <p className="text-white/90 mb-4 max-w-2xl">
                    The inspiring story of how one student used online education to build a successful career in
                    technology without a traditional degree
                  </p>
                  <Button className="bg-white text-primary hover:bg-gray-100 w-fit">Read Article</Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Get the latest articles, learning resources, and industry insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input type="email" placeholder="Enter your email" className="flex-grow" />
              <Button className="bg-primary text-white hover:bg-primary/90">Subscribe</Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </main>
  )
}
