import { JsonView } from '@/client/components/json-view/json-view.js'
import { groupSubjectStore } from '@/client/pages/sistema/permissoes/components/group-subject.store.js'
import { GroupSubjectForm } from '@/client/pages/sistema/permissoes/components/group-subject_form.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof GroupSubjectForm> = {
  component: GroupSubjectForm,
}

export default meta
type Story = StoryObj<typeof GroupSubjectForm>

export const Form: Story = {
  render: () => {
    const selection = groupSubjectStore.state((state) => state.selection)
    const status = groupSubjectStore.state((state) => state.status)
    return (
      <>
        <GroupSubjectForm store={groupSubjectStore} />
        <JsonView
          data={{
            selection: selection,
            statue: status,
          }}
        />
      </>
    )
  },
}
