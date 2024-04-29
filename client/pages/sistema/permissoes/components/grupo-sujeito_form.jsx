import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../../../../components/button/button.jsx'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '../../../../components/form/form.jsx'
import { Input } from '../../../../components/input/input.jsx'
import { useMessageBox } from '../../../../lib/hooks/use-message-box.jsx'

export const GrupoSujeitoForm = ({ store }) => {
  const status = store.state.use.status()
  const selection = store.state.use.selection()
  const form = useForm({ defaultValues: store.recordClear })
  const query = useQuery({
    queryKey: ['agendaTelefone', { selection }],
    queryFn: () => store.fetchRecord({ selection }),
  })
  const queryClient = useQueryClient()
  const onSave = useMutation({
    mutationFn: (record) => {
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
    mutationFn: (selection) => {
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
            name="grupoId"
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
            name="sujeitoId"
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
