import {
  Popover as PopoverBase,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'

export function Popover() {
  return (
    <PopoverBase className="relative">
      <PopoverButton>Solutions</PopoverButton>
      <PopoverPanel
        anchor="bottom"
        className="flex flex-col"
      >
        <a href="/analytics">Analytics</a>
        <a href="/engagement">Engagement</a>
        <a href="/security">Security</a>
        <a href="/integrations">Integrations</a>
      </PopoverPanel>
    </PopoverBase>
  )
}
