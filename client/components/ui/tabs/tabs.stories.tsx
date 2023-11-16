import { FireIcon } from '@/client/components/icons/fire-icon'
import { JsonView } from '@/client/components/json-view/json-view'
import { Tabs } from '@/client/components/ui/tabs/tabs'
import '@/client/index.css'
import type { Story } from '@ladle/react'
import React from 'react'

export default {
  title: 'Components / UI / tabs',
}

export const Default: Story = () => {
  const [select, setSelect] = React.useState('profile')
  return (
    <div className="flex flex-col">
      <Tabs
        selected={select}
        onChange={setSelect}
      >
        <Tabs.Tab
          name="profile"
          label="Profile"
        >
          Profile selected
        </Tabs.Tab>
        <Tabs.Tab
          name="dashboard"
          label={
            <div className="text-green-400 fill-yellow-200">
              <FireIcon />
              Dashboard
            </div>
          }
        >
          <div className="text-red-600">Dashboard selected</div>
        </Tabs.Tab>
        <Tabs.Tab
          name="settings"
          label="Settings"
        >
          Settings selected
        </Tabs.Tab>
        <Tabs.Tab
          name="contacts"
          label="Contacts"
        >
          Contacts selected
        </Tabs.Tab>
        <Tabs.Tab
          name="disabled"
          label="Disabled"
          disabled
        >
          Disabled selected
        </Tabs.Tab>
      </Tabs>
      <div className="p-2 mt-4 border border-gray-400">
        {select}
        <JsonView data={{ select }} />
      </div>
    </div>
  )
}
