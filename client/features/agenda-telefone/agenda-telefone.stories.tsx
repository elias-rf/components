import { AgendaTelefone } from '@/client/features/agenda-telefone/agenda-telefone'
import type { Story } from '@ladle/react'

export default {
  title: 'features/agenda-telefone/agenda-telefone',
}

export const Default: Story = () => {
  return (
    <div className="flex flex-col space-y-4">
      <AgendaTelefone />
    </div>
  )
}
