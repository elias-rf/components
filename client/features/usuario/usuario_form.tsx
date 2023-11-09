import { Button } from '@/client/components/ui/button'
import { Input } from '@/client/components/ui/input/input'
import { SelectBadge } from '@/client/components/ui/select-badge'
import { Toggle } from '@/client/components/ui/toggle'
import { usuarioStore } from '@/client/features/usuario/usuario_store'
import { useMessageBox } from '@/client/lib/hooks/use-message-box'
import { rpc } from '@/rpc/rpc-client'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useEffectOnce } from 'usehooks-ts'

export function UsuarioForm() {
  const [listGroups, setListGroups] = useState<[string, string][]>([])

  const status = usuarioStore.use.status()
  const onCancel = usuarioStore.use.onCancel()
  const onDelete = usuarioStore.use.onDelete()
  const onEdit = usuarioStore.use.onEdit()
  const onSave = usuarioStore.use.onSave()
  const recordClear = usuarioStore.use.recordClear()
  const fetchRecord = usuarioStore.use.fetchRecord()
  const selection = usuarioStore.use.selection()
  const record = usuarioStore.use.record()
  const setRecord = usuarioStore.use.setRecord()

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
      'Tem certeza que deseja apagar ' + form?.getValues('nome')
    )
    if (response === 'option1') {
      onDelete()
    }
  }

  useEffectOnce(() => {
    async function getData() {
      const data = await rpc.group.list({
        orderBy: [['NomeGrupo', 'asc']],
      })
      const list = data.map(
        (item) => [item.NomeGrupo, item.kGrupo] as [string, string]
      )
      list.unshift(['Administrador', '0'])
      list.unshift(['', ''])
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
          <Controller
            name="kUsuario"
            control={form.control}
            rules={{
              required: 'Código é obrigatório',
            }}
            render={({ field, fieldState }) => (
              <Input
                required
                label="Usuario"
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
        <div className="col-span-12 sm:col-span-10 lg:col-span-5">
          <Controller
            name="nome"
            control={form.control}
            rules={{
              required: 'Nome é obrigatório',
            }}
            render={({ field, fieldState }) => (
              <Input
                required
                label="Usuario"
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
            name="NomeUsuario"
            control={form.control}
            rules={{
              required: 'Ramal é obrigatório',
            }}
            render={({ field, fieldState }) => (
              <Input
                required
                label="Login"
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
        <div className="col-span-10 sm:col-span-6 lg:col-span-3">
          <Controller
            name="email"
            control={form.control}
            rules={{
              required: 'Ramal é obrigatório',
            }}
            render={({ field, fieldState }) => (
              <Input
                required
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
        <div className="col-span-2 sm:col-span-2 lg:col-span-1">
          <Controller
            name="Ativo"
            control={form.control}
            rules={{
              required: 'Ramal é obrigatório',
            }}
            render={({ field, fieldState }) => (
              <Toggle
                required
                label="Ativo"
                disabled={['none', 'view'].includes(status)}
                variant={fieldState.error && 'error'}
                helper={fieldState.error?.message}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </div>
        <div className="col-span-12">
          <Controller
            name="idGroup"
            control={form.control}
            rules={{
              required: 'Ramal é obrigatório',
            }}
            render={({ field, fieldState }) => (
              <SelectBadge
                required
                label="Grupo"
                disabled={['none', 'view'].includes(status)}
                variant={fieldState.error && 'error'}
                helper={fieldState.error?.message}
                value={field.value ? field.value.split(',') : []}
                onChange={(value) => field.onChange(value.join(','))}
                onBlur={field.onBlur}
                options={listGroups}
              />
            )}
          />
        </div>
      </div>
      <div className="flex justify-end my-2 space-x-2 flex-rows">
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
