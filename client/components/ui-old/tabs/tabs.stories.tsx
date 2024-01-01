import { FireIcon } from '@/client/components/icons/fire-icon.js'
import { JsonView } from '@/client/components/json-view/json-view.js'
import { Tabs } from '@/client/components/ui-old/tabs/tabs.js'
import '@/client/index.css'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

const meta: Meta<typeof Tabs> = {
  component: Tabs,
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => {
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
              <div className="fill-yellow-200 text-green-400">
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
        <div className="mt-4 border border-gray-400 p-2">
          {select}
          <JsonView data={{ select }} />
        </div>
      </div>
    )
  },
}
