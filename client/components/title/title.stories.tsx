import { Title } from '@/client/components/title/title.js'
import type { Meta, StoryObj } from '@storybook/react'

export const Default: Story = {
  render: () => {
    return (
      <>
        <Title>Título</Title>
      </>
    )
  },
}

const meta: Meta<typeof Title> = {
  component: Title,
}

export default meta
type Story = StoryObj<typeof Title>
