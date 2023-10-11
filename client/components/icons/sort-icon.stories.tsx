import { SortIcon } from '@/client/components/icons/sort-icon'
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
} satisfies StoryDefault

export const Default: Story = (props: any) => <SortIcon {...props} />
