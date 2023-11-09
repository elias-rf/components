import { PersonIcon } from '@/client/components/icons/person-icon'
import type { Story, StoryDefault } from '@ladle/react'

export default {
  title: 'Components / Icons / Person Icon',
  args: {
    className: 'w-40 h-40',
  },
} satisfies StoryDefault

export const Default: Story = (props: any) => (
  <>
    <PersonIcon {...props} />
    <span className="align-middle">{'◀︎'}</span>
  </>
)
