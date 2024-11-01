'use client'

/**
 * Import: React
 */
import { FC } from 'react'

/**
 * Import: Redux
 */
import { useSelector } from 'react-redux'
import { RequestStatus } from '@/lib/features/global/serviceGlobal'

/**
 * Import: Components
 */
import { Input } from '@/lib/components/atom/Input'

/**
 * Import: Types
 */
import { RootState } from '@/lib/store'

/**
 * Import: Media
 */
import { CiLocationArrow1 } from 'react-icons/ci'

type InputMessageProps = {
  message: string
  handleSubmit: () => Promise<void>
  handleAddMessage: (value: string) => void
}

export const InputMessage: FC<InputMessageProps> = ({ message, handleSubmit, handleAddMessage }) => {
  const requestStatus = useSelector((state: RootState) => state.dialog.status)

  return (
    <div className='md:px-20 absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-24 flex flex-col justify-end gap-y-2'>
      {requestStatus === RequestStatus.LOADING && (
        <span className='pl-2 text-neutral-300 text-sm'>Ассистент печатает ...</span>
      )}
      <Input
        value={message}
        placeholder='Введите сообщение...'
        endContent={
          <CiLocationArrow1
            className='h-6 w-6 text-stone-300 hover:text-white font-bold transition-all cursor-pointer'
            onClick={handleSubmit}
          />
        }
        onValueChange={handleAddMessage}
        onEnterDown={(isKeyDown) => {
          if (isKeyDown) {
            handleSubmit()
          }
        }}
      />
    </div>
  )
}
