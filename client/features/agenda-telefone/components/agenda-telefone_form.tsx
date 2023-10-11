import { Button } from '@/client/components/ui/button'
import { Input } from '@/client/components/ui/input'
import { formStatus } from '@/client/lib/form-status'
import { useMessageBox } from '@/client/lib/hooks/use-message-box'
import { TFormStatus } from '@/types'
import { Controller, UseFormReturn } from 'react-hook-form'

type TAgendaTelefoneFormProps = {
  form: UseFormReturn<any>
  onCancel?: () => void
  onDel?: () => void
  onEdit?: () => void
  onSave?: () => void
  status?: TFormStatus
}

export const AgendaTelefoneForm = ({
  form,
  onCancel,
  onDel,
  onEdit,
  onSave,
  status = 'none',
}: TAgendaTelefoneFormProps) => {
  const frmStatus = formStatus(status)

  const { MsgBox, confirm } = useMessageBox({
    title: 'Excluir',
    message: 'Confirma a exclusão do registro ?',
    option1: 'CONFIRMAR',
    option2: 'CANCELAR',
  })

  async function handleDel() {
    const response = await confirm(
      'Tem certeza que deseja apagar ' + form.getValues('name')
    )
    if (response === 'option1') {
      onDel && onDel()
    }
  }

  return (
    <div data-name="AgendaTelefoneForm">
      <div className="flex my-2 space-x-2 flex-rows">
        <Button
          onClick={onEdit}
          disabled={frmStatus.editDisabled}
          size="sm"
          outline
        >
          EDITAR
        </Button>
        <Button
          onClick={handleDel}
          disabled={frmStatus.delDisabled}
          size="sm"
          outline
        >
          EXCLUIR
        </Button>
      </div>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 sm:col-span-2 lg:col-span-1">
          <Controller
            name="id"
            control={form.control}
            rules={{
              required: 'Ramal é obrigatório',
            }}
            render={({ field, fieldState }) => (
              <Input
                required
                label="Ramal"
                disabled={frmStatus.formDisabled}
                variant={fieldState.error && 'error'}
                helper={fieldState.error?.message}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
        </div>
        <div className="col-span-12 sm:col-span-10 lg:col-span-5">
          <Controller
            name="name"
            control={form.control}
            rules={{
              required: 'Nome é obrigatório',
            }}
            render={({ field, fieldState }) => (
              <Input
                required
                label="Nome"
                disabled={frmStatus.formDisabled}
                variant={fieldState.error && 'error'}
                helper={fieldState.error?.message}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
        </div>
        <div className="col-span-12 sm:col-span-4 lg:col-span-2">
          <Controller
            name="department"
            control={form.control}
            render={({ field, fieldState }) => (
              <Input
                label="Setor"
                disabled={frmStatus.formDisabled}
                variant={fieldState.error && 'error'}
                helper={fieldState.error?.message}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
        </div>
        <div className="col-span-12 sm:col-span-8 lg:col-span-4">
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Input
                label="Email"
                disabled={frmStatus.formDisabled}
                variant={fieldState.error && 'error'}
                helper={fieldState.error?.message}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
        </div>
      </div>
      <div className="flex justify-end my-2 space-x-2 flex-rows align-center">
        {onSave ? (
          <Button
            onClick={onSave}
            disabled={frmStatus.saveDisabled}
            size="sm"
            outline
          >
            SAVE
          </Button>
        ) : null}
        {onCancel ? (
          <Button
            onClick={onCancel}
            disabled={frmStatus.cancelDisabled}
            size="sm"
            outline
          >
            CANCEL
          </Button>
        ) : null}
      </div>
      <MsgBox />
    </div>
  )
}
