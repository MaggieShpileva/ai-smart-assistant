'use client'

/**
 * Import: React
 */
import { useState } from 'react'

/**
 * Import: Redux
 */
import { useDispatch, useSelector } from 'react-redux'

/**
 * Import: Components
 */
import { MessageList } from '@/app/chat/blocks/MessageList'
import { InputMessage } from '@/app/chat/blocks/InputMessage'

/**
 * Import: Media
 */
import { addUserMessage, generateContent } from '@/lib/features/dialog/dialogSlice'
import { AppDispatch, RootState } from '@/lib/store'

/**
 * Import: Animation
 */
import { motion } from 'framer-motion'
import { RequestStatus } from '@/lib/features/global/serviceGlobal'
import { ErrorBlock } from '@/lib/components/molecula/ErrorBlock'

export const DialogBlock = () => {
  const dispatch = useDispatch<AppDispatch>()
  const dialog = useSelector((state: RootState) => state.dialog.messages)

  const [inputMessage, setInputMessage] = useState('')

  const requestStatus = useSelector((state: RootState) => state.dialog.status)

  const handleAddMessage = (value: string) => {
    setInputMessage(value)
  }

  const handleSubmit = async () => {
    dispatch(addUserMessage(inputMessage))
    dispatch(generateContent(inputMessage))
    setInputMessage('')
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className=' md:px-20 pt-10'>
      {requestStatus === RequestStatus.FAILED ? (
        <ErrorBlock />
      ) : (
        <>
          <MessageList dialog={dialog} />
          <InputMessage
            message={inputMessage}
            handleSubmit={handleSubmit}
            handleAddMessage={handleAddMessage}
          />
        </>
      )}
    </motion.section>
  )
}
