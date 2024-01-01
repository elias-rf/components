import { Button } from '@/client/components/ui-old/button/button.js'
import { FormField } from '@/client/components/ui-old/form-field/form-field.js'
import { InputForm } from '@/client/components/ui-old/input/input-form.js'
import { Label } from '@/client/components/ui-old/label.js'
import { SelectBadgeForm } from '@/client/components/ui-old/select-badge/select-badge-form.js'
import { ToggleForm } from '@/client/components/ui-old/toggle/toggle-form.js'
import { useMessageBox } from '@/client/lib/hooks/use-message-box.js'
import { rpc } from '@/client/lib/rpc.js'
import { TUsuarioStore } from '@/client/pages/sistema/usuarios/usuarios_store.js'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useEffectOnce } from 'usehooks-ts'

export function UsuarioForm({ store }: { store: TUsuarioStore }) {
  const [listGroups, setListGroups] = useState<
    [label: string, value: string][]
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
      'Tem certeza que deseja apagar ' + form.getValues('nome') + '?'
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
      const list: [label: string, value: string][] = data.map((item: any) => [
        item.NomeGrupo,
        item.kGrupo,
      ])
      list.unshift(['Administrador', '0'])
      list.unshift(['', ''])
      setListGroups(list)
    }
    getData()
  })

  return (
    <div data-name="UsuarioForm">
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
        <div className="col-span-12 sm:col-span-2 lg:col-span-1">
          <FormField>
            <Label
              required
              name="kUsuario"
            >
              Código
            </Label>
            <InputForm
              disabled={['none', 'view'].includes(status)}
              {...form.register('kUsuario')}
            />
          </FormField>
        </div>
        <div className="col-span-12 sm:col-span-10 lg:col-span-5">
          <FormField>
            <Label
              required
              name="nome"
            >
              Usuario
            </Label>
            <InputForm
              disabled={['none', 'view'].includes(status)}
              {...form.register('nome')}
            />
          </FormField>
        </div>
        <div className="col-span-12 sm:col-span-4 lg:col-span-2">
          <FormField>
            <Label
              required
              name="NomeUsuario"
            >
              Login
            </Label>
            <InputForm
              disabled={['none', 'view'].includes(status)}
              {...form.register('NomeUsuario')}
            />
          </FormField>
        </div>
        <div className="col-span-10 sm:col-span-6 lg:col-span-3">
          <FormField>
            <Label
              required
              name="email"
            >
              Email
            </Label>
            <InputForm
              disabled={['none', 'view'].includes(status)}
              {...form.register('email')}
            />
          </FormField>
        </div>
        <div className="col-span-2 sm:col-span-2 lg:col-span-1">
          <FormField>
            <Label
              required
              name="Ativo"
            >
              Ativo
            </Label>
            <ToggleForm
              disabled={['none', 'view'].includes(status)}
              {...form.register('Ativo')}
            />
          </FormField>
        </div>
        <div className="col-span-12">
          <FormField>
            <Label
              required
              name="setor"
            >
              Grupo
            </Label>
            <SelectBadgeForm
              disabled={['none', 'view'].includes(status)}
              {...form.register('setor')}
              options={listGroups}
            />
          </FormField>
        </div>
      </div>
      <div className="flex-rows my-2 flex justify-end space-x-2">
        {onSave ? (
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
