'use client'
/**
 * Import: React
 */
import { FC, ReactNode } from 'react'

/**
 * Import: Components
 */
import { Button as NextButton } from '@nextui-org/react'

export enum ButtonType {
  PRIMARY = 'bg-blue-800 text-white',
  SECONDARY = 'bg-sky-300 text-cyan-950',
}

type ButtonProps = {
  children: ReactNode
  buttonType: ButtonType
  className?: string
  onClick?: () => void
}

export const Button: FC<ButtonProps> = ({ children, buttonType, className, onClick }) => {
  return (
    <NextButton className={` ${buttonType} ${className}`} onClick={onClick}>
      {children}
    </NextButton>
  )
}
