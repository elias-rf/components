import GroupSubject from '@/client/pages/sistema/permissoes/group-subject.js'
import { authStore } from '@/client/store/auth_store.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof GroupSubject> = {
  component: GroupSubject,
}

export default meta
type Story = StoryObj<typeof GroupSubject>

authStore.state.getState().currentUser.grupoIds = '0'

export const Default: Story = {
  render: () => (
    <>
      <GroupSubject />
    </>
  ),
}
