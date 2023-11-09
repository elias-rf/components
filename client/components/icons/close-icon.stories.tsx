import { CloseIcon } from '@/client/components/icons/close-icon'
import type { Story, StoryDefault } from '@ladle/react'

export default {
  title: 'Components / Icons / Close Icon',
  args: {
    className: 'w-40 h-40',
  },
} satisfies StoryDefault

export const Default: Story = (props: any) => (
  <>
    <CloseIcon {...props} />
    <span className="align-middle">{'◀︎'}</span>
  </>
)
