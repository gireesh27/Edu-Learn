# EduLearn - Modern Education Platform


## Overview

EduLearn is a comprehensive online education platform built with Next.js and TailwindCSS. The platform offers a wide range of courses across various disciplines, interactive learning experiences, and a user-friendly interface for both students and educators.

## Features

- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Course Catalog**: Browse and filter courses by category, level, and price
- **User Authentication**: Sign up, login, and profile management
- **Shopping Cart**: Add courses to cart and checkout functionality
- **Interactive Learning**: Video lessons, quizzes, and progress tracking
- **Testimonials**: Real student success stories and reviews
- **Blog**: Educational articles and industry insights
- **Mobile Responsive**: Optimized for all device sizes

## Tech Stack

- **Frontend**: Next.js 14, React 18, TailwindCSS
- **Animations**: Framer Motion, Aceternity UI
- **State Management**: React Context API
- **Styling**: TailwindCSS with custom theme
- **Icons**: Lucide React
- **UI Components**: Custom shadcn/ui components

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/edulearn.git
   cd edulearn
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

\`\`\`
edulearn/
├── app/                  # Next.js app directory
│   ├── about/            # About page
│   ├── blog/             # Blog pages
│   ├── contact/          # Contact page
│   ├── courses/          # Course catalog and details
│   ├── login/            # Login page
│   ├── services/         # Services page
│   ├── sign-up/          # Sign up page
│   ├── testimonials/     # Testimonials page
│   └── layout.tsx        # Root layout
├── components/           # Reusable components
│   ├── animations/       # Animation components
│   ├── ui/               # UI components
│   ├── cart.tsx          # Shopping cart component
│   ├── cart-provider.tsx # Cart context provider
│   ├── footer.tsx        # Footer component
│   └── navbar.tsx        # Navigation component
├── public/               # Static assets
│   └── assets/           # Images and other assets
└── README.md             # Project documentation
\`\`\`

## Screenshots

![Homepage](./public/assets/screenshots/homepage.png)
![Courses](./public/assets/screenshots/courses.png)
![Course Detail](./public/assets/screenshots/course-detail.png)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Design inspiration from modern educational platforms
- Icons from [Lucide React](https://lucide.dev/)
- UI components based on [shadcn/ui](https://ui.shadcn.com/)
\`\`\`
