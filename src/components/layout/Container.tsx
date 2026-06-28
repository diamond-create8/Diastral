// src/components/layout/Container.tsx
import { cn } from '@/lib/utils'

interface ContainerProps {
  children:   React.ReactNode
  className?: string
  size?:      'sm' | 'md' | 'lg' | 'xl'
  as?:        React.ElementType
}

const sizes = {
  sm: 'max-w-3xl',
  md: 'max-w-4xl',
  lg: 'max-w-5xl',
  xl: 'max-w-[1200px]',
}

export function Container({
  children,
  className,
  size  = 'xl',
  as: As = 'div',
}: ContainerProps) {
  return (
    <As className={cn('mx-auto w-full px-5 sm:px-6 lg:px-8', sizes[size], className)}>
      {children}
    </As>
  )
}