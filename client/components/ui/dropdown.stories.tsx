import { Dropdown } from '@/client/components/ui/dropdown'
import '@/client/index.css'
import type { Story } from '@ladle/react'

export default {
  title: 'Components / UI / Dropdown',
}

const items = {
  title: 'Dropdown',
  items: [
    { title: 'Dashboard' },
    {
      title: 'Dropdown',
      items: [
        { title: 'Overview' },
        { title: 'My downloads' },
        { title: 'Billing' },
        { title: 'Rewards', items: [{ title: 'Sub item 1' }] },
      ],
    },
    { title: 'Earnings' },
    { title: 'Sign Out' },
  ],
}

export const Default: Story = () => {
  return (
    <>
      <Dropdown
        items={items}
        onClick={(e) => console.log(e)}
      ></Dropdown>
    </>
  )
}
