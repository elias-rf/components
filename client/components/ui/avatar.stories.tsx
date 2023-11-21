import { PersonIcon } from '@/client/components/icons/person-icon.js'
import { Avatar } from '@/client/components/ui/avatar.js'
import '@/client/index.css'
import type { Story } from '@ladle/react'

export default {
  title: 'components / ui / Avatar',
}

export const Default: Story = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Avatar className="w-12 h-12 bg-green-400">
        <PersonIcon className="w-12 h-12 fill-red-600" />
      </Avatar>
    </div>
  )
}
