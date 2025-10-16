'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { SidebarProvider } from '@/components/ui/sidebar'

export function Providers({ children }: { children: ReactNode }) {

return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        {children}
      </SidebarProvider>
    </ThemeProvider>
)
}