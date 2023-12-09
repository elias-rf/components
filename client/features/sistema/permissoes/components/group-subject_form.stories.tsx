import { GroupSubjectForm } from '@/client/features/sistema/permissoes/group-subject_form.js'
import { useForm } from '@/client/lib/hooks/use-form.js'
import { Story } from '@ladle/react'

export default {
  title: 'features/permissoes/group-subject_form',
}

export const Form: Story = () => {
  const form = useForm({
    value: { agenda_telefone_id: '', nome: '', setor: '', email: '' },
  })
  return (
    <GroupSubjectForm
      form={form}
      disabled={false}
    />
  )
}
