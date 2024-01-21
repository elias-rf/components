import { Button } from '@/client/components/button/button.js'
import { Label } from '@/client/components/label/label.js'
import { FormField } from '@/client/components/ui-old/form-field/form-field.js'
import { InputForm } from '@/client/components/ui-old/input/input-form.js'
import { SelectBadgeForm } from '@/client/components/ui-old/select-badge/select-badge-form.js'
import { ToggleForm } from '@/client/components/ui-old/toggle/toggle-form.js'
import { useMessageBox } from '@/client/lib/hooks/use-message-box.js'
import { rpc } from '@/client/lib/rpc.js'
import { TUsuarioStore } from '@/client/pages/sistema/usuarios/usuario.store.js'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useEffectOnce } from 'usehooks-ts'
import { useSnapshot } from 'valtio'

export function UsuarioForm({ store }: { store: TUsuarioStore }) {
  const [listGroups, setListGroups] = useState<
    [label: string, value: string][]
  >([])

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
        id: 'usuario-form',
      }
    )
  }, [state.selection])

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
      store.onDelete()
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
          onClick={store.onEdit}
          disabled={['none', 'edit', 'new'].includes(state.status)}
          size="sm"
        >
          EDITAR
        </Button>
        <Button
          onClick={handleDel}
          disabled={['none', 'edit', 'new'].includes(state.status)}
          size="sm"
        >
          EXCLUIR
        </Button>
      </div>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 sm:col-span-2 lg:col-span-1">
          <FormField>
            <Label htmlFor="kUsuario">Código *</Label>
            <InputForm
              disabled={['none', 'view'].includes(state.status)}
              {...form.register('kUsuario')}
            />
          </FormField>
        </div>
        <div className="col-span-12 sm:col-span-10 lg:col-span-5">
          <FormField>
            <Label htmlFor="nome">Usuario</Label>
            <InputForm
              disabled={['none', 'view'].includes(state.status)}
              {...form.register('nome')}
            />
          </FormField>
        </div>
        <div className="col-span-12 sm:col-span-4 lg:col-span-2">
          <FormField>
            <Label htmlFor="NomeUsuario">Login *</Label>
            <InputForm
              disabled={['none', 'view'].includes(state.status)}
              {...form.register('NomeUsuario')}
            />
          </FormField>
        </div>
        <div className="col-span-10 sm:col-span-6 lg:col-span-3">
          <FormField>
            <Label htmlFor="email">Email *</Label>
            <InputForm
              disabled={['none', 'view'].includes(state.status)}
              {...form.register('email')}
            />
          </FormField>
        </div>
        <div className="col-span-2 sm:col-span-2 lg:col-span-1">
          <FormField>
            <Label htmlFor="Ativo">Ativo *</Label>
            <ToggleForm
              disabled={['none', 'view'].includes(state.status)}
              {...form.register('Ativo')}
            />
          </FormField>
        </div>
        <div className="col-span-12">
          <FormField>
            <Label htmlFor="setor">Grupo *</Label>
            <SelectBadgeForm
              disabled={['none', 'view'].includes(state.status)}
              {...form.register('setor')}
              options={listGroups}
            />
          </FormField>
        </div>
      </div>
      <div className="flex-rows my-2 flex justify-end space-x-2">
        <Button
          onClick={() => {
            store.setRecord(form.getValues())
            store.onSave()
          }}
          disabled={['none', 'view'].includes(state.status)}
          size="sm"
        >
          SAVE
        </Button>
        <Button
          onClick={store.onCancel}
          disabled={['none', 'view'].includes(state.status)}
          size="sm"
        >
          CANCEL
        </Button>
      </div>
      <MsgBox />
    </div>
  )
}
