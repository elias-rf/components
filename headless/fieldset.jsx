import {
  Field,
  Fieldset as FieldsetBase,
  Input,
  Label,
  Legend,
  Select,
  Textarea,
} from '@headlessui/react'

export function Fieldset() {
  return (
    <FieldsetBase className="space-y-8">
      <Legend className="text-lg font-bold">Shipping details</Legend>
      <Field>
        <Label className="block">Street address</Label>
        <Input
          className="block mt-1"
          name="address"
        />
      </Field>
      <Field>
        <Label className="block">Country</Label>
        <Select
          className="block mt-1"
          name="country"
        >
          <option>Canada</option>
          <option>Mexico</option>
          <option>United States</option>
        </Select>
      </Field>
      <Field>
        <Label className="block">Delivery notes</Label>
        <Textarea
          className="block mt-1"
          name="notes"
        />
      </Field>
    </FieldsetBase>
  )
}
