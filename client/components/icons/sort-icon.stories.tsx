import type { Story } from '@ladle/react'
import { SortIcon } from './sort-icon'

export const Default: Story = (props: any) => <SortIcon {...props} />

Default.argTypes = {
  direction: {
    control: { type: 'radio' },
    options: ['up', 'down', 'both', 'none'],
    defaultValue: 'up',
  },
}
