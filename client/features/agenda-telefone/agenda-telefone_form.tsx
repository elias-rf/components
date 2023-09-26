import { Input } from '@/client/components/ui/input'
import { Controller, UseFormReturn } from 'react-hook-form'

type TAgendaTelefoneFormProps = {
  form: UseFormReturn<any>
  disabled: boolean
}

export const AgendaTelefoneForm = ({
  form,
  disabled,
}: TAgendaTelefoneFormProps) => {
  return (
    <>
      <div className="grid gap-3 grid-cols-12">
        <div className="col-span-12 sm:col-span-2 lg:col-span-1">
          <Controller
            name="id"
            control={form.control}
            rules={{
              required: 'Ramal é obrigatório',
            }}
            render={({ field, fieldState }) => (
              <Input
                required
                label="Ramal"
                disabled={disabled}
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
            name="name"
            control={form.control}
            rules={{
              required: 'Nome é obrigatório',
            }}
            render={({ field, fieldState }) => (
              <Input
                required
                label="Nome"
                disabled={disabled}
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
            name="department"
            control={form.control}
            render={({ field, fieldState }) => (
              <Input
                label="Setor"
                disabled={disabled}
                variant={fieldState.error && 'error'}
                helper={fieldState.error?.message}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
        </div>
        <div className="col-span-12 sm:col-span-8 lg:col-span-4">
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Input
                label="Email"
                disabled={disabled}
                variant={fieldState.error && 'error'}
                helper={fieldState.error?.message}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          />
        </div>
      </div>
    </>
  )
}
