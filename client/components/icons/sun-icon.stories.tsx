import { SunIcon } from '@/client/components/icons/sun-icon'
import type { Story, StoryDefault } from '@ladle/react'

export default {
  title: 'Components / Icons / Sun Icon',
  args: {
    className: 'w-40 h-40',
  },
} satisfies StoryDefault

export const Default: Story = (props: any) => (
  <>
    <SunIcon {...props} />
    <span className="align-middle">{'◀︎'}</span>
  </>
)
