import { NewDocIcon } from '@/client/components/icons/new-doc-icon'
import type { Story, StoryDefault } from '@ladle/react'

export default {
  title: 'Components / Icons / New Doc Icon',
  args: {
    className: 'w-40 h-40',
  },
} satisfies StoryDefault

export const Default: Story = (props: any) => (
  <>
    <NewDocIcon {...props} />
    <span className="align-middle">{'◀︎'}</span>
  </>
)
