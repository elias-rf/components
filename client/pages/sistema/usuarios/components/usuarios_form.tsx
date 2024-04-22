import { Button } from '@/client/components/button/button.js'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/client/components/form/form.js'
import { Input } from '@/client/components/input/input.js'
import { SelectBadge } from '@/client/components/select-badge/select-badge.js'
import { Toggle } from '@/client/components/toggle/toggle.js'
import { useMessageBox } from '@/client/lib/hooks/use-message-box.js'
import { rpc } from '@/client/lib/rpc.js'
import { TUsuarioStore } from '@/client/pages/sistema/usuarios/components/usuario.store.js'
import {
  TUsuarioDtoFields,
  TUsuarioDtoKeys,
} from '@/core/usuario/usuario.type.js'
import { TData, TId } from '@/types/index.js'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

export function UsuarioForm({ store }: { store: TUsuarioStore }) {
  const [listGroups, setListGroups] = useState<
    [label: string, value: string][]
  >([])

  const status = store.state.use.status()
  const selection = store.state.use.selection()

  const form = useForm({ defaultValues: store.recordClear })
  const query = useQuery({
    queryKey: ['usuario', { selection }],
    queryFn: () => store.fetchRecord({ selection }),
  })
  const queryClient = useQueryClient()

  const onSave = useMutation({
    mutationFn: (record: TData<TUsuarioDtoFields>) => {
      return store.onSave(record)
    },
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ['usuario'],
        type: 'active',
      })
    },
  })

  const onDelete = useMutation({
    mutationFn: (selection: TId<TUsuarioDtoKeys>) => {
      return store.onDelete(selection)
    },
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ['usuario'],
      })
    },
  })

  useEffect(() => {
    form.reset(query.data || store.recordClear)
  }, [query.data])

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
      onDelete.mutate(selection)
    }
  }

  useEffect(() => {
    async function getData() {
      const data = await rpc.request('grupo_list', {
        orderBy: [['nome', 'asc']],
      })

      const list: [label: string, value: string][] = data.map((item: any) => [
        item.nome,
        item.id,
      ])
      list.unshift(['Administrador', '0'])
      list.unshift(['', ''])
      setListGroups(list)
    }

    getData()
  }, [])

  return (
    <>
      <div className="flex-rows my-2 flex space-x-2">
        <Button
          onClick={store.onEdit}
          disabled={['none', 'edit', 'new'].includes(status)}
          size="sm"
        >
          EDITAR
        </Button>
        <Button
          onClick={handleDel}
          disabled={['none', 'edit', 'new'].includes(status)}
          size="sm"
        >
          EXCLUIR
        </Button>
      </div>
      <div className="grid grid-cols-12 gap-3">
        <Form {...form}>
          <FormField
            control={form.control}
            name="id"
            render={({ field }) => (
              <FormItem className="col-span-12 sm:col-span-2 lg:col-span-1">
                <FormLabel>Código *</FormLabel>
                <FormControl>
                  <Input
                    disabled={['none', 'view'].includes(status)}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem className="col-span-12 sm:col-span-10 lg:col-span-5">
                <FormLabel>Usuario</FormLabel>
                <FormControl>
                  <Input
                    disabled={['none', 'view'].includes(status)}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="usuario"
            render={({ field }) => (
              <FormItem className="col-span-12 sm:col-span-4 lg:col-span-2">
                <FormLabel>Login *</FormLabel>
                <FormControl>
                  <Input
                    disabled={['none', 'view'].includes(status)}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="col-span-10 sm:col-span-6 lg:col-span-3">
                <FormLabel htmlFor="email">Email *</FormLabel>
                <FormControl>
                  <Input
                    disabled={['none', 'view'].includes(status)}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ativo"
            render={({ field }) => (
              <FormItem className="col-span-2 sm:col-span-2 lg:col-span-1">
                <FormLabel>Ativo *</FormLabel>
                <FormControl>
                  <Toggle
                    disabled={['none', 'view'].includes(status)}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="grupos"
            render={({ field }) => (
              <FormItem className="col-span-12">
                <FormLabel>Grupo *</FormLabel>
                <FormControl>
                  <SelectBadge
                    disabled={['none', 'view'].includes(status)}
                    {...field}
                    options={listGroups}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </Form>
      </div>
      <div className="flex-rows my-2 flex justify-end space-x-2">
        <Button
          onClick={() => {
            onSave.mutate(form.getValues())
          }}
          disabled={['none', 'view'].includes(status)}
          size="sm"
        >
          SALVAR
        </Button>
        <Button
          onClick={store.onCancel}
          disabled={['none', 'view'].includes(status)}
          size="sm"
        >
          CANCELAR
        </Button>
      </div>
      <MsgBox />
    </>
  )
}
