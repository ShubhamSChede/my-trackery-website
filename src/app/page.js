'use client';
import React from 'react';
import { Download, ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    title: "Expenses Management",
    description: "Track your spending with detailed categorization, easy deletion, and powerful search functionality based on category and date.",
    icon: "💰"
  },
  {
    title: "Spending Insights",
    description: "Get comprehensive financial analysis with PDF exports, yearly statistics, category breakdowns, and visual representations of your spending patterns.",
    icon: "📊"
  },
  {
    title: "Monthly Journal",
    description: "Record personal growth, skills learned, and track mood, productivity, and health with interactive monthly boxes and visual analysis.",
    icon: "📝"
  },
  {
    title: "User Authentication",
    description: "Secure login system with automatic authentication to keep your data safe and accessible only to you.",
    icon: "🔐"
  },
  {
    title: "Data Export",
    description: "Export your financial insights and reports as PDF for easy sharing and record-keeping.",
    icon: "📤"
  },
  {
    title: "Visual Analytics",
    description: "Interactive charts and graphs showing spending trends, category breakdowns, and personal progress over time.",
    icon: "📈"
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 animate-gradient-shift"></div>
      
      {/* Content container */}
      <div className="relative">
        {/* Header/Nav */}
        <nav className="border-b border-gray-800 backdrop-blur-sm bg-black/50 sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center transform hover:scale-105 transition-transform">
                            <Image 
                  src="/finallogo.png" 
                  alt="MyTrackery Logo" 
                  width={48} 
                  height={48} 
                  className="h-12 w-12"
                />
              <span className="ml-2 text-xl font-bold text-teal-400">MyTrackery</span>
            </div>
            <a 
              href="https://www.linkedin.com/in/shubham-chede-2957bb278"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 transition-colors flex items-center group"
            >
              Connect with Developer
              <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </nav>

        {/* Hero Section with animated text */}
        <div className="container mx-auto px-6 py-24 text-center">
        <Image 
  src="/finallogo.png" 
  alt="MyTrackery Logo" 
  width={700} // Increased the width
  height={700} // Increased the height
  className="h-48 w-48 mb-10 mx-auto" // Adjusted the Tailwind CSS classes for height and width
/>
          <h1 className="text-6xl font-bold mb-8 animate-fade-in">
            Track Your Life,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 animate-gradient">
              Master Your Future
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto animate-slide-up">
            Your all-in-one solution for expense tracking, financial insights, and personal journaling.
          </p>
          <a
            href="https://expo.dev/artifacts/eas/aRQsHzTEH5BFv5f56ZLQj2.apk"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-lg hover:from-teal-400 hover:to-emerald-400 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 animate-bounce-subtle"
          >
            <Download className="mr-2" />
            Download Now
            <ArrowRight className="ml-2" />
          </a>
        </div>

        {/* Features Grid with hover effects */}
        <div className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
          <div className="container mx-auto px-6 relative">
            <h2 className="text-4xl font-bold mb-16 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                Key Features
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10"
                >
                  {/* Card face */}
                  <div className="p-8 h-full">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-teal-400 mb-2">{feature.title}</h3>
                    <p className="text-gray-400 group-hover:opacity-0 transition-opacity duration-300">
                      Hover to learn more
                    </p>
                    {/* Overlay description */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-900/90 to-emerald-900/90 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                      <p className="text-white">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack with animated cards */}
        <div className="container mx-auto px-6 py-24">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
              Built With Modern Tech Stack
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { name: "React Native", desc: "Cross-platform mobile development" },
              { name: "NativeWind", desc: "Efficient styling" },
              { name: "ExpressJS", desc: "Backend operations" },
              { name: "MongoDB", desc: "Secure database" }
            ].map((tech, index) => (
              <div 
                key={index}
                className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20"
              >
                <h3 className="text-xl font-bold text-teal-400">{tech.name}</h3>
                <p className="text-gray-400 mt-2">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Developer Section with hover effect */}
        <div className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-black"></div>
          <div className="container mx-auto px-6 text-center relative">
            <h2 className="text-3xl font-bold mb-4">Developed by</h2>
            <p className="text-2xl text-teal-400 mb-4">Shubham Chede</p>
            <a
              href="https://www.linkedin.com/in/shubham-chede-2957bb278"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-400 hover:text-teal-400 transition-all transform hover:scale-105 group"
            >
              View LinkedIn Profile
              <ArrowRight className="ml-2 transform group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-8 backdrop-blur-sm bg-black/50">
          <div className="container mx-auto px-6 text-center text-gray-400">
            <p>&copy; 2024 MyTrackery. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}