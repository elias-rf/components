import { FormField } from '@/client/components/ui/form-field'
import { Input } from '@/client/components/ui/input/input'
import { Label } from '@/client/components/ui/label'

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
            id="idGroup"
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
            id="idSubject"
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
