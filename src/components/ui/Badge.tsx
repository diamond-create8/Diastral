// src/components/ui/Badge.tsx
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full font-sans font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-white/[0.06] text-white/55 border border-white/[0.08] px-2.5 py-1 text-xs',
        gold:    'bg-[#FFD700]/[0.12] text-[#FFD700] border border-[#FFD700]/20 px-2.5 py-1 text-xs',
        outline: 'border border-white/[0.12] text-white/45 px-2.5 py-1 text-xs',
        subtle:  'bg-white/[0.04] text-white/35 px-2.5 py-0.5 text-[10px] tracking-widest uppercase',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}