import { PenIcon } from '@/client/components/icons/pen-icon'
import type { Story, StoryDefault } from '@ladle/react'

export default {
  title: 'Components / Icons / Pen Icon',
  args: {
    className: 'w-40 h-40',
  },
} satisfies StoryDefault

export const Default: Story = (props: any) => (
  <>
    <PenIcon {...props} />
    <span className="align-middle">{'◀︎'}</span>
  </>
)
