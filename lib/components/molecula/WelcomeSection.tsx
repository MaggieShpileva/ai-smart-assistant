'use client'
/**
 * Import: Next
 */
import Link from 'next/link'
import Image from 'next/image'

/**
 * Import: Components
 */
import { Heading } from '@/lib/components/typography/Heading'
import { Button } from '@/lib/components/atom/Button'

/**
 * Import: Types
 */
import { ButtonType } from '@/lib/components/atom/Button'

/**
 * Import: Media
 */
import bot_image from '@/public/images/icon.svg'

/**
 * Import: Animation
 */
import { motion } from 'framer-motion'

export const WelcomeSection = () => (
  <section className='max-md:h-[80dvh] max-w-7xl mx-auto md:mt-20 flex flex-col md:flex-row max-md:flex-col-reverse md:gap-16 items-center justify-end max-md:justify-between'>
    <motion.div
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className='flex flex-col items-center gap-y-5 bg-gradient-to-b from-sky-400/60 to-blue-950 px-12 py-6 md:px-20 md:py-10 rounded-2xl'>
      <Heading as='h1' text='Привет!' className='text-center text-white' size='sm' />
      <Heading as='h1' text='Я — твой AI Smart Ассистент.' className='text-center text-white' size='sm' />
      <Link href={'/chat'} passHref>
        <Button buttonType={ButtonType.SECONDARY} className='px-10 py-6 text-xl font-extralight'>
          Давай начнем
        </Button>
      </Link>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}>
      <Image src={bot_image} alt='icon' width='500' height='700' className='max-md:w-full md:pb-20' />
    </motion.div>
  </section>
)
