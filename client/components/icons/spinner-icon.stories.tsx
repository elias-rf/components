import { Story, StoryDefault } from '@ladle/react'
import { SpinnerIcon } from './spinner-icon'

export default {
  title: 'components / icons / spinner icon',
  args: {
    show: 'true',
  },
} satisfies StoryDefault

export const Default: Story = (props: any) => <SpinnerIcon {...props} />
