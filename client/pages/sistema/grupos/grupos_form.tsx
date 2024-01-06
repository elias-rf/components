import { Button } from '@/client/components/ui-old/button/button.js'
import { FormField } from '@/client/components/ui-old/form-field/form-field.js'
import { InputForm } from '@/client/components/ui-old/input/input-form.js'
import { Label } from '@/client/components/ui-old/label.js'
import { useMessageBox } from '@/client/lib/hooks/use-message-box.js'
import { TGroupStore } from '@/client/pages/sistema/grupos/components/grupos_store.js'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useSnapshot } from 'valtio'

export const GruposForm = ({ store }: { store: TGroupStore }) => {
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
        id: 'grupos-form',
      }
    )
  }, [state.selection])

  const { MsgBox, confirm } = useMessageBox({
    title: 'Excluir',
    message: 'Confirma a exclusão do registro ?',
    option1: 'Sim',
    option2: 'Não',
  })

  async function handleDel() {
    const response = await confirm(
      `Tem certeza que deseja apagar ${form.getValues('NomeGrupo')} ?`
    )
    if (response === 'option1') {
      store.onDelete()
    }
  }

  return (
    <div data-name="AgendaTelefoneForm">
      <div className="flex-rows my-2 flex space-x-2">
        <Button
          onClick={store.onEdit}
          disabled={['none', 'edit', 'new'].includes(status)}
          size="sm"
          outline
        >
          EDITAR
        </Button>
        <Button
          onClick={handleDel}
          disabled={['none', 'edit', 'new'].includes(status)}
          size="sm"
          outline
        >
          EXCLUIR
        </Button>
      </div>
      <div className="grid grid-cols-12 gap-3">
        <FormField className="col-span-12 sm:col-span-2 lg:col-span-1">
          <Label
            required
            name="kGrupo"
          >
            Ramal
          </Label>
          <InputForm
            disabled={['none', 'view'].includes(status)}
            {...form.register('kGrupo')}
          />
        </FormField>
        <FormField className="col-span-12 sm:col-span-10 lg:col-span-5">
          <Label
            required
            name="NomeGrupo"
          >
            Nome
          </Label>
          <InputForm
            disabled={['none', 'view'].includes(status)}
            {...form.register('NomeGrupo')}
          />
        </FormField>
      </div>
      <div className="flex-rows align-center my-2 flex justify-end space-x-2">
        <Button
          onClick={() => {
            store.setRecord(form.getValues())
            store.onSave()
          }}
          disabled={['none', 'view'].includes(status)}
          size="sm"
          outline
        >
          SALVAR
        </Button>
        <Button
          onClick={() => {
            form.reset()
            store.onCancel()
          }}
          disabled={['none', 'view'].includes(status)}
          size="sm"
          outline
        >
          CANCELAR
        </Button>
      </div>
      <MsgBox />
    </div>
  )
}
