import { Layout } from '@/client/features/layout.js'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

const meta: Meta<typeof Layout> = {
  component: Layout,
}

export default meta
type Story = StoryObj<typeof Layout>

export const Default: Story = {
  render: () => {
    const [path] = React.useState('/main')
    return <Layout>Página de dados - {path}</Layout>
  },
}
