/**
 * Import: React
 */
import { FC, useEffect, useRef } from 'react'

/**
 * Import: Types
 */
import { Message } from '@/lib/features/dialog/dialogService'

type MessageListProps = {
  dialog: Message[]
}

export const MessageList: FC<MessageListProps> = ({ dialog }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [dialog])

  return (
    <div className='max-h-[60dvh] pb-10 px-6 flex flex-col gap-y-5 overflow-y-scroll'>
      {dialog.map((message, index) => {
        const isUserMessage = !!message.user
        const text = message.user || message.bot || ''

        return <MessageListItem text={text} isUserMessage={isUserMessage} key={`dialog_message-${index}`} />
      })}
      <div ref={messagesEndRef} />
    </div>
  )
}

const MessageListItem = ({ text, isUserMessage }: { text: string; isUserMessage: boolean }) => (
  <div
    className={`w-fit max-w-prose py-3 px-5 bg-gray-700 rounded-xl text-white ${
      isUserMessage ? 'ml-auto text-right self-end' : 'text-left self-start'
    }`}>
    {text}
  </div>
)
