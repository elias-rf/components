import { JsonView } from '@/client/components/json-view/json-view'
import { CheckBox } from '@/client/components/ui/check-box'
import { Combobox } from '@/client/components/ui/combobox'
import { FormField } from '@/client/components/ui/form-field'
import { Helper } from '@/client/components/ui/helper'
import { Input } from '@/client/components/ui/input'
import { Label } from '@/client/components/ui/label'
import { SelectBadge } from '@/client/components/ui/select-badge'
import { Select } from '@/client/components/ui/select/select'
import { Toggle } from '@/client/components/ui/toggle'
import '@/client/index.css'
import { useStateMutable } from '@/client/lib/hooks/use-state-mutable'
import type { Story } from '@ladle/react'

export default {
  title: 'Components/UI/form field',
  args: {
    helper: 'Mensagem',
    required: true,
    disabled: false,
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['error', 'success', 'none'],
    },
  },
}

export const Default: Story = (props: any) => {
  const fld1 = useStateMutable({ value: '' })
  const fld2 = useStateMutable({ value: true })
  const fld3 = useStateMutable({ value: '' })
  const fld4 = useStateMutable({ value: true })
  const fld5 = useStateMutable({ value: [] })
  const fld6 = useStateMutable({ value: '' })

  return (
    <>
      <div className="flex flex-wrap gap-4">
        <FormField className="w-60">
          <Label
            id="label1"
            required
            variant={props.variant}
          >
            [L]abel 1
          </Label>
          <Input
            id="label1"
            value={fld1.value}
            onInput={(e: any) => (fld1.value = e)}
            variant={props.variant}
            disabled={props.disabled}
          />
          <Helper variant={props.variant}>{props.helper}</Helper>
        </FormField>

        <FormField className="w-40">
          <Label
            id="label2"
            variant={props.variant}
          >
            L[a]bel 2
          </Label>
          <Toggle
            id="label2"
            value={fld2.value}
            onChange={(e: any) => (fld2.value = e)}
            variant={props.variant}
            disabled={props.disabled}
          />
          <Helper variant={props.variant}>{props.helper}</Helper>
        </FormField>

        <FormField className="w-60">
          <Label
            id="label3"
            variant={props.variant}
          >
            La[b]el 2
          </Label>
          <Combobox
            id="label3"
            value={fld3.value}
            variant={props.variant}
            onChange={(e: any) => (fld3.value = e)}
            options={[
              { label: 'Option 1', value: '1' },
              { label: 'Option 2', value: '2' },
              { label: 'Option 3', value: '3' },
            ]}
            disabled={props.disabled}
          ></Combobox>
          <Helper variant={props.variant}>{props.helper}</Helper>
        </FormField>

        <FormField className="w-60">
          <Label
            id="label6"
            variant={props.variant}
          >
            Label [6]
          </Label>
          <Select
            id="label6"
            value={fld6.value}
            variant={props.variant}
            onChange={(e: any) => (fld6.value = e)}
            disabled={props.disabled}
          >
            <Select.Option value="US">United States</Select.Option>
            <Select.Option value="CA">Canada</Select.Option>
            <Select.Option value="FR">France</Select.Option>
          </Select>
          <Helper variant={props.variant}>{props.helper}</Helper>
        </FormField>

        <FormField className="w-40">
          <Label
            id="label4"
            variant={props.variant}
          >
            Lab[e]l 2
          </Label>
          <CheckBox
            id="label4"
            value={fld4.value}
            variant={props.variant}
            disabled={props.disabled}
            onChange={(e: any) => (fld4.value = e)}
          ></CheckBox>
          <Helper variant={props.variant}>{props.helper}</Helper>
        </FormField>

        <FormField className="w-full">
          <Label
            id="label5"
            variant={props.variant}
          >
            Label [5]
          </Label>
          <SelectBadge
            id="label5"
            options={[
              { label: '', value: '' },
              { label: 'Option 1', value: '1' },
              { label: 'Option 2', value: '2' },
              { label: 'Option 3', value: '3' },
            ]}
            value={fld5.value}
            variant={props.variant}
            disabled={props.disabled}
            onChange={(e: any) => (fld5.value = e.sort())}
          ></SelectBadge>
          <Helper variant={props.variant}>{props.helper}</Helper>
        </FormField>
      </div>
      <JsonView
        data={{
          props,
          fld1: fld1.value,
          fld2: fld2.value,
          fld3: fld3.value,
          fld4: fld4.value,
          fld5: fld5.value,
          fld6: fld6.value,
        }}
      />
    </>
  )
}
