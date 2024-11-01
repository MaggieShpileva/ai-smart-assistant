'use client'
import { NextUIProvider } from '@nextui-org/react'
import { Provider } from 'react-redux'
import { store } from '@/lib/store'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <NextUIProvider locale='ru-RU' className='min-h-[90dvh] relative max-w-5xl mx-auto overflow-auto'>
        {children}
      </NextUIProvider>
    </Provider>
  )
}
