"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Badge } from "@/components/ui/badge"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

const adoptionData = [
  { year: "2021", pilots: 22, production: 9, scaled: 2 },
  { year: "2022", pilots: 36, production: 18, scaled: 5 },
  { year: "2023", pilots: 49, production: 27, scaled: 11 },
  { year: "2024", pilots: 58, production: 33, scaled: 18 },
  { year: "2025", pilots: 64, production: 41, scaled: 26 },
]

const adoptionConfig = {
  pilots: {
    label: "In Pilot",
    color: "hsl(var(--chart-2))",
  },
  production: {
    label: "Production Deployed",
    color: "hsl(var(--chart-1))",
  },
  scaled: {
    label: "Scaled Enterprise",
    color: "hsl(var(--chart-4))",
  },
}

const spendData = [
  { category: "Risk & Compliance", current: 1.9, target: 2.7 },
  { category: "Customer Experience", current: 1.5, target: 2.2 },
  { category: "Operations", current: 1.1, target: 1.8 },
  { category: "Fraud & Financial Crime", current: 1.2, target: 1.6 },
]

const spendConfig = {
  current: {
    label: "2024 Run-Rate (USD B)",
    color: "hsl(var(--chart-3))",
  },
  target: {
    label: "2026 Target (USD B)",
    color: "hsl(var(--chart-5))",
  },
}

const buildVsBuy = [
  {
    title: "Build In-House",
    highlight: "Own differentiated capabilities",
    bullets: [
      "Embed models in proprietary workflows and core banking stack",
      "Retain sensitive data and model governance end-to-end",
      "Requires hiring/retaining MLOps, model risk, and domain SMEs",
    ],
  },
  {
    title: "Buy / Partner",
    highlight: "Accelerate time-to-value",
    bullets: [
      "Leverage vendor accelerators for fraud, underwriting, and KYC",
      "Shift cost mix from CapEx to OpEx with usage-based pricing",
      "Mitigate talent gaps by relying on vendor expertise",
    ],
  },
]

export default function BankingAIAdoption() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            AI Adoption Across Banking
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            Where banks are placing bets today, how budgets are shifting, and the
            target-state balance between building and buying capabilities.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[2fr,1fr] mb-16">
          <Card className="border-2">
            <CardHeader className="pb-2">
              <CardTitle>Adoption Trajectory</CardTitle>
              <CardDescription>
                Share of top 100 banks with active AI initiatives (% of institutions)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-sm uppercase tracking-wide text-muted-foreground">
                    In Pilot
                  </div>
                  <div className="text-3xl font-semibold">64%</div>
                  <p className="text-xs text-muted-foreground">
                    +42 pts vs. 2021
                  </p>
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wide text-muted-foreground">
                    Production
                  </div>
                  <div className="text-3xl font-semibold">41%</div>
                  <p className="text-xs text-muted-foreground">
                    Focus on risk and compliance automation
                  </p>
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wide text-muted-foreground">
                    Scaled Enterprise
                  </div>
                  <div className="text-3xl font-semibold">26%</div>
                  <p className="text-xs text-muted-foreground">
                    Multi-line deployment with centralized guardrails
                  </p>
                </div>
              </div>

              <ChartContainer config={adoptionConfig} className="w-full">
                <AreaChart data={adoptionData} margin={{ left: 12, right: 12, top: 12, bottom: 12 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" tickLine={false} axisLine={false} />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value: number) => `${value}%`}
                    width={48}
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        formatter={(value: number) => `${value}%`}
                      />
                    }
                  />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Area
                    type="monotone"
                    dataKey="pilots"
                    stroke="var(--color-pilots)"
                    fill="var(--color-pilots)"
                    fillOpacity={0.25}
                    strokeWidth={3}
                  />
                  <Area
                    type="monotone"
                    dataKey="production"
                    stroke="var(--color-production)"
                    fill="var(--color-production)"
                    fillOpacity={0.25}
                    strokeWidth={3}
                  />
                  <Area
                    type="monotone"
                    dataKey="scaled"
                    stroke="var(--color-scaled)"
                    fill="var(--color-scaled)"
                    fillOpacity={0.25}
                    strokeWidth={3}
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader className="pb-2">
              <CardTitle>Executive Narrative</CardTitle>
              <CardDescription>
                Boards expect line-of-business accountability for adoption velocity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Most tier-one banks now frame AI programs around measurable P&amp;L
                  impact. Risk leaders anchor early deployments in model risk,
                  fraud, and compliance automation before expanding to revenue.
                </p>
                <p>
                  Scaling requires common data contracts, a governed model catalog,
                  and reusable controls that satisfy regulators across
                  jurisdictions.
                </p>
              </div>
              <Badge variant="secondary" className="w-fit">
                72% cite governance as top blocker
              </Badge>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 mb-16">
          <Card className="border-2">
            <CardHeader className="pb-2">
              <CardTitle>AI Spend Mix</CardTitle>
              <CardDescription>
                Comparative budget allocation (USD billions)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <ChartContainer config={spendConfig} className="w-full">
                <BarChart data={spendData} margin={{ left: 12, right: 12, top: 12, bottom: 12 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" tickLine={false} axisLine={false} height={60} tick={{ fontSize: 12 }} />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value: number) => `$${value.toFixed(1)}B`}
                    width={60}
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        formatter={(value: number) => `$${value.toFixed(1)}B`}
                      />
                    }
                  />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Bar dataKey="current" radius={[4, 4, 0, 0]} fill="var(--color-current)" />
                  <Bar dataKey="target" radius={[4, 4, 0, 0]} fill="var(--color-target)" />
                </BarChart>
              </ChartContainer>
              <p className="text-sm text-muted-foreground">
                Budgets tilt toward defensible risk and compliance capabilities
                today, but target state shows accelerated spend on digital client
                journeys and automation that shrinks unit cost of service.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader className="pb-2">
              <CardTitle>Where Banks See Value</CardTitle>
              <CardDescription>
                Highest scoring outcomes from 2024 strategy surveys
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Automated surveillance &amp; reporting</span>
                    <Badge variant="outline">4.7 / 5</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Regulators reward continuous monitoring and explainability.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Customer onboarding &amp; servicing</span>
                    <Badge variant="outline">4.4 / 5</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    AI triages intents, shortens resolution times, and boosts NPS.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Credit decisioning</span>
                    <Badge variant="outline">4.2 / 5</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Expanded feature sets and challenger models lift approval rates
                    without increasing losses.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 lg:grid-cols-[3fr,2fr] items-start">
          <Card className="border-2">
            <CardHeader className="pb-2">
              <CardTitle>Build vs. Buy Target State</CardTitle>
              <CardDescription>
                Align capability ownership with risk appetite and differentiation
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2">
              {buildVsBuy.map((option) => (
                <div key={option.title} className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">{option.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {option.highlight}
                    </p>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {option.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader className="pb-2">
              <CardTitle>Recommended Mix</CardTitle>
              <CardDescription>
                Hybrid model balances control, speed, and total cost of ownership
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Target a 60/40 split between vendor accelerators and internal
                build, anchored by a shared feature store and standardized model
                lifecycle controls.
              </p>
              <p>
                Centralize guardrails (policy, monitoring, lineage) while
                federating experimentation to product teams to maintain momentum
                and domain proximity.
              </p>
              <p>
                Success metrics: <strong>12-15%</strong> reduction in cost-to-serve,
                <strong> 3-5%</strong> uplift in risk-adjusted revenue, and regulator-ready
                documentation across jurisdictions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
