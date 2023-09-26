import { Button } from '@/client/components/ui/button'

export type TButtonEditProps = {
  onClick?: () => void
  disabled?: boolean
}
export const ButtonEdit = ({ onClick, disabled }: TButtonEditProps) => {
  return (
    <Button
      size="sm"
      onClick={onClick}
      disabled={disabled}
    >
      EDITAR
    </Button>
  )
}
