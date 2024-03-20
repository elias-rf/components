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
import { TGroupSubjectStore } from '@/client/pages/sistema/permissoes/components/group-subject.store.js'
import {
  TGroupSubjectFields,
  TGroupSubjectKeys,
} from '@/core/group-subject/group-subject_controller.js'
import { TData, TId } from '@/types/index.js'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export const GroupSubjectForm = ({ store }: { store: TGroupSubjectStore }) => {
  const status = store.state.use.status()
  const selection = store.state.use.selection()
  const form = useForm({ defaultValues: store.recordClear })
  const query = useQuery({
    queryKey: ['agendaTelefone', { selection }],
    queryFn: () => store.fetchRecord({ selection }),
  })
  const queryClient = useQueryClient()
  const onSave = useMutation({
    mutationFn: (record: TData<TGroupSubjectFields>) => {
      return store.onSave(record)
    },
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ['agendaTelefone'],
        type: 'active',
      })
    },
  })

  const onDelete = useMutation({
    mutationFn: (selection: TId<TGroupSubjectKeys>) => {
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
      'Tem certeza que deseja apagar este registro'
    )
    if (response === 'option1') {
      onDelete.mutate(selection)
    }
  }

  return (
    <div>
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
            name="idGroup"
            render={({ field }) => (
              <FormItem className="col-span-6">
                <FormLabel>Grupo</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="idSubject"
            render={({ field }) => (
              <FormItem className="col-span-6">
                <FormLabel>Recurso</FormLabel>
                <FormControl>
                  <Input {...field} />
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
    </div>
  )
}
