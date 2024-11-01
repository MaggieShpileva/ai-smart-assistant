/**
 * Import: React
 */
import React from 'react'

type HeadingProps = {
  size?: 'sm' | 'md' | 'xl' | '2xl'
  text: string
  as?: React.ElementType
  className?: string
}

export const Heading: React.FC<HeadingProps> = ({ as: Tag = 'h2', size = 'md', text, className }) => {
  const sizeVariants = {
    sm: 'text-xl md:text-2xl md:leading-snug',
    md: 'text-3xl md:text-5xl md:leading-tight',
    xl: 'text-4xl md:text-6xl md:leading-none',
    '2xl': 'text-4xl md:text-7xl leading-tight md:leading-none',
  }
  return <Tag className={`${sizeVariants[size]} ${className}`}>{text}</Tag>
}
