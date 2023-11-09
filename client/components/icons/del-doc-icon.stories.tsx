import { DelDocIcon } from '@/client/components/icons/del-doc-icon'
import type { Story, StoryDefault } from '@ladle/react'

export default {
  title: 'Components / Icons / Del Doc Icon',
  args: {
    className: 'w-40 h-40',
  },
} satisfies StoryDefault

export const Default: Story = (props: any) => (
  <>
    <DelDocIcon {...props} />
    <span className="align-middle">{'◀︎'}</span>
  </>
)
