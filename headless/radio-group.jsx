import {
  Field,
  Label,
  Radio,
  RadioGroup as RadioGroupBase,
} from '@headlessui/react'
import { useState } from 'react'

const plans = ['Startup', 'Business', 'Enterprise']

export function RadioGroup() {
  let [selected, setSelected] = useState(plans[0])

  return (
    <RadioGroupBase
      value={selected}
      onChange={setSelected}
      aria-label="Server size"
    >
      {plans.map((plan) => (
        <Field
          key={plan}
          className="flex items-center gap-2"
        >
          <Radio
            value={plan}
            className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-blue-400"
          >
            <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
          </Radio>
          <Label>{plan}</Label>
        </Field>
      ))}
    </RadioGroupBase>
  )
}
