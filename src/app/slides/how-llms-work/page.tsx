'use client'

import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HowLLMsWork() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            How LLMs Work
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Interactive demonstration of language model token probabilities
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              Logprobs Visualization Tool
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="space-y-6">
              <p className="text-lg">
                Click on the image below to explore an interactive demonstration of how language models work, 
                including token probabilities and alternatives.
              </p>
              
              <a 
                href="https://www.joe-taylor.me/projects/logprobs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-105"
              >
                <Image
                  src="/how-llms-work.png"
                  alt="How LLMs Work - Interactive Logprobs Visualization"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg cursor-pointer"
                  priority
                />
              </a>
              
              <p className="text-sm text-muted-foreground">
                Click the image to open the interactive tool in a new tab
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
