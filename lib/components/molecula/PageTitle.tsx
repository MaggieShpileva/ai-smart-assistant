'use client'
/**
 * Import: React
 */
import { FC } from 'react'

/**
 * Import: Components
 */
import { Heading } from '@/lib/components/typography/Heading'

/**
 * Import: Animation
 */
import { motion } from 'framer-motion'

type PageTitleProps = {
  title?: string
}

export const PageTitle: FC<PageTitleProps> = ({ title = 'AI Smart Ассистент' }) => (
  <motion.section
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 10 }}
    transition={{ duration: 0.5 }}>
    <Heading as='h1' text={title} className='md:my-8 text-center text-white' size='xl' />
  </motion.section>
)
