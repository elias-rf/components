import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarFallback } from './avatar.js'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  render: (props) => (
    <>
      <Avatar>
        <AvatarFallback>A</AvatarFallback>
      </Avatar>
    </>
  ),
}
