import { PersonIcon } from '@/client/components/icons/person-icon.js'
import { Avatar } from '@/client/components/ui-old/avatar/avatar.js'
import '@/client/index.css'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Avatar className="h-12 w-12 bg-green-400">
        <PersonIcon className="h-12 w-12 fill-red-600" />
      </Avatar>
    </div>
  ),
}
