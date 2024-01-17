import { JsonView } from '@/client/components/json-view/json-view.js'
import { Label } from '@/client/components/label/label.js'
import { CheckBoxForm } from '@/client/components/ui-old/check-box/check-box-form.js'
import { ComboboxForm } from '@/client/components/ui-old/combo-box/combo-box-form.js'
import { FormField } from '@/client/components/ui-old/form-field/form-field.js'
import { Helper } from '@/client/components/ui-old/helper.js'
import { InputForm } from '@/client/components/ui-old/input/input-form.js'
import { SelectBadgeForm } from '@/client/components/ui-old/select-badge/select-badge-form.js'
import { SelectForm } from '@/client/components/ui-old/select/select-form.js'
import { Select } from '@/client/components/ui-old/select/select.js'
import { ToggleForm } from '@/client/components/ui-old/toggle/toggle-form.js'
import '@/client/index.css'
import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'

const meta: Meta<typeof FormField> = {
  component: FormField,
}

export default meta
type Story = StoryObj<typeof FormField>

export const Default: Story = {
  render: (props: any) => {
    const form = useForm<{
      fld1: string
      fld2: boolean
      fld3: string
      fld4: boolean
      fld5: string
      fld6: string
    }>({
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
              <ComboboxForm
                {...form.register('fld3')}
                options={[
                  ['Option 1', '1'],
                  ['Option 2', '2'],
                  ['Option 3', '3'],
                ]}
                disabled={props.disabled}
              ></ComboboxForm>
              <Helper variant={props.variant}>{props.helper}</Helper>
            </FormField>
          }

          <FormField className="w-60">
            <Label htmlFor="fld6">Label [6]</Label>
            <SelectForm
              {...form.register('fld6')}
              variant={props.variant}
              disabled={props.disabled}
            >
              <Select.Option value="US">United States</Select.Option>
              <Select.Option value="CA">Canada</Select.Option>
              <Select.Option value="FR">France</Select.Option>
            </SelectForm>
            <Helper variant={props.variant}>{props.helper}</Helper>
          </FormField>

          <FormField className="w-40">
            <Label htmlFor="fld4">Lab[e]l 2</Label>
            <CheckBoxForm
              {...form.register('fld4')}
              variant={props.variant}
              disabled={props.disabled}
            ></CheckBoxForm>
            <Helper variant={props.variant}>{props.helper}</Helper>
          </FormField>

          <FormField className="w-full">
            <Label htmlFor="fld5">Label [5]</Label>
            <SelectBadgeForm
              options={[
                ['Option 1', '1'],
                ['Option 2', '2'],
                ['Option 3', '3'],
              ]}
              {...form.register('fld5')}
              variant={props.variant}
              disabled={props.disabled}
            ></SelectBadgeForm>
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
