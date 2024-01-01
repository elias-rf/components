import { useForm } from '@/client/lib/hooks/use-form.js'
import { GroupSubjectForm } from '@/client/pages/sistema/permissoes/group-subject_form.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof GroupSubjectForm> = {
  component: GroupSubjectForm,
}

export default meta
type Story = StoryObj<typeof GroupSubjectForm>

export const Form: Story = {
  render: () => {
    const form = useForm({
      value: { agenda_telefone_id: '', nome: '', setor: '', email: '' },
    })
    return (
      <GroupSubjectForm
        form={form}
        disabled={false}
      />
    )
  },
}
