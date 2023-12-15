import '@/client/index.css'
import '@/mocks/fetcher-mock'

import type { Story, StoryDefault } from '@ladle/react'
import Vendas30dias from './vendas-30dias.js'

export default {
  title: 'Pages/Comercial/vendas_30dias',
} satisfies StoryDefault

export const Default: Story = () => <Vendas30dias />
