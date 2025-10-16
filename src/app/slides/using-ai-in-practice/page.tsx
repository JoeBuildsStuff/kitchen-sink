'use client'

import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function UsingAIInPractice() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Using AI in Practice
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Real-world applications of AI in job search and recruitment
          </p>
        </div>

        <Card className="max-w-6xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              JobFinder-AI: A Practical Example
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="space-y-6">
              <p className="text-lg">
                This screenshot shows how AI is being applied in real-world scenarios - 
                specifically in job search and recruitment platforms. The interface demonstrates 
                intelligent filtering, personalized recommendations, and user interaction tracking.
              </p>
              
              <Image
                src="/using-ai-in-practice.png"
                alt="JobFinder-AI - Using AI in Practice for Job Search and Recruitment"
                width={1200}
                height={800}
                className="rounded-lg shadow-lg mx-auto"
                priority
              />
              
              <div className="text-left max-w-4xl mx-auto space-y-4">
                <h3 className="text-xl font-semibold">Key AI Features Shown:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span><strong>Smart Filtering:</strong> AI-powered search and filtering based on user preferences and behavior</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span><strong>Personalized Ratings:</strong> Machine learning algorithms that learn from user interactions (likes/dislikes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span><strong>Intelligent Matching:</strong> AI rating system that evaluates job fit based on multiple criteria</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span><strong>Dynamic Interface:</strong> Adaptive UI that shows relevant filters and options based on user behavior</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-sm text-muted-foreground">
                This is a practical example of how AI is transforming traditional industries through 
                intelligent automation and personalized user experiences.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
