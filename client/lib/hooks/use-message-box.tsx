import { useState } from 'react'
import { MessageBox } from '@/client/components/ui/message_box'

export function useMessageBox({
  title,
  message,
  option1,
  option2,
  option3,
}: any) {
  const [promise, setPromise] = useState<{ resolve: (value: string) => void }>()
  const [msg, setMsg] = useState(message)

  function confirm(newMessage?: string) {
    if (newMessage) {
      setMsg(newMessage)
    }

    return new Promise((resolve: (value: string) => void) => {
      setPromise({ resolve })
    })
  }

  const handleConfirm = (response: string) => {
    promise?.resolve(response)
    setPromise(undefined)
  }

  const MsgBox = () => (
    <>
      {promise ? (
        <MessageBox
          title={title}
          option1={option1}
          option2={option2}
          option3={option3}
          onClick={handleConfirm}
        >
          <div className="p-4">{msg}</div>
        </MessageBox>
      ) : null}
    </>
  )
  return { MsgBox, confirm }
}
