import { Story, StoryDefault } from '@ladle/react'
import { SpinnerIcon } from './spinner-icon.js'

export default {
  title: 'components / icons / spinner icon',
  args: {
    show: 'true',
    className: 'w-40 h-40 dark:fill-gray-200',
  },
} satisfies StoryDefault

export const Default: Story = (props: any) => (
  <>
    <SpinnerIcon {...props} />
    <span className="align-middle">{'◀︎'}</span>
  </>
)
