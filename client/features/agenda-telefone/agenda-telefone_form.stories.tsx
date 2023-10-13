import { AgendaTelefoneForm } from '@/client/features/agenda-telefone/agenda-telefone_form'
import '@/client/index.css'
import type { Story } from '@ladle/react'

export default {
  title: 'features/agenda-telefone/agenda-telefone_form',
}

export const Form: Story = () => {
  return <AgendaTelefoneForm />
}
