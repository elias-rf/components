import { ErrorIcon } from '@/client/components/icons/error-icon'
import type { Story, StoryDefault } from '@ladle/react'

export default {
  title: 'Components / Icons / Error Icon',
  args: {
    className: 'w-40 h-40',
  },
} satisfies StoryDefault

export const Default: Story = (props: any) => (
  <>
    <ErrorIcon {...props} />
    <span className="align-middle">{'◀︎'}</span>
  </>
)
