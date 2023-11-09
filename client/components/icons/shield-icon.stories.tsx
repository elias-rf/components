import { ShieldIcon } from '@/client/components/icons/shield-icon'
import type { Story, StoryDefault } from '@ladle/react'

export default {
  title: 'Components / Icons / Shield Icon',
  args: {
    className: 'w-40 h-40',
  },
} satisfies StoryDefault

export const Default: Story = (props: any) => (
  <>
    <ShieldIcon {...props} />
    <span className="align-middle">{'◀︎'}</span>
  </>
)
