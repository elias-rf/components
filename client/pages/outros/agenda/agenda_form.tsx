import { Button } from '@/client/components/ui-old/button/button.js'
import { FormField } from '@/client/components/ui-old/form-field/form-field.js'
import { InputForm } from '@/client/components/ui-old/input/input-form.js'
import { Label } from '@/client/components/ui-old/label.js'
import { useMessageBox } from '@/client/lib/hooks/use-message-box.js'
import { TAgendaTelefoneStore } from '@/client/pages/outros/agenda/components/agenda_store.js'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useSnapshot } from 'valtio'

export const AgendaTelefoneForm = ({
  store,
}: {
  store: TAgendaTelefoneStore
}) => {
  const state = useSnapshot(store.state)
  const form = useForm({ defaultValues: state.recordClear })

  useEffect(() => {
    form.reset(state.record)
  }, [state.record])

  useEffect(() => {
    toast.promise(
      store.fetchRecord(),
      {
        loading: 'lendo...',
        success: 'sucesso!',
        error: 'Erro ao carregar cadastro!',
      },
      {
        id: 'agenda-telefone-form',
      }
    )
  }, [state.selection])

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
      store.onDelete()
    }
  }

  return (
    <div>
      <div className="flex my-2 space-x-2 flex-rows">
        <Button
          onClick={store.onEdit}
          disabled={['none', 'edit', 'new'].includes(state.status)}
          size="sm"
          outline
        >
          [E]DITAR
        </Button>
        <Button
          onClick={handleDel}
          disabled={['none', 'edit', 'new'].includes(state.status)}
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
              disabled={['none', 'view'].includes(state.status)}
              {...form.register('id')}
            />
          </FormField>
        </div>
        <div className="col-span-12 sm:col-span-10 lg:col-span-5">
          <FormField>
            <Label name="name">Nome</Label>
            <InputForm
              disabled={['none', 'view'].includes(state.status)}
              {...form.register('name')}
            />
          </FormField>
        </div>
        <div className="col-span-12 sm:col-span-4 lg:col-span-2">
          <FormField>
            <Label name="department">Setor</Label>
            <InputForm
              disabled={['none', 'view'].includes(state.status)}
              {...form.register('department')}
            />
          </FormField>
        </div>
        <div className="col-span-12 sm:col-span-8 lg:col-span-4">
          <FormField>
            <Label name="email">Email</Label>
            <InputForm
              disabled={['none', 'view'].includes(state.status)}
              {...form.register('email')}
            />
          </FormField>
        </div>
      </div>
      <div className="flex justify-end my-2 space-x-2 flex-rows align-center">
        <Button
          onClick={() => {
            store.setRecord(form.getValues())
            store.onSave()
          }}
          disabled={['none', 'view'].includes(state.status)}
          size="sm"
          outline
        >
          [S]ALVAR
        </Button>
        <Button
          onClick={() => {
            form.reset()
            store.onCancel()
          }}
          disabled={['none', 'view'].includes(state.status)}
          size="sm"
          outline
        >
          [C]ANCELAR
        </Button>
      </div>
      <MsgBox />
    </div>
  )
}