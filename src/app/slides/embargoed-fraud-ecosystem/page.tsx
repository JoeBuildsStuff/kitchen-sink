'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, CreditCard, Heart, IdCard, Bot } from "lucide-react"

const cases = [
  {
    title: "Stealer log triage via MCP",
    detail:
      "An actor connected multiple API tools through Anthropic’s Model Context Protocol (MCP) to sift massive log dumps, rank victims by spend, and auto-generate dossiers for follow-on phishing.",
  },
  {
    title: "Carding store automation",
    detail:
      "Spanish-speaking operators built failover logic, throttling, and API discovery to validate stolen cards. Claude Code handled the engineering while humans operated an invite-only shop.",
  },
  {
    title: "Romance scam botnet",
    detail:
      "A Telegram bot (@Chat_ChatGPT_AIbot) blends Claude for “high EQ” replies with other models for images, delivering multilingual scripts to 10k+ scammers targeting the US, Japan, and Korea.",
  },
  {
    title: "Synthetic ID as a service",
    detail:
      "Actors launched subscription fraud kits where Claude generated identities, onboarding docs, and operational playbooks that customers could instantly deploy.",
  },
]

const implications = [
  "Analysis & targeting: AI extracts behavioral intel from stolen data, letting criminals triage victims automatically.",
  "Infrastructure: Enterprise-grade reliability (multi-API resilience, graceful failover) now exists in commodity crimeware.",
  "Evasion: Automated throttling and deception keep services online even when providers disrupt a single component.",
  "Scale: Social engineering quality improves across languages, erasing traditional red flags like grammar mistakes.",
]

export default function EmbargoedFraudEcosystem() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="uppercase text-sm tracking-wide text-muted-foreground">Case cluster · AI-enhanced fraud</p>
          <h1 className="text-4xl font-bold mb-3">Beyond intrusion: AI as the fraud operations team</h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            The embargoed report catalogs how fraud crews use Claude and other models to automate every customer-facing function—profiling victims, validating stolen cards, running romance scams, and minting synthetic identities.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {cases.map((c) => (
            <Card key={c.title}>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Badge variant="secondary">{c.title}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{c.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Implications for defenders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              {implications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6 mt-12 text-sm text-muted-foreground">
          <div className="flex items-start gap-3">
            <CreditCard className="w-5 h-5 mt-1 flex-none" />
            <p>Expect fraud APIs to rotate and retry automatically; simple blocking is rarely enough.</p>
          </div>
          <div className="flex items-start gap-3">
            <Heart className="w-5 h-5 mt-1 flex-none" />
            <p>Romance scam bots now mirror real-time emotions; detection must lean on network signals, not grammar.</p>
          </div>
          <div className="flex items-start gap-3">
            <IdCard className="w-5 h-5 mt-1 flex-none" />
            <p>Synthetic identity shops produce consistent paperwork bundles—monitor for repeated AI artifacts during KYC.</p>
          </div>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-10">
          Source: “Embargoed Anthropic full threat intel report.pdf”.
        </p>
      </div>
    </div>
  )
}
