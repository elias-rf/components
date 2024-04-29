import { Layout } from '@/client/features/layout.jsx'
import React from 'react'

const meta = {
  component: Layout,
}

export default meta

export const Default = {
  render: () => {
    const [path] = React.useState('/main')
    return <Layout>Página de dados - {path}</Layout>
  },
}
