import { Layout } from '@/client/features/layout.js'
import type { Story } from '@ladle/react'
import React from 'react'

export default {
  title: 'features/layout',
}

export const Default: Story = () => {
  const [path] = React.useState('/main')
  return <Layout>Página de dados - {path}</Layout>
}
