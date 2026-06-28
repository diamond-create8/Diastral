// src/components/motion/StaggerChildren.tsx
'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface StaggerChildrenProps {
  children:      React.ReactNode
  className?:    string
  staggerDelay?: number
  once?:         boolean
}

const containerVariants = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: { staggerChildren: stagger },
  }),
}

export const itemVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}

export function StaggerChildren({
  children,
  className,
  staggerDelay = 0.08,
  once         = true,
}: StaggerChildrenProps) {
  return (
    <motion.div
      variants={containerVariants}
      custom={staggerDelay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children:   React.ReactNode
  className?: string
}) {
  return (
    <motion.div variants={itemVariants} className={cn(className)}>
      {children}
    </motion.div>
  )
}