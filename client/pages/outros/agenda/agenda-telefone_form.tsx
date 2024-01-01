import { Button } from '@/client/components/ui-old/button/button.js'
import { FormField } from '@/client/components/ui-old/form-field/form-field.js'
import { InputForm } from '@/client/components/ui-old/input/input-form.js'
import { Label } from '@/client/components/ui-old/label.js'
import { useMessageBox } from '@/client/lib/hooks/use-message-box.js'
import { TAgendaTelefoneStore } from '@/client/pages/outros/agenda/agenda-telefone_store.js'
import { useHookstate } from '@hookstate/core'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

export const AgendaTelefoneForm = ({
  store,
}: {
  store: TAgendaTelefoneStore
}) => {
  const form = useForm({ defaultValues: store.state.recordClear.value })
  const { record, selection, status } = useHookstate(store.state)
  const action = store.action

  useEffect(() => {
    form.reset(record.value)
  }, [record])

  useEffect(() => {
    toast.promise(
      action.fetchRecord(),
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
      action.onDelete()
    }
  }

  return (
    <div data-name="AgendaTelefoneForm">
      <div className="flex-rows my-2 flex space-x-2">
        <Button
          onClick={action.onEdit}
          disabled={['none', 'edit', 'new'].includes(status.value)}
          size="sm"
          outline
        >
          [E]DITAR
        </Button>
        <Button
          onClick={handleDel}
          disabled={['none', 'edit', 'new'].includes(status.value)}
          size="sm"
          outline
        >
          E[X]CLUIR
        </Button>
      </div>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 sm:col-span-2 lg:col-span-1">
          <FormField>
            <Label
              required
              name="id"
            >
              Ramal
            </Label>
            <InputForm
              disabled={['none', 'view'].includes(status.value)}
              {...form.register('id')}
            />
          </FormField>
        </div>
        <div className="col-span-12 sm:col-span-10 lg:col-span-5">
          <FormField>
            <Label name="name">Nome</Label>
            <InputForm
              disabled={['none', 'view'].includes(status.value)}
              {...form.register('name')}
            />
          </FormField>
        </div>
        <div className="col-span-12 sm:col-span-4 lg:col-span-2">
          <FormField>
            <Label name="id">Setor</Label>
            <InputForm
              disabled={['none', 'view'].includes(status.value)}
              {...form.register('department')}
            />
          </FormField>
        </div>
        <div className="col-span-12 sm:col-span-8 lg:col-span-4">
          <FormField>
            <Label name="id">Email</Label>
            <InputForm
              disabled={['none', 'view'].includes(status.value)}
              {...form.register('email')}
            />
          </FormField>
        </div>
      </div>
      <div className="flex-rows align-center my-2 flex justify-end space-x-2">
        <Button
          onClick={() => {
            record.set(form.getValues())
            action.onSave()
          }}
          disabled={['none', 'view'].includes(status.value)}
          size="sm"
          outline
        >
          [S]AVE
        </Button>
        <Button
          onClick={() => {
            form.reset()
            action.onCancel()
          }}
          disabled={['none', 'view'].includes(status.value)}
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
