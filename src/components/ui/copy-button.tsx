'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

interface CopyButtonProps {
  textToCopy: string
  successMessage?: string
  errorMessage?: string
  tooltipText?: string
  tooltipCopiedText?: string
  iconSize?: number
  className?: string
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  showTooltip?: boolean
}

export function CopyButton({
  textToCopy,
  successMessage = 'Copied to clipboard',
  errorMessage = 'Failed to copy',
  tooltipText = 'Copy',
  tooltipCopiedText = 'Copied!',
  iconSize = 16,
  className,
  variant = 'ghost',
  size = 'icon',
  showTooltip = true,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy)
      setCopied(true)
      toast.success(successMessage)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy text:', error)
      toast.error(errorMessage)
    }
  }

  const button = (
    <Button
      onClick={handleCopy}
      variant={variant}
      size={size}
      className={cn('transition-colors', className)}
    >
      {copied ? (
        <Check style={{ width: iconSize, height: iconSize }} />
      ) : (
        <Copy style={{ width: iconSize, height: iconSize }} />
      )}
    </Button>
  )

  if (!showTooltip) {
    return button
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {button}
        </TooltipTrigger>
        <TooltipContent>
          <p>{copied ? tooltipCopiedText : tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

