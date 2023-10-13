import { AgendaTelefoneForm } from '@/client/features/agenda-telefone/agenda-telefone_form'
import '@/client/index.css'
import type { Story } from '@ladle/react'
import { useForm } from 'react-hook-form'

export default {
  title: 'features/agenda-telefone/agenda-telefone_form',
}

export const Form: Story = () => {
  const form = useForm({
    mode: 'onTouched',
    defaultValues: { id: '', name: '', department: '', email: '' },
  })

  return <AgendaTelefoneForm form={form} />
}
