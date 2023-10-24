import { VtLogoIcon } from '@/client/components/icons/vt-logo-icon'
import '@/client/index.css'
import type { Story, StoryDefault } from '@ladle/react'

export default {
  title: 'Components / Icons / Vt logo Icon',
  args: {
    className: 'w-40',
  },
  argTypes: {
    color: {
      options: ['white', 'black', 'blue'],
      control: { type: 'radio' },
      defaultValue: 'blue',
    },
  },
} satisfies StoryDefault

export const Padrao: Story = (props: any) => (
  <div className="p-4 bg-gray-300">
    <VtLogoIcon {...props} />
  </div>
)
