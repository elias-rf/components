import type { Story } from '@ladle/react'
import { ChevronIcon } from './chevron-icon'

export const Default: Story = (props: any) => <ChevronIcon {...props} />

Default.argTypes = {
  variant: {
    options: ['right', 'down', 'left', 'up'],
    control: { type: 'radio' },
    defaultValue: 'right',
  },
}
