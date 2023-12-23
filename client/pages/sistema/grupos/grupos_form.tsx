import { Button } from '@/client/components/ui/button/button.js'
import { FormField } from '@/client/components/ui/form-field/form-field.js'
import { InputForm } from '@/client/components/ui/input/input-form.js'
import { Label } from '@/client/components/ui/label.js'
import { useMessageBox } from '@/client/lib/hooks/use-message-box.js'
import { TGruposStore } from '@/client/pages/sistema/grupos/grupos_store.js'
import { TAuthStore } from '@/client/store/auth_store.js'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

export const GruposForm = ({
  store,
  auth,
}: {
  store: TGruposStore
  auth: TAuthStore
}) => {
  const status = store.use.status()
  const onCancel = store.use.onCancel()
  const onDelete = store.use.onDelete()
  const onEdit = store.use.onEdit()
  const onSave = store.use.onSave()
  const recordClear = store.use.recordClear()
  const fetchRecord = store.use.fetchRecord()
  const selection = store.use.selection()
  const record = store.use.record()
  const setRecord = store.use.setRecord()

  const form = useForm({ defaultValues: recordClear })

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
        id: 'grupos-form',
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
      'Tem certeza que deseja apagar ' + form.getValues('NomeGrupo') + '?'
    )
    if (response === 'option1') {
      onDelete()
    }
  }

  return (
    <div data-name="AgendaTelefoneForm">
      <div className="flex-rows my-2 flex space-x-2">
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
