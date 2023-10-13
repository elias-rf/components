import { Button } from '@/client/components/ui/button'
import { Input } from '@/client/components/ui/input'
import { useAgendaTelefone } from '@/client/features/agenda-telefone/agenda-telefone_store'
import { useMessageBox } from '@/client/lib/hooks/use-message-box'
import { Controller, useForm } from 'react-hook-form'
import { useEffectOnce } from 'usehooks-ts'

export const AgendaTelefoneForm = () => {
  const formButtonStatus = useAgendaTelefone.use.formButtonStatus()()
  const handleCancel = useAgendaTelefone.use.handleCancel()
  const handleDelete = useAgendaTelefone.use.handleDelete()
  const handleEdit = useAgendaTelefone.use.handleEdit()
  const handleSave = useAgendaTelefone.use.handleSave()
  const recordClear = useAgendaTelefone.use.recordClear()
  const setForm = useAgendaTelefone.use.setForm()

  const form = useForm({ defaultValues: recordClear, mode: 'onTouched' })

  useEffectOnce(() => {
    setForm(form)
  })

  const { MsgBox, confirm } = useMessageBox({
    title: 'Excluir',
    message: 'Confirma a exclusão do registro ?',
    option1: 'CONFIRMAR',
    option2: 'CANCELAR',
  })

  async function handleDel() {
    const response = await confirm(
      'Tem certeza que deseja apagar ' + form?.getValues('name')
    )
    if (response === 'option1') {
      handleDelete()
    }
  }

  return (
    <div data-name="AgendaTelefoneForm">
      <div className="flex my-2 space-x-2 flex-rows">
        <Button
          onClick={handleEdit}
          disabled={formButtonStatus.editDisabled}
          size="sm"
          outline
        >
          EDITAR
        </Button>
        <Button
          onClick={handleDel}
          disabled={formButtonStatus.delDisabled}
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
            control={form?.control}
            rules={{
              required: 'Ramal é obrigatório',
            }}
            render={({ field, fieldState }) => (
              <Input
                disabled={formButtonStatus.formDisabled}
                helper={fieldState.error?.message}
                label="Ramal"
                onBlur={field.onBlur}
                onChange={field.onChange}
                required
                value={field.value}
                variant={fieldState.error && 'error'}
              />
            )}
          />
        </div>
        <div className="col-span-12 sm:col-span-10 lg:col-span-5">
          <Controller
            name="name"
            control={form?.control}
            rules={{
              required: 'Nome é obrigatório',
            }}
            render={({ field, fieldState }) => (
              <Input
                required
                label="Nome"
                disabled={formButtonStatus.formDisabled}
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
            control={form?.control}
            render={({ field, fieldState }) => (
              <Input
                label="Setor"
                disabled={formButtonStatus.formDisabled}
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
            control={form?.control}
            render={({ field, fieldState }) => (
              <Input
                label="Email"
                disabled={formButtonStatus.formDisabled}
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
        <Button
          onClick={handleSave}
          disabled={formButtonStatus.saveDisabled}
          size="sm"
          outline
        >
          SAVE
        </Button>
        <Button
          onClick={handleCancel}
          disabled={formButtonStatus.cancelDisabled}
          size="sm"
          outline
        >
          CANCEL
        </Button>
      </div>
      <MsgBox />
    </div>
  )
}
