import { Input } from '@/client/components/ui/input'
import { Controller, UseFormReturn } from 'react-hook-form'
type TGroupSubjectFormProps = {
  form: UseFormReturn<any>
  disabled: boolean
}

export function GroupSubjectForm({ form, disabled }: TGroupSubjectFormProps) {
  return (
    <div className="grid gap-3 grid-cols-12">
      <div className="col-span-6">
        <Controller
          name="idGroup"
          control={form.control}
          rules={{
            required: 'Grupo é obrigatório',
          }}
          render={({ field, fieldState }) => (
            <Input
              required
              label={'Grupo'}
              disabled={disabled}
              helper={fieldState.error?.message}
              variant={fieldState.error && 'error'}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
            />
          )}
        />
      </div>
      <div className="col-span-6">
        <Controller
          name="idSubject"
          control={form.control}
          rules={{
            required: 'Assunto é obrigatório',
          }}
          render={({ field, fieldState }) => (
            <Input
              required
              label={'Recurso'}
              disabled={disabled}
              helper={fieldState.error?.message}
              variant={fieldState.error && 'error'}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
            />
          )}
        />
      </div>
    </div>
  )
}
