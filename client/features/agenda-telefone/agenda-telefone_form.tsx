import { Button } from '@/client/components/ui/button'
import { Input } from '@/client/components/ui/input/input'
import { agendaTelefoneStore } from '@/client/features/agenda-telefone/agenda-telefone_store'
import { useMessageBox } from '@/client/lib/hooks/use-message-box'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export const AgendaTelefoneForm = () => {
  const status = agendaTelefoneStore.use.status()
  const onCancel = agendaTelefoneStore.use.onCancel()
  const onDelete = agendaTelefoneStore.use.onDelete()
  const onEdit = agendaTelefoneStore.use.onEdit()
  const onSave = agendaTelefoneStore.use.onSave()
  const recordClear = agendaTelefoneStore.use.recordClear()
  const fetchRecord = agendaTelefoneStore.use.fetchRecord()
  const selection = agendaTelefoneStore.use.selection()
  const record = agendaTelefoneStore.use.record()
  const setRecord = agendaTelefoneStore.use.setRecord()

  const form = useForm({ defaultValues: recordClear, mode: 'onTouched' })

  useEffect(() => {
    form.reset(record)
  }, [record])

  useEffect(() => {
    toast.promise(
      fetchRecord(),
      {
        loading: 'lendo...',
        success: 'sucesso!',
        error: 'Erro ao carregar cadastro!',
      },
      {
        id: 'agenda-telefone-form',
      }
    )
  }, [selection])

  const { MsgBox, confirm } = useMessageBox({
    title: 'Excluir',
    message: 'Confirma a exclusão do registro ?',
    option1: '[S]im',
    option2: '[N]ão',
  })

  async function handleDel() {
    const response = await confirm(
      'Tem certeza que deseja apagar ' + form?.getValues('name')
    )
    if (response === 'option1') {
      onDelete()
    }
  }

  return (
    <div data-name="AgendaTelefoneForm">
      <div className="flex my-2 space-x-2 flex-rows">
        <Button
          onClick={onEdit}
          disabled={['none', 'edit', 'new'].includes(status)}
          size="sm"
          outline
        >
          [E]DITAR
        </Button>
        <Button
          onClick={handleDel}
          disabled={['none', 'edit', 'new'].includes(status)}
          size="sm"
          outline
        >
          E[X]CLUIR
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
                disabled={['none', 'view'].includes(status)}
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
                disabled={['none', 'view'].includes(status)}
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
                disabled={['none', 'view'].includes(status)}
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
                disabled={['none', 'view'].includes(status)}
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
          onClick={() => {
            setRecord(form.getValues())
            onSave()
          }}
          disabled={['none', 'view'].includes(status)}
          size="sm"
          outline
        >
          [S]AVE
        </Button>
        <Button
          onClick={() => {
            form.reset()
            onCancel()
          }}
          disabled={['none', 'view'].includes(status)}
          size="sm"
          outline
        >
          [C]ANCEL
        </Button>
      </div>
      <MsgBox />
    </div>
  )
}
