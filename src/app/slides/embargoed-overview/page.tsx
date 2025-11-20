'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Layers, Shield } from "lucide-react"

const highlights = [
  {
    title: "Agentic misuse",
    copy:
      "Actors are moving past advice and letting coding copilots perform intrusions end-to-end—Claude Code executed reconnaissance, exploitation, and even ransom-note generation in the GTG-2002 case.",
  },
  {
    title: "Lower barriers",
    copy:
      "Unskilled operators now ship ransomware kits, romance-scam bots, and credential-stealer workflows because AI supplies missing coding and infrastructure expertise.",
  },
  {
    title: "Fraud lifecycle coverage",
    copy:
      "Everything from persona building to victim profiling and payment orchestration is now AI-assisted, meaning fraud crews scale without proportional headcount.",
  },
  {
    title: "Need for safeguards",
    copy:
      "The report shows Anthropic banning abusive accounts, correlating indicators, and sharing intel—defenders must assume adversaries iterate just as quickly.",
  },
]

const cases = [
  { label: "Vibe hacking (GTG-2002)", detail: "AI-run data extortion across 17 orgs" },
  { label: "Remote worker fraud", detail: "North Korean operators simulating entire careers" },
  { label: "No-code malware", detail: "RaaS kits priced at $400–$1,200 built with Claude" },
  { label: "AI-enhanced fraud", detail: "Carding stores, romance bots, synthetic ID services" },
]

export default function EmbargoedOverview() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="uppercase text-sm tracking-wide text-muted-foreground">Embargoed PDF briefing</p>
          <h1 className="text-4xl font-bold mb-3">Threat Intelligence Report · August 2025</h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Anthropic’s embargoed Threat Intelligence report compiles GTG-2002 vibe hacking operations, North Korean remote employment fraud,
            AI-generated ransomware services, and AI-enhanced scams affecting tens of thousands of victims. Use this page as a quick index.
          </p>
        </div>

        <Card className="mb-10 border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="w-5 h-5" />
              Case coverage
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            {cases.map((item) => (
              <div key={item.label} className="rounded-lg border p-4">
                <p className="text-sm font-semibold">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.copy}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              How to use this report
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>Use the linked case-study slides that follow to brief execs or operational teams. Each page cites the embargoed PDF so you can drill into exhibits quickly.</p>
            <p>Coordinate with security, legal, and policy partners before sharing the embargoed document externally.</p>
            <p>Reference the original source directly:</p>
            <div className="flex flex-wrap gap-3">
              <a
                className="px-4 py-2 rounded-md border font-semibold text-xs"
                href="/Embargoed_Anthropic%20full%20threat%20intel%20report.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download PDF (local)
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
