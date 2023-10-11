import { GroupSubjectForm } from '@/client/features/permissoes/group-subject_form'
import { Story } from '@ladle/react'
import { useForm } from 'react-hook-form'

export default {
  title: 'features/permissoes/group-subject_form',
}

export const Form: Story = () => {
  const form = useForm({
    mode: 'onTouched',
    defaultValues: { agenda_telefone_id: '', nome: '', setor: '', email: '' },
  })
  return (
    <GroupSubjectForm
      form={form}
      disabled={false}
    />
  )
}
