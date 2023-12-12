import { Button } from '@/client/components/ui/button.js'
import { FormField } from '@/client/components/ui/form-field/form-field.js'
import { Input } from '@/client/components/ui/input/input.js'
import { Label } from '@/client/components/ui/label.js'
import { SelectBadge } from '@/client/components/ui/select-badge.js'
import { Toggle } from '@/client/components/ui/toggle.js'
import { TUsuarioStore } from '@/client/features/sistema/usuario/usuario_store.js'
import { useForm } from '@/client/lib/hooks/use-form.js'
import { useMessageBox } from '@/client/lib/hooks/use-message-box.js'
import { rpc } from '@/client/lib/rpc.js'
import { TAuthStore } from '@/client/store/auth_store.js'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useEffectOnce } from 'usehooks-ts'

export function UsuarioForm({
  store,
  auth,
}: {
  store: TUsuarioStore
  auth: TAuthStore
}) {
  const [listGroups, setListGroups] = useState<
    { label: string; value: string }[]
  >([])

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
        id: 'usuario-form',
      }
    )
  }, [selection])

  const { MsgBox, confirm } = useMessageBox({
    title: 'Excluir',
    message: 'Confirma a exclusão do registro ?',
    option1: 'CONFIRMAR',
    option2: 'CANCELAR',
  })

  async function handleDel() {
    const response = await confirm(
      'Tem certeza que deseja apagar ' + form.value.nome + '?'
    )
    if (response === 'option1') {
      onDelete()
    }
  }

  useEffectOnce(() => {
    async function getData() {
      const data = await rpc.request('group_list', {
        orderBy: [['NomeGrupo', 'asc']],
      })
      const list: { label: string; value: string }[] = data.map(
        (item: any) => ({
          label: item.NomeGrupo,
          value: item.kGrupo,
        })
      )
      list.unshift({ label: 'Administrador', value: '0' })
      list.unshift({ label: '', value: '' })
      setListGroups(list)
    }
    getData()
  })

  return (
    <div data-name="UsuarioForm">
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
              id="kUsuario"
            >
              Código
            </Label>
            <Input
              id="kUsuario"
              name="kUsuario"
              disabled={['none', 'view'].includes(status)}
              value={form.value.kUsuario}
              onInput={form.handleChange}
            />
          </FormField>
        </div>
        <div className="col-span-12 sm:col-span-10 lg:col-span-5">
          <FormField>
            <Label
              required
              id="nome"
            >
              Usuario
            </Label>
            <Input
              id="nome"
              name="nome"
              disabled={['none', 'view'].includes(status)}
              value={form.value.nome}
              onInput={form.handleChange}
            />
          </FormField>
        </div>
        <div className="col-span-12 sm:col-span-4 lg:col-span-2">
          <FormField>
            <Label
              required
              id="NomeUsuario"
            >
              Login
            </Label>
            <Input
              id="NomeUsuario"
              name="NomeUsuario"
              disabled={['none', 'view'].includes(status)}
              value={form.value.NomeUsuario}
              onInput={form.handleChange}
            />
          </FormField>
        </div>
        <div className="col-span-10 sm:col-span-6 lg:col-span-3">
          <FormField>
            <Label
              required
              id="email"
            >
              Email
            </Label>
            <Input
              id="email"
              name="email"
              disabled={['none', 'view'].includes(status)}
              value={form.value.email}
              onInput={form.handleChange}
            />
          </FormField>
        </div>
        <div className="col-span-2 sm:col-span-2 lg:col-span-1">
          <FormField>
            <Label
              required
              id="Ativo"
            >
              Ativo
            </Label>
            <Toggle
              id="Ativo"
              name="Ativo"
              disabled={['none', 'view'].includes(status)}
              value={form.value.Ativo}
              onInput={form.handleChange}
            />
          </FormField>
        </div>
        <div className="col-span-12">
          <FormField>
            <Label
              required
              id="setor"
            >
              Grupo
            </Label>
            <SelectBadge
              id="setor"
              name="setor"
              disabled={['none', 'view'].includes(status)}
              value={form.value.setor ? form.value.setor.split(',') : []}
              onInput={(value) => form.handleChange(value.join(','), 'setor')}
              options={listGroups}
            />
          </FormField>
        </div>
      </div>
      <div className="flex justify-end my-2 space-x-2 flex-rows">
        {onSave ? (
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
        ) : null}
        {onCancel ? (
          <Button
            onClick={onCancel}
            disabled={['none', 'view'].includes(status)}
            size="sm"
            outline
          >
            [C]ANCEL
          </Button>
        ) : null}
      </div>
      <MsgBox />
    </div>
  )
}
