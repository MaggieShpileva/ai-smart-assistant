'use client'
/**
 * Import: React
 */
import { FC, ReactNode } from 'react'

/**
 * Import: Components
 */
import { Input as NextInput } from '@nextui-org/react'

type InputProps = {
  value: string
  placeholder?: string
  endContent?: ReactNode
  onValueChange?: (value: string) => void
  onEnterDown?: (isKeyDown: boolean) => void
}
export const Input: FC<InputProps> = ({ value, placeholder, endContent, onValueChange, onEnterDown }) => {
  return (
    <NextInput
      value={value}
      placeholder={placeholder}
      classNames={{
        input:
          'text-stone-300 group-data-[has-value=true]:text-stone-300 group-data-[has-value=true]:text-lg',
        inputWrapper:
          'px-5 py-7 bg-gray-900 data-[hover=true]:bg-gray-900 group-data-[focus=true]:bg-gray-800',
      }}
      endContent={endContent}
      onValueChange={onValueChange}
      onKeyDown={(event) => {
        if (onEnterDown) {
          if (event.key === 'Enter') {
            onEnterDown(true)
          } else {
            onEnterDown(false)
          }
        }
      }}
    />
  )
}
