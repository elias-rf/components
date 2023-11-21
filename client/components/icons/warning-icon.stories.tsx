import { WarningIcon } from '@/client/components/icons/warning-icon.js'
import '@/client/index.css'
import type { Story, StoryDefault } from '@ladle/react'

export default {
  title: 'Components / Icons / Warning Icon',
  args: {
    className: 'w-40 h-40',
  },
} satisfies StoryDefault

export const Default: Story = (props: any) => (
  <>
    <WarningIcon {...props} />
    <span className="align-middle">{'◀︎'}</span>
  </>
)
