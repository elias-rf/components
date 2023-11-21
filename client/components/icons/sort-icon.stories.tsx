import { SortIcon } from '@/client/components/icons/sort-icon.js'
import type { Story, StoryDefault } from '@ladle/react'

export default {
  title: 'Components / Icons / Sort Icon',
  argTypes: {
    direction: {
      control: { type: 'radio' },
      options: ['up', 'down', 'both', 'none'],
      defaultValue: 'up',
    },
  },
  args: {
    className: 'w-40 h-40',
  },
} satisfies StoryDefault

export const Default: Story = (props: any) => (
  <>
    <SortIcon {...props} />
    <span className="align-middle">{'◀︎'}</span>
  </>
)
