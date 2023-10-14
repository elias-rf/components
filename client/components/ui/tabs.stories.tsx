import { Tabs } from '@/client/components/ui/tabs'
import '@/client/index.css'
import type { Story } from '@ladle/react'
import { JsonViewer } from '@textea/json-viewer'
import React from 'react'

export default {
  title: 'Components / UI / tabs',
}

const tabs = [
  { label: 'Profile', value: 'profile' },
  { label: 'Dashboard', value: 'dashboard' },
  { label: 'Settings', value: 'settings' },
  { label: 'Contacts', value: 'contacts' },
  { label: 'Disabled', value: 'disabled', disabled: true },
]

export const Default: Story = () => {
  const [select, setSelect] = React.useState('profile')
  return (
    <div className="flex flex-col">
      <Tabs
        value={select}
        tabs={tabs}
        onChange={setSelect}
      />
      <div className="p-2 border border-gray-400">
        {select}
        <JsonViewer value={{ select }} />
      </div>
    </div>
  )
}
