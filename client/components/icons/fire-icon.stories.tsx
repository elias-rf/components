import { FireIcon } from '@/client/components/icons/fire-icon'
import type { Story, StoryDefault } from '@ladle/react'

export default {
  title: 'Components / Icons / Fire Icon',
  args: {
    className: 'w-40 h-40',
  },
} satisfies StoryDefault

export const Default: Story = (props: any) => (
  <>
    <FireIcon {...props} />
    <span className="align-middle">{'◀︎'}</span>
  </>
)
