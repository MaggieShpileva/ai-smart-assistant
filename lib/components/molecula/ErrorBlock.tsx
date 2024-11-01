/**
 * Import: Components
 */
import { Heading } from '@/lib/components/typography/Heading'

import { GiSadCrab } from 'react-icons/gi'
import { Button, ButtonType } from '../atom/Button'
import Link from 'next/link'

export const ErrorBlock = () => {
  return (
    <div className='min-h-[50dvh] flex flex-col gap-5 items-center justify-center'>
      <GiSadCrab className='w-20 h-20 text-sky-200/90' />
      <Heading as='h3' size='sm' text={'Что-то пошло не так...'} className='text-center text-neutral-300' />
      <Link href={'/'} passHref>
        <Button buttonType={ButtonType.SECONDARY}>Вернуться на главную</Button>
      </Link>
    </div>
  )
}
