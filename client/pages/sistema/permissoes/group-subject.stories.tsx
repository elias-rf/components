import { GroupSubject } from '@/client/pages/sistema/permissoes/group-subject.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof GroupSubject> = {
  component: GroupSubject,
}

export default meta
type Story = StoryObj<typeof GroupSubject>

export const Default: Story = {
  render: () => (
    <>
      <GroupSubject />
    </>
  ),
}
