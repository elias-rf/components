import { ChevronIcon } from '@/client/components/icons/chevron-icon'
import type { Story, StoryDefault } from '@ladle/react'

export default {
  title: 'Components / Icons / Chevron Icon',
  argTypes: {
    variant: {
      options: ['right', 'down', 'left', 'up'],
      control: { type: 'radio' },
      defaultValue: 'right',
    },
  },
} satisfies StoryDefault

export const Default: Story = (props: any) => <ChevronIcon {...props} />
