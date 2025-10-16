'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { TrendingUp, TrendingDown, Users, Building2, DollarSign, BarChart3 } from "lucide-react"

export default function Intro() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            How AI Might Impact Banking
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Lessons from 25 Years of Automation
          </p>
        </div>

        {/* Core Question */}
        <Card className="mb-16 border-2">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              The Core Question
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg">
              <strong>How might AI impact banking?</strong> To answer this, let&apos;s examine how automation has already transformed the industry over the past 25 years.
            </p>
          </CardContent>
        </Card>

        {/* Banking's Role */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Banking&apos;s Fundamental Role
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Building2 className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Protect Deposits</h3>
                <p className="text-sm">Provide security for savers</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <DollarSign className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Provide Loans</h3>
                <p className="text-sm">Support economic growth and development</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <BarChart3 className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Create Markets</h3>
                <p className="text-sm">Facilitate capital flow between borrowers and savers</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* The Transformation */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            The Transformation: 2000 vs 2025
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* 2000 */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-center">
                  2000: The Traditional Model
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Banks</span>
                  <Badge variant="outline">10,102</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total Assets</span>
                  <Badge variant="outline">$7.2T</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Employees</span>
                  <Badge variant="outline">1.9M (0.68%)</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Net Interest Margin</span>
                  <Badge variant="outline">3.82%</Badge>
                </div>
              </CardContent>
            </Card>

            {/* 2025 */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-center">
                  2025: The Automated Era
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Banks</span>
                  <Badge variant="outline">4,421 (-56%)</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total Assets</span>
                  <Badge variant="outline">$25.0T (+3.5x)</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Employees</span>
                  <Badge variant="outline">2.1M (0.60%)</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Net Interest Margin</span>
                  <Badge variant="outline">3.23% (-15%)</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Insights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Key Insights from the Data
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Efficiency Through Consolidation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Efficiency Through Consolidation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Fewer banks, more assets</span>
                  <Badge variant="secondary">56% fewer</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Assets per employee</span>
                  <Badge variant="secondary">$3.76M → $12.12M</Badge>
                </div>
                <div className="text-xs">
                  56% fewer institutions managing 3.5x more assets
                </div>
              </CardContent>
            </Card>

            {/* The Labor Paradox */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  The Labor Paradox
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Bankers per citizen</span>
                  <Badge variant="secondary">0.68% → 0.60%</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Average salary</span>
                  <Badge variant="secondary">$26K → $71K</Badge>
                </div>
                <div className="text-xs">
                  Fewer workers, but 169% higher compensation
                </div>
              </CardContent>
            </Card>

            {/* Margin Compression */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingDown className="h-5 w-5" />
                  Margin Compression
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Net Interest Margin</span>
                  <Badge variant="secondary">3.82% → 3.23%</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Efficiency ratio</span>
                  <Badge variant="secondary">58.79% → 56.03%</Badge>
                </div>
                <div className="text-xs">
                  Benefits flow to customers, profitability maintained
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What This Tells Us About AI */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            What This Tells Us About AI&apos;s Impact
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>The Automation Story Shows Us:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2"></div>
                  <p className="text-sm"><strong>Technology creates efficiency</strong> - fewer people can manage more assets</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2"></div>
                  <p className="text-sm"><strong>But it doesn&apos;t eliminate human value</strong> - remaining workers are more highly compensated</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2"></div>
                  <p className="text-sm"><strong>Competition drives margin compression</strong> - benefits flow to customers</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2"></div>
                  <p className="text-sm"><strong>Scale becomes critical</strong> - smaller institutions struggle to compete</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>For AI Specifically, We Can Expect:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2"></div>
                  <p className="text-sm">Further consolidation and efficiency gains</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2"></div>
                  <p className="text-sm">Higher-skilled, better-paid banking professionals</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2"></div>
                  <p className="text-sm">Continued margin pressure as AI reduces costs</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2"></div>
                  <p className="text-sm">New opportunities for personalized financial services</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2"></div>
                  <p className="text-sm">Enhanced risk management and fraud detection</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Line */}
        <Card className="border-2">
          <CardContent className="pt-8 pb-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">The Bottom Line</h2>
              <p className="text-lg max-w-4xl mx-auto leading-relaxed">
                Just as automation transformed banking from 2000 to 2025, AI will likely accelerate these trends while creating new opportunities for those who adapt. The question isn&apos;t whether AI will impact banking—it&apos;s how quickly and effectively institutions can harness it to serve customers better.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Data Sources */}
        <div className="mt-16 text-center">
          <Separator className="mb-6" />
          <p className="text-sm">
            Data sources: FDIC Quarterly Banking Profile Q2 2025, FDIC BankFind Suite
          </p>
        </div>
      </div>
    </div>
  )
}