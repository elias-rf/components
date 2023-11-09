import { PersonIcon } from '@/client/components/icons/person-icon'
import { Avatar } from '@/client/components/ui/avatar'
import '@/client/index.css'
import type { Story } from '@ladle/react'

export default {
  title: 'components / ui / Avatar',
}

export const Default: Story = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Avatar>
        <PersonIcon className="fill-red-600" />
      </Avatar>
    </div>
  )
}
