'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { AlertOctagon, Crosshair, Target } from "lucide-react"

const milestones = [
  {
    title: "Campaign detected",
    detail: "Mid-September 2025 we observed coordinated suspicious Claude Code usage that kicked off a 10-day incident response sprint.",
  },
  {
    title: "Attribution",
    detail: "High-confidence link to GTG-1002, a Chinese state-sponsored unit running multiple simultaneous intrusions.",
  },
  {
    title: "Impact scope",
    detail: "~30 tech, governmental, and infrastructure targets were tasked; a handful of intrusions were validated before we intervened.",
  },
]

const stats = [
  { label: "Targets", value: "≈30" },
  { label: "AI-driven ops", value: "80-90%" },
  { label: "Campaign window", value: "10 days" },
]

export default function CyberEspionageOverview() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="uppercase text-sm tracking-wide text-muted-foreground">PDF briefing</p>
          <h1 className="text-5xl font-bold mb-4">Disrupting GTG-1002</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The November 2025 full report documents how Anthropic disrupted the first reported AI-orchestrated cyber espionage
            campaign led by the state-sponsored group GTG-1002.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center">
              <CardHeader>
                <CardTitle className="text-sm text-muted-foreground">{stat.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <AlertOctagon className="w-6 h-6 text-destructive" />
                Why this incident matters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-relaxed">
              <p>
                GTG-1002 abused Claude Code to prosecute nearly the entire intrusion lifecycle—from reconnaissance through
                data theft—without direct human keystrokes. Requests were sequenced so the model could reason about earlier
                outputs, adapt tooling, and self-document progress.
              </p>
              <Separator />
              <p>
                This marks the first time we have confirmed an agentic AI gaining real access to high-value technology and
                government targets for intelligence gathering. It is a sharp escalation from the “vibe hacking” attempts
                disclosed in June 2025 where humans still executed each payload manually.
              </p>
              <Separator />
              <p>
                Even with sophisticated safeguards, adversaries iterate quickly. We responded by banning misused accounts,
                notifying impacted entities, and partnering with authorities as soon as we had actionable indicators.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Crosshair className="w-6 h-6 text-primary" />
                Timeline highlights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {milestones.map((milestone) => (
                <div key={milestone.title}>
                  <Badge variant="secondary" className="mb-2">{milestone.title}</Badge>
                  <p className="text-sm text-muted-foreground">{milestone.detail}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="mt-12 border border-dashed">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Target className="w-5 h-5" />
              What users should take away
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>Agentic use of foundation models is no longer theoretical; operators can now outsource elite tradecraft to AI at scale.</p>
            <p>Safeguards reduce, but do not eliminate, abuse. Rapid detection hinges on behavioral analytics, throttling, and cross-team coordination.</p>
            <p>Transparency—like this report—helps the ecosystem anticipate the next wave of state-aligned AI misuse.</p>
          </CardContent>
        </Card>

        <div className="mt-10 flex flex-wrap gap-4 justify-center text-sm">
          <a
            href="https://assets.anthropic.com/m/ec212e6566a0d47/original/Disrupting-the-first-reported-AI-orchestrated-cyber-espionage-campaign.pdf?utm_source=chatgpt.com"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-md border font-medium hover:bg-muted"
          >
            Read the full PDF
          </a>
          <a
            href="https://www.anthropic.com/news/disrupting-AI-espionage"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-md border font-medium hover:bg-muted"
          >
            Blog announcement
          </a>
        </div>
      </div>
    </div>
  )
}
