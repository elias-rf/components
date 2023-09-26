import type { Story } from '@ladle/react'
import { useForm } from 'react-hook-form'
import { AgendaTelefoneForm } from '@/client/features/agenda-telefone/agenda-telefone_form'
import '@/client/index.css'

export const Form: Story = () => {
  const form = useForm({
    mode: 'onTouched',
    defaultValues: { id: '', name: '', department: '', email: '' },
  })
  return (
    <AgendaTelefoneForm
      form={form}
      disabled={false}
    />
  )
}
