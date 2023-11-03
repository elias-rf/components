import '@/client/index.css'
import '@/mocks/fetcher-mock'

import type { Story, StoryDefault } from '@ladle/react'
import Vendas30dias from './vendas_30dias'

export default {
  title: 'Pages/Comercial/vendas_30dias',
} satisfies StoryDefault

export const Default: Story = () => <Vendas30dias />
