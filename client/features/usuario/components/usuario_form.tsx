import { Button } from '@/client/components/ui/button'
import { Input } from '@/client/components/ui/input'
import { SelectBadge } from '@/client/components/ui/select-badge'
import { Toggle } from '@/client/components/ui/toggle'
import { formButtonStatus } from '@/client/lib/form-button-status'
import { useMessageBox } from '@/client/lib/hooks/use-message-box'
import { rpc } from '@/rpc/rpc-client'
import { TFormStatus } from '@/types'
import { useState } from 'react'
import { Controller, UseFormReturn } from 'react-hook-form'
import { useEffectOnce } from 'usehooks-ts'

type TUsuarioFormProps = {
  form: UseFormReturn<any>
  onCancel?: () => void
  onDel?: () => void
  onEdit?: () => void
  onSave?: () => void
  status?: TFormStatus
}

export function UsuarioForm({
  form,
  onCancel,
  onDel,
  onEdit,
  onSave,
  status = 'none',
}: TUsuarioFormProps) {
  const [listGroups, setListGroups] = useState<[string, string][]>([])

  const frmStatus = formButtonStatus(status)

  const { MsgBox, confirm } = useMessageBox({
    title: 'Excluir',
    message: 'Confirma a exclusão do registro ?',
    option1: 'CONFIRMAR',
    option2: 'CANCELAR',
  })

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

  async function handleDel() {
    const response = await confirm(
      'Tem certeza que deseja apagar ' + form.getValues('name')
    )
    if (response === 'option1') {
      onDel && onDel()
    }
  }

  return (
    <div data-name="AgendaTelefoneForm">
      <div className="flex my-2 space-x-2 flex-rows">
        <Button
          onClick={onEdit}
          disabled={frmStatus.editDisabled}
          size="sm"
          outline
        >
          EDITAR
        </Button>
        <Button
          onClick={handleDel}
          disabled={frmStatus.delDisabled}
          size="sm"
          outline
        >
          EXCLUIR
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
                disabled={frmStatus.formDisabled}
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
                disabled={frmStatus.formDisabled}
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
                disabled={frmStatus.formDisabled}
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
                disabled={frmStatus.formDisabled}
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
                disabled={frmStatus.formDisabled}
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
                disabled={frmStatus.formDisabled}
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
            onClick={onSave}
            disabled={frmStatus.saveDisabled}
            size="sm"
            outline
          >
            SAVE
          </Button>
        ) : null}
        {onCancel ? (
          <Button
            onClick={onCancel}
            disabled={frmStatus.cancelDisabled}
            size="sm"
            outline
          >
            CANCEL
          </Button>
        ) : null}
      </div>
      <MsgBox />
    </div>
  )
}
