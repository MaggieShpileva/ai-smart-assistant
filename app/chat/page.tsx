/**
 * Import: Components
 */
import { PageTitle } from '@/lib/components/molecula/PageTitle'
import { DialogBlock } from '@/app/chat/blocks/DialogBlock'

export default function ChatPage() {
  return (
    <>
      <PageTitle title='Добро пожаловать в AI-чат' />
      <DialogBlock />
    </>
  )
}
