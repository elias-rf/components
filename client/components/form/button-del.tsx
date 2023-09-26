import { Button } from '@mui/material'
import type { TFormStatus } from '@/types'
import React from 'react'
import { UseFormReturn } from 'react-hook-form'
import { MsgBox } from './msg-box'

export type TButtonDelProps = {
  form: UseFormReturn<any>
  onClick: () => void
  onStatus?: (status: TFormStatus) => void
  status: TFormStatus
  sx?: any
}

export const ButtonDel = ({
  form,
  onClick,
  onStatus,
  status,
  sx,
}: TButtonDelProps) => {
  const [showConfirm, setShowConfirm] = React.useState(false)

  function handleButtonDel() {
    setShowConfirm(true)
  }

  async function handleButtonDelConfirm(confirm: boolean) {
    setShowConfirm(false)
    if (confirm) {
      onClick()
      form.reset()
      onStatus && onStatus('view')
    }
  }

  return (
    <>
      <Button
        size="small"
        onClick={handleButtonDel}
        variant="outlined"
        color="error"
        disabled={status !== 'view'}
        sx={sx}
      >
        Excluir
      </Button>
      <MsgBox
        show={showConfirm}
        handleClose={handleButtonDelConfirm}
      />
    </>
  )
}
