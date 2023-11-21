import { Button } from '@/client/components/ui/button.js'
import { FormField } from '@/client/components/ui/form-field/form-field.js'
import { Input } from '@/client/components/ui/input/input.js'
import { Label } from '@/client/components/ui/label.js'
import { agendaTelefoneStore } from '@/client/features/agenda-telefone/agenda-telefone_store.js'
import { useForm } from '@/client/lib/hooks/use-form.js'
import { useMessageBox } from '@/client/lib/hooks/use-message-box.js'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'

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
      'Tem certeza que deseja apagar ' + form?.value.name
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
              id="id"
            >
              Ramal
            </Label>
            <Input
              id="id"
              name="id"
              disabled={['none', 'view'].includes(status)}
              onInput={form.handleChange}
              value={form.value.id}
            />
          </FormField>
        </div>
        <div className="col-span-12 sm:col-span-10 lg:col-span-5">
          <FormField>
            <Label id="name">Nome</Label>
            <Input
              name="name"
              id="name"
              disabled={['none', 'view'].includes(status)}
              value={form.value.name}
              onInput={form.handleChange}
            />
          </FormField>
        </div>
        <div className="col-span-12 sm:col-span-4 lg:col-span-2">
          <FormField>
            <Label id="id">Setor</Label>
            <Input
              name="department"
              disabled={['none', 'view'].includes(status)}
              value={form.value.department}
              onInput={form.handleChange}
            />
          </FormField>
        </div>
        <div className="col-span-12 sm:col-span-8 lg:col-span-4">
          <FormField>
            <Label id="id">Email</Label>
            <Input
              name="email"
              id="email"
              disabled={['none', 'view'].includes(status)}
              value={form.value.email}
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
