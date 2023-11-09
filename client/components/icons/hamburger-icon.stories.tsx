import { HamburgerIcon } from '@/client/components/icons/hamburger-icon'
import type { Story, StoryDefault } from '@ladle/react'

export default {
  title: 'Components / Icons / Hamburger Icon',
  args: {
    className: 'w-40 h-40',
  },
} satisfies StoryDefault

export const Default: Story = (props: any) => (
  <>
    <HamburgerIcon {...props} />
    <span className="align-middle">{'◀︎'}</span>
  </>
)
