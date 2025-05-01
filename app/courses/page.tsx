import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, Filter, Search } from "lucide-react"

import course_image from "@/public/images/course_image.png"
import web_dev from "@/public/images/web_dev.jpg";
export default function CoursesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6  ">
        <div className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden pb-8 md:pb-16">
            <Image 
            src={course_image}
            alt="course"
            fill
            className="object-cover"
            />
            </div>
          <div className="text-center max-w-3xl mx-auto pb-8 md:pb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Course Catalog</h1>
            <p className="text-xl text-gray-600">
              Expand your knowledge with our diverse selection of expert-led courses
            </p>

          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  <Filter className="h-5 w-5 text-gray-500" />
                </div>

                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input type="text" placeholder="Search courses..." className="pl-10" />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="data-science">Data Science</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Level Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
                  <div className="space-y-2">
                    {["Beginner", "Intermediate", "Advanced", "All Levels"].map((level) => (
                      <div key={level} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`level-${level.toLowerCase()}`}
                          className="h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary"
                        />
                        <label htmlFor={`level-${level.toLowerCase()}`} className="ml-2 text-sm text-gray-700">
                          {level}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                  <div className="space-y-2">
                    {["Free", "Paid", "Subscription"].map((price) => (
                      <div key={price} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`price-${price.toLowerCase()}`}
                          className="h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary"
                        />
                        <label htmlFor={`price-${price.toLowerCase()}`} className="ml-2 text-sm text-gray-700">
                          {price}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Duration Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                  <div className="space-y-2">
                    {["0-2 Hours", "3-6 Hours", "7-16 Hours", "17+ Hours"].map((duration) => (
                      <div key={duration} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`duration-${duration.toLowerCase().replace(/\s+/g, "-")}`}
                          className="h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary"
                        />
                        <label
                          htmlFor={`duration-${duration.toLowerCase().replace(/\s+/g, "-")}`}
                          className="ml-2 text-sm text-gray-700"
                        >
                          {duration}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Courses Grid */}
            <div className="lg:col-span-3">
              {/* Sorting and View Options */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div className="flex items-center">
                  <span className="text-gray-600 mr-2">Sort by:</span>
                  <Select defaultValue="popular">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Popularity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Popularity</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Tabs defaultValue="grid" className="w-[200px]">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="grid">Grid</TabsTrigger>
                      <TabsTrigger value="list">List</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </div>

              {/* Courses Grid View */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {Array.from({ length: 9 }).map((_, index) => {
                  const courses = [
                    {
                      title: "Complete Web Development Bootcamp",
                      instructor: "Sarah Johnson",
                      level: "Beginner",
                      duration: "48 hours",
                      students: "12,345",
                      rating: 4.8,
                      price: "$89.99",
                      image: web_dev,
                    },
                    {
                      title: "Data Science Fundamentals",
                      instructor: "Michael Chen",
                      level: "Intermediate",
                      duration: "36 hours",
                      students: "8,721",
                      rating: 4.7,
                      price: "$79.99",
                      image: web_dev,
                    },
                    {
                      title: "Business Management Essentials",
                      instructor: "Emily Rodriguez",
                      level: "All Levels",
                      duration: "24 hours",
                      students: "5,432",
                      rating: 4.6,
                      price: "$69.99",
                      image: web_dev,
                    },
                    {
                      title: "UI/UX Design Masterclass",
                      instructor: "David Wilson",
                      level: "Intermediate",
                      duration: "30 hours",
                      students: "7,890",
                      rating: 4.9,
                      price: "$94.99",
                      image: web_dev,
                    },
                    {
                      title: "Digital Marketing Strategy",
                      instructor: "Jessica Lee",
                      level: "Beginner",
                      duration: "20 hours",
                      students: "9,876",
                      rating: 4.5,
                      price: "$59.99",
                      image: web_dev,
                    },
                    {
                      title: "Python for Data Analysis",
                      instructor: "Robert Smith",
                      level: "Advanced",
                      duration: "40 hours",
                      students: "6,543",
                      rating: 4.8,
                      price: "$84.99",
                      image: web_dev,
                    },
                    {
                      title: "Mobile App Development with React Native",
                      instructor: "Jennifer Brown",
                      level: "Intermediate",
                      duration: "32 hours",
                      students: "4,321",
                      rating: 4.7,
                      price: "$74.99",
                      image: web_dev,
                    },
                    {
                      title: "Project Management Professional",
                      instructor: "Thomas Clark",
                      level: "All Levels",
                      duration: "28 hours",
                      students: "7,654",
                      rating: 4.6,
                      price: "$64.99",
                      image: web_dev,
                    },
                    {
                      title: "Graphic Design for Beginners",
                      instructor: "Amanda White",
                      level: "Beginner",
                      duration: "22 hours",
                      students: "5,678",
                      rating: 4.5,
                      price: "$54.99",
                      image: web_dev,
                    },
                  ]

                  const course = courses[index % courses.length]

                  return (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="aspect-video relative">
                        <Image
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-primary text-white">{course.level}</Badge>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <p className="text-sm text-gray-500">by {course.instructor}</p>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="flex items-center mb-2">
                          <div className="flex items-center mr-4">
                            <Star className="h-4 w-4 text-yellow-400 mr-1" />
                            <span className="text-sm font-medium">{course.rating}</span>
                          </div>
                          <div className="flex items-center mr-4">
                            <Users className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-500">{course.students}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-500">{course.duration}</span>
                          </div>
                        </div>
                        <div className="text-lg font-bold text-primary">{course.price}</div>
                      </CardContent>
                      <CardFooter>
                        <div className="flex space-x-2 w-full">
                          <Link href={`/courses/${index + 1}`} className="flex-1">
                            <Button
                              variant="outline"
                              className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                            >
                              Details
                            </Button>
                          </Link>
                          <Button className="flex-1 bg-primary text-white hover:bg-primary/90">Add to Cart</Button>
                        </div>
                      </CardFooter>
                    </Card>
                  )
                })}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  {[1, 2, 3, 4, 5].map((page) => (
                    <Button
                      key={page}
                      variant={page === 1 ? "default" : "outline"}
                      size="sm"
                      className={page === 1 ? "bg-primary text-white" : ""}
                    >
                      {page}
                    </Button>
                  ))}
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
