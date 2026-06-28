// src/components/ui/Button.tsx
import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  [
    'relative inline-flex items-center justify-center gap-2',
    'font-sans font-medium text-sm rounded-md',
    'transition-all duration-200 select-none no-tap',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/50',
    'disabled:opacity-40 disabled:pointer-events-none',
    'active:scale-[0.97]',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-[#FFD700] text-[#0E0E0E] font-semibold',
          'hover:bg-[#FFE44D]',
          'shadow-[0_0_20px_rgba(255,215,0,0.06)]',
          'hover:shadow-[0_0_40px_rgba(255,215,0,0.12)]',
        ],
        outline: [
          'border border-white/10 text-white/70',
          'hover:border-white/20 hover:text-white hover:bg-white/[0.04]',
        ],
        ghost: [
          'text-white/50 hover:text-white hover:bg-white/[0.05]',
        ],
        dark: [
          'bg-white/[0.06] text-white border border-white/[0.08]',
          'hover:bg-white/[0.10] hover:border-white/[0.14]',
        ],
      },
      size: {
        sm:   'h-8  px-4 text-xs tracking-wide',
        md:   'h-10 px-5 text-sm',
        lg:   'h-12 px-7 text-sm tracking-wide',
        xl:   'h-14 px-9 text-base tracking-wide',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size:    'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }