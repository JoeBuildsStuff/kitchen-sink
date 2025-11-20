'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, Share2, Activity } from "lucide-react"

const focusAreas = [
  {
    title: "Platform safeguards",
    bullets: [
      "Tight behavioral analytics, throttling, and anomaly detection are needed even when guardrails feel mature.",
      "Anthropic banned abusive accounts mid-investigation and tuned heuristics that flagged high-velocity autonomous requests.",
      "Vendors must assume adversaries will chain prompts, mask tooling, and abuse documentation features to persist.",
    ],
  },
  {
    title: "Operational readiness",
    bullets: [
      "Build SOC automations that can keep up with AI-grade speed: automated threat detection, vuln assessment, and incident response loops are highlighted in the report.",
      "Treat hallucinations as both a weakness and a telemetry source—GTG-1002 had to validate every claim, creating dwell-time defenders can exploit.",
      "Practice cross-functional surge playbooks so teams can mobilize within hours, as Anthropic's Threat Intelligence unit did in this case.",
    ],
  },
  {
    title: "Ecosystem collaboration",
    bullets: [
      "Share indicators broadly. Anthropic coordinated with affected entities and authorities once it surfaced actionable intelligence.",
      "Industry-wide threat sharing and common detection methods are called out as critical because techniques will proliferate beyond state actors.",
      "Invest jointly in defensive AI so responsible builders learn faster than attackers adapting public models.",
    ],
  },
]

const quickWins = [
  "Instrument LLM usage like any other production system—collect session context, map infrastructure, and watch for agentic feedback loops.",
  "Pair human review with AI-generated runbooks; mandate verification on any credential or vulnerability claim before execution.",
  "Pilot defensive AI copilots in SOC tooling to mirror the attacker's autonomy and close the response gap.",
]

export default function CyberEspionageDefenses() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="uppercase text-sm tracking-wide text-muted-foreground">What to do about it</p>
          <h1 className="text-4xl font-bold mb-3">Defensive lessons from the PDF</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The final section of the public report urges the ecosystem to harden AI platforms, modernize SOC workflows, and
            coordinate globally. Use these notes as a discussion aid with your own security, platform, and policy teams.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {focusAreas.map((area) => (
            <Card key={area.title} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground list-disc pl-4">
                  {area.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 border-2">
          <CardHeader>
            <Badge variant="secondary" className="w-fit mb-2">Action checklist</Badge>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              Close the response gap
            </CardTitle>
            <CardDescription>All sourced from pages 12-14 of the PDF report.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-muted-foreground list-decimal pl-6">
              {quickWins.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-3 mt-12 text-sm text-muted-foreground">
          <div className="flex items-start gap-3">
            <Activity className="w-5 h-5 mt-1" />
            <p>Run tabletop exercises focused on AI-enabled adversaries so responders experience the faster tempos highlighted in this case.</p>
          </div>
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 mt-1" />
            <p>Budget for continuous safeguard improvements instead of one-off policy updates; GTG-1002 iterated immediately after enforcement.</p>
          </div>
          <div className="flex items-start gap-3">
            <Share2 className="w-5 h-5 mt-1" />
            <p>Engage government and peer coalitions early—coordinated disruption requires legal, policy, and technical alignment.</p>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Details summarized from Anthropic’s
          <a
            href="https://www.anthropic.com/news/disrupting-AI-espionage"
            target="_blank"
            rel="noreferrer"
            className="underline mx-1"
          >
            news post
          </a>
          and the publicly available
          <a
            href="https://assets.anthropic.com/m/ec212e6566a0d47/original/Disrupting-the-first-reported-AI-orchestrated-cyber-espionage-campaign.pdf?utm_source=chatgpt.com"
            target="_blank"
            rel="noreferrer"
            className="underline ml-1"
          >
            PDF report
          </a>
          .
        </p>
      </div>
    </div>
  )
}
