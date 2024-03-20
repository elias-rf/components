import { Button } from '@/client/components/button/button.js'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/client/components/form/form.js'
import { Input } from '@/client/components/input/input.js'
import { useMessageBox } from '@/client/lib/hooks/use-message-box.js'
import { TAgendaTelefoneStore } from '@/client/pages/outros/agenda/components/agenda.store.js'
import {
  TAgendaTelefoneDtoFields,
  TAgendaTelefoneDtoKeys,
} from '@/data/oftalmo/agenda-telefone/agenda-telefone.type.js'
import { TData, TId } from '@/types/index.js'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export const AgendaTelefoneForm = ({
  store,
}: {
  store: TAgendaTelefoneStore
}) => {
  const status = store.state.use.status()
  const selection = store.state.use.selection()
  const form = useForm({ defaultValues: store.recordClear })
  const query = useQuery({
    queryKey: ['agendaTelefone', { selection }],
    queryFn: () => store.fetchRecord({ selection }),
  })
  const queryClient = useQueryClient()
  const onSave = useMutation({
    mutationFn: (record: TData<TAgendaTelefoneDtoFields>) => {
      return store.onSave(record)
    },
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ['agendaTelefone'],
      })
    },
  })

  const onDelete = useMutation({
    mutationFn: (selection: TId<TAgendaTelefoneDtoKeys>) => {
      return store.onDelete(selection)
    },
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ['agendaTelefone'],
      })
    },
  })

  useEffect(() => {
    form.reset(query.data || store.recordClear)
  }, [query.data])

  const { MsgBox, confirm } = useMessageBox({
    title: 'Excluir',
    message: 'Confirma a exclusão do registro ?',
    option1: 'Sim',
    option2: 'Não',
  })

  async function handleDel() {
    const response = await confirm(
      'Tem certeza que deseja apagar ' + form?.getValues('nome')
    )
    if (response === 'option1') {
      onDelete.mutate(selection)
    }
  }

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
                <FormLabel>Ramal *</FormLabel>
                <FormControl>
                  <Input
                    disabled={['none', 'view'].includes(status)}
                    {...form.register('id')}
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
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input
                    disabled={['none', 'view'].includes(status)}
                    {...form.register('nome')}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="setor"
            render={({ field }) => (
              <FormItem className="col-span-12 sm:col-span-4 lg:col-span-2">
                <FormLabel>Setor</FormLabel>
                <FormControl>
                  <Input
                    disabled={['none', 'view'].includes(status)}
                    {...form.register('setor')}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="col-span-12 sm:col-span-8 lg:col-span-4">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    disabled={['none', 'view'].includes(status)}
                    {...form.register('email')}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </Form>
      </div>
      <div className="flex-rows align-center my-2 flex justify-end space-x-2">
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
          onClick={() => {
            form.reset()
            store.onCancel()
          }}
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
