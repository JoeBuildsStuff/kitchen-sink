"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  BookOpen,
  BrainCog,
  Briefcase,
  AlertTriangle,
  ShieldAlert,
  Workflow,
  Shield,
  FileWarning,
  Bot,
  Users,
  Activity,
} from "lucide-react"
import { SidebarLogo } from "./app-sidebar-logo"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

// Menu items.
const items = [
  {
    name: "Intro",
    path: "/slides/intro",
    icon: BookOpen,
  },
  {
    name: "How LLMs Work",
    path: "/slides/how-llms-work",
    icon: BrainCog,
  },
  {
    name: "Using AI in Practice",
    path: "/slides/using-ai-in-practice",
    icon: Briefcase,
  },
  {
    name: "Prompt Injection",
    path: "/slides/prompt-injection",
    icon: AlertTriangle,
  },
  {
    name: "Embargoed Overview",
    path: "/slides/embargoed-overview",
    icon: FileWarning,
  },
  {
    name: "Vibe Hacking Case",
    path: "/slides/embargoed-vibe-hacking",
    icon: Bot,
  },
  {
    name: "Remote Worker Fraud",
    path: "/slides/embargoed-remote-worker",
    icon: Users,
  },
  {
    name: "Fraud Ecosystem",
    path: "/slides/embargoed-fraud-ecosystem",
    icon: Activity,
  },
  {
    name: "GTG-1002 Overview",
    path: "/slides/cyber-espionage-overview",
    icon: ShieldAlert,
  },
  {
    name: "AI Kill Chain",
    path: "/slides/cyber-espionage-ai-operations",
    icon: Workflow,
  },
  {
    name: "Defensive Lessons",
    path: "/slides/cyber-espionage-defenses",
    icon: Shield,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarLogo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Slides</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      "w-full justify-start", // Default classes
                      pathname === item.path
                        ? "bg-muted/50 hover:bg-muted" // Active classes
                        : "hover:bg-muted" // Inactive classes
                    )}
                  >
                    <a href={item.path}>
                      <item.icon className="w-4 h-4 mr-2" />
                      <span>{item.name}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="">
        {/* Optional: Add footer content here */}
      </SidebarFooter>
    </Sidebar>
  )
}
