import { GroupSubject } from '@/client/features/permissoes/group-subject.js'
import { Story } from '@ladle/react'

export default {
  title: 'features/permissoes/group-subject',
}

export const Default: Story = () => {
  return (
    <>
      <GroupSubject />
    </>
  )
}
