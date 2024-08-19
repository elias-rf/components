import { Select as SelectBase } from '@headlessui/react'

export function Select() {
  return (
    <SelectBase
      name="status"
      aria-label="Project status"
    >
      <option value="active">Active</option>
      <option value="paused">Paused</option>
      <option value="delayed">Delayed</option>
      <option value="canceled">Canceled</option>
    </SelectBase>
  )
}
