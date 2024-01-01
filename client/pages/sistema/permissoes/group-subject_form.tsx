import { FormField } from '@/client/components/ui-old/old/form-field/form-field.js'
import { Input } from '@/client/components/ui-old/old/input/input.js'
import { Label } from '@/client/components/ui-old/old/label.js'

type TGroupSubjectFormProps = {
  form: any
  disabled: boolean
}

export function GroupSubjectForm({ form, disabled }: TGroupSubjectFormProps) {
  return (
    <div className="grid grid-cols-12 gap-3">
      <div className="col-span-6">
        <FormField>
          <Label
            required
            name="idGroup"
          >
            Grupo
          </Label>
          <Input
            disabled={disabled}
            value={form.value.idGroup}
            onInput={form.handleChange}
          />
        </FormField>
      </div>
      <div className="col-span-6">
        <FormField>
          <Label
            required
            name="idSubject"
          >
            Recurso
          </Label>
          <Input
            id="idSubject"
            name="idSubject"
            disabled={disabled}
            value={form.value}
            onInput={form.handleChange}
          />
        </FormField>
      </div>
    </div>
  )
}
