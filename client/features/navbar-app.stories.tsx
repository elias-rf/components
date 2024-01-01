import { NavbarApp } from '@/client/features/navbar-app.js'
import '@/client/index.css'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof NavbarApp> = {
  component: NavbarApp,
}

export default meta
type Story = StoryObj<typeof NavbarApp>

export const Default: Story = {
  render: () => {
    return (
      <>
        <NavbarApp />
      </>
    )
  },
}
