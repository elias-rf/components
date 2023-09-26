import { Button } from '@/client/components/ui/button'
import { Input } from '@/client/components/ui/input'
import { formStatus } from '@/client/lib/form-status'
import type { Story, StoryDefault } from '@ladle/react'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { JsonViewer } from '@textea/json-viewer'
import { useMessageBox } from '@/client/lib/hooks/use-message-box'

export default {
  title: 'Components / Form',
} satisfies StoryDefault

function FormStory() {
  const form = useForm({
    mode: 'onTouched',
    defaultValues: { fld1: '1', fld2: '2' },
  })
  const { MsgBox, confirm } = useMessageBox({
    title: 'Excluir',
    message: 'Confirma a exclusão do registro ?',
    option1: 'CONFIRMAR',
    option2: 'CANCELAR',
  })
  const [frmStatus, setFrmStatus] = React.useState(formStatus('view'))

  function onEdit() {
    setFrmStatus(formStatus('edit'))
  }

  function onCreate() {
    setFrmStatus(formStatus('new'))
  }

  async function onDel() {
    const response = await confirm()
    if (response === 'option1') {
      setFrmStatus(formStatus('new'))
    }
  }

  function onSave() {
    setFrmStatus(formStatus('view'))
  }

  function onCancel() {
    setFrmStatus(formStatus('view'))
  }

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-row space-x-2">
        <Button
          onClick={onEdit}
          disabled={frmStatus.editDisabled}
          size="sm"
          outline
        >
          EDITAR
        </Button>
        <Button
          onClick={onCreate}
          disabled={frmStatus.createDisabled}
          size="sm"
          outline
        >
          NOVO
        </Button>
        <Button
          onClick={onDel}
          disabled={frmStatus.delDisabled}
          size="sm"
          outline
        >
          EXCLUIR
        </Button>
        <MsgBox />
      </div>
      <div className="flex flex-col space-y-2">
        <Controller
          name="fld1"
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              required
              disabled={frmStatus.formDisabled}
              label={'Field 1'}
              variant={fieldState.error && 'error'}
              helper={fieldState.error?.message}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
            />
          )}
        />
        <Controller
          name="fld2"
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              required
              disabled={frmStatus.formDisabled}
              label={'Field 2'}
              variant={fieldState.error && 'error'}
              helper={fieldState.error?.message}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
            />
          )}
        />
      </div>
      <div className="flex flex-row space-x-2">
        <Button
          onClick={onSave}
          disabled={frmStatus.saveDisabled}
          size="sm"
          outline
        >
          SALVAR
        </Button>
        <Button
          onClick={onCancel}
          disabled={frmStatus.cancelDisabled}
          size="sm"
          outline
        >
          CANCELAR
        </Button>
      </div>
      <JsonViewer value={frmStatus} />
    </div>
  )
}

export const Default: Story = () => <FormStory />
