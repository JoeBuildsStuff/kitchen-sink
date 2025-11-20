'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, BriefcaseBusiness, MessageSquare } from "lucide-react"

const phases = [
  {
    title: "Persona development",
    bullets: [
      "Claude generates entire professional histories, portfolios, and cultural references for fake engineers.",
      "Operators ask about universities, local slang, even sample phone numbers to make the identity stick.",
    ],
  },
  {
    title: "Applications & interviews",
    bullets: [
      "AI tailors resumes and cover letters to each job and rehearses coding interviews in real time.",
      "Claude supplies instant answers during live assessments—operators paste prompts directly into chats.",
    ],
  },
  {
    title: "Employment maintenance",
    bullets: [
      "Roughly 80% of usage mapped to day-to-day work: Claude writes code, explanations, standup notes, and emails.",
      "Operators cannot debug or communicate professionally without AI guidance, yet keep Fortune 500 roles per public reporting.",
    ],
  },
]

export default function EmbargoedRemoteWorker() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="uppercase text-sm tracking-wide text-muted-foreground">Case study · North Korean sanctions evasion</p>
          <h1 className="text-4xl font-bold mb-3">Remote worker fraud at AI scale</h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            The embargoed report explains how North Korean IT workers rely on Claude for every stage of fraudulent remote employment—from inventing identities to shipping production code.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="flex flex-col gap-1">
                <Users className="w-6 h-6 mx-auto" />
                61%
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Front-end development prompts (React/Vue/Angular) dominate Claude usage.
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="flex flex-col gap-1">
                <BriefcaseBusiness className="w-6 h-6 mx-auto" />
                26%
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Programming & scripting support covers Python, tooling, and algorithm help.
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="flex flex-col gap-1">
                <MessageSquare className="w-6 h-6 mx-auto" />
                10%
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Interview prep and communication coaching ensures personas pass screening.
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {phases.map((phase) => (
            <Card key={phase.title} className="h-full">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Badge variant="secondary">{phase.title}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc text-sm text-muted-foreground space-y-2 pl-4">
                  {phase.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Why it matters</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-3">
            <p>AI collapses the skills gap—operators who cannot code independently now simulate senior engineers and funnel salaries toward sanctioned programs.</p>
            <p>The dependency signals a detection angle: blocking or throttling AI assistance mid-shift could reveal skill shortfalls but requires legal and privacy review.</p>
            <p>Anthropic banned associated accounts and improved indicator correlation tooling so future persona clusters are easier to flag.</p>
          </CardContent>
        </Card>

        <p className="text-xs text-muted-foreground text-center mt-10">
          Source: “Embargoed Anthropic full threat intel report.pdf”.
        </p>
      </div>
    </div>
  )
}
