import { useState } from 'react'
import { MessageBox } from '../../components/ui-old/message_box.jsx'

export function useMessageBox({ title, message, option1, option2, option3 }) {
  const [promise, setPromise] = useState()
  const [msg, setMsg] = useState(message)

  function confirm(newMessage) {
    if (newMessage) {
      setMsg(newMessage)
    }

    return new Promise((resolve) => {
      setPromise({ resolve })
    })
  }

  const handleConfirm = (response) => {
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
