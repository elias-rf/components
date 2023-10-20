import { Story, StoryDefault } from '@ladle/react'
import { SpinnerIcon } from './spinner-icon'

export default {
  title: 'components / icons / spinner icon',
  args: {
    show: 'true',
    className: 'w-20 h-20 dark:fill-gray-200',
  },
} satisfies StoryDefault

export const Default: Story = (props: any) => <SpinnerIcon {...props} />
