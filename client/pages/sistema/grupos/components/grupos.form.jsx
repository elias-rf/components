import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../../../../components_/button/button.jsx'
import { Label } from '../../../../components_/label/label.jsx'
import { FormField } from '../../../../components_/ui-old/form-field/form-field.jsx'
import { InputForm } from '../../../../components_/ui-old/input/input-form.jsx'
import { useMessageBox } from '../../../../lib/hooks/use-message-box.jsx'

export const GruposForm = ({ store }) => {
  const status = store.state.use.status()
  const selection = store.state.use.selection()

  const form = useForm({ defaultValues: store.recordClear })
  const query = useQuery({
    queryKey: ['usuario', { selection }],
    queryFn: () => store.fetchRecord({ selection }),
  })
  const queryClient = useQueryClient()
  const onSave = useMutation({
    mutationFn: (record) => {
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
    mutationFn: (selection) => {
      return store.onDelete(selection)
    },
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: ['grupo'],
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
      `Tem certeza que deseja apagar ${form.getValues('nome')} ?`
    )
    if (response === 'option1') {
      onDelete.mutate(selection)
    }
  }

  return (
    <div data-name="AgendaTelefoneForm">
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
        <FormField className="col-span-12 sm:col-span-2 lg:col-span-1">
          <Label htmlFor="kGrupo">Código *</Label>
          <InputForm
            disabled={['none', 'view'].includes(status)}
            {...form.register('id')}
          />
        </FormField>
        <FormField className="col-span-12 sm:col-span-10 lg:col-span-5">
          <Label htmlFor="NomeGrupo">Nome *</Label>
          <InputForm
            disabled={['none', 'view'].includes(status)}
            {...form.register('nome')}
          />
        </FormField>
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
          onClick={store.onCancel}
          disabled={['none', 'view'].includes(status)}
          size="sm"
        >
          CANCELAR
        </Button>
      </div>
      <MsgBox />
    </div>
  )
}
