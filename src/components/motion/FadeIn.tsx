// src/components/motion/FadeIn.tsx
'use client'

import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

interface FadeInProps extends HTMLMotionProps<'div'> {
  children:   React.ReactNode
  className?: string
  delay?:     number
  duration?:  number
  direction?: Direction
  once?:      boolean
  amount?:    number
}

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up:    { y: 24 },
  down:  { y: -24 },
  left:  { x: 24 },
  right: { x: -24 },
  none:  {},
}

export function FadeIn({
  children,
  className,
  delay     = 0,
  duration  = 0.6,
  direction = 'up',
  once      = true,
  amount    = 0.1,
  ...props
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}