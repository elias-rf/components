import { MoonIcon } from '@/client/components/icons/moon-icon'
import type { Story, StoryDefault } from '@ladle/react'

export default {
  title: 'Components / Icons / Moon Icon',
  args: {
    className: 'w-40 h-40',
  },
} satisfies StoryDefault

export const Default: Story = (props: any) => (
  <>
    <MoonIcon {...props} />
    <span className="align-middle">{'◀︎'}</span>
  </>
)
