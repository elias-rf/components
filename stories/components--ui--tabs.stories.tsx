import { Tabs } from '@/client/components/ui/tabs'
import '@/client/index.css'
import type { Story } from '@ladle/react'
import { JsonViewer } from '@textea/json-viewer'
import React from 'react'

const tabs = [
  { label: 'Profile', id: 'profile' },
  { label: 'Dashboard', id: 'dashboard' },
  { label: 'Settings', id: 'settings' },
  { label: 'Contacts', id: 'contacts' },
  { label: 'Disabled', id: 'disabled', disabled: true },
]

export const Default: Story = () => {
  const [select, setSelect] = React.useState('profile')
  return (
    <div className="flex flex-col space-y-4">
      <Tabs
        selected={select}
        tabs={tabs}
        onChange={setSelect}
      />
      <JsonViewer value={{ select }} />
    </div>
  )
}
