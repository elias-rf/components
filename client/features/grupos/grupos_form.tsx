import { Button } from '@/client/components/ui/button'
import { FormField } from '@/client/components/ui/form-field'
import { Input } from '@/client/components/ui/input/input'
import { Label } from '@/client/components/ui/label'
import { gruposStore } from '@/client/features/grupos/grupos_store'
import { useForm } from '@/client/lib/hooks/use-form'
import { useMessageBox } from '@/client/lib/hooks/use-message-box'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

export const GruposForm = () => {
  const status = gruposStore.use.status()
  const onCancel = gruposStore.use.onCancel()
  const onDelete = gruposStore.use.onDelete()
  const onEdit = gruposStore.use.onEdit()
  const onSave = gruposStore.use.onSave()
  const recordClear = gruposStore.use.recordClear()
  const fetchRecord = gruposStore.use.fetchRecord()
  const selection = gruposStore.use.selection()
  const record = gruposStore.use.record()
  const setRecord = gruposStore.use.setRecord()

  const form = useForm({ value: recordClear })

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
      'Tem certeza que deseja apagar ' + form.value.NomeGrupo + '?'
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
          <FormField>
            <Label
              required
              id="kGrupo"
            >
              Ramal
            </Label>
            <Input
              disabled={['none', 'view'].includes(status)}
              onInput={form.handleChange}
              value={form.value.kGrupo}
            />
          </FormField>
        </div>
        <div className="col-span-12 sm:col-span-10 lg:col-span-5">
          <FormField>
            <Label
              required
              id="NomeGrupo"
            >
              Nome
            </Label>
            <Input
              disabled={['none', 'view'].includes(status)}
              value={form.value.NomeGrupo}
              onInput={form.handleChange}
            />
          </FormField>
        </div>
      </div>
      <div className="flex justify-end my-2 space-x-2 flex-rows align-center">
        <Button
          onClick={() => {
            setRecord(form.value)
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