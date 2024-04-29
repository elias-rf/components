import { Combobox } from '@/client/components/combobox/combobox.jsx'
import { JsonView } from '@/client/components/json-view/json-view.jsx'
import { Label } from '@/client/components/label/label.jsx'
import { SelectBadge } from '@/client/components/select-badge/select-badge.jsx'
import { FormField } from '@/client/components/ui-old/form-field/form-field.jsx'
import { Helper } from '@/client/components/ui-old/helper.jsx'
import { InputForm } from '@/client/components/ui-old/input/input-form.jsx'
import { ToggleForm } from '@/client/components/ui-old/toggle/toggle-form.jsx'
import { useForm } from 'react-hook-form'

const meta = {
  component: FormField,
}

export default meta

export const Default = {
  render: (props) => {
    const form = useForm({
      defaultValues: {
        fld1: '',
        fld2: true,
        fld3: '',
        fld4: true,
        fld5: '',
        fld6: '',
      },
    })

    return (
      <>
        <div className="flex flex-wrap gap-4">
          <FormField className="w-60">
            <Label htmlFor="fld1">Label 1 *</Label>
            <InputForm {...form.register('fld1')} />
            <Helper variant={props.variant}>{props.helper}</Helper>
          </FormField>

          <FormField className="w-40">
            <Label htmlFor="fld2">L[a]bel 2</Label>
            <ToggleForm {...form.register('fld2')} />
            <Helper variant={props.variant}>{props.helper}</Helper>
          </FormField>

          {
            <FormField className="w-60">
              <Label htmlFor="fld3">Label 2</Label>
              <Combobox
                {...form.register('fld3')}
                options={[
                  { label: 'Option 1', value: '1' },
                  { label: 'Option 2', value: '2' },
                  { label: 'Option 3', value: '3' },
                ]}
                disabled={props.disabled}
              ></Combobox>
              <Helper variant={props.variant}>{props.helper}</Helper>
            </FormField>
          }

          <FormField className="w-full">
            <Label htmlFor="fld5">Label [5]</Label>
            <SelectBadge
              options={[
                ['Option 1', '1'],
                ['Option 2', '2'],
                ['Option 3', '3'],
              ]}
              {...form.register('fld5')}
              variant={props.variant}
              disabled={props.disabled}
            ></SelectBadge>
            <Helper variant={props.variant}>{props.helper}</Helper>
          </FormField>
        </div>
        <JsonView
          data={{
            props,
            vlr: form.watch(),
          }}
        />
      </>
    )
  },
}
