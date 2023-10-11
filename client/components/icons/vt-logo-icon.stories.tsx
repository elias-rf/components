import { VtLogoIcon } from '@/client/components/icons/vt-logo-icon'
import '@/client/index.css'
import type { Story, StoryDefault } from '@ladle/react'

export default {
  title: 'Components / Icons / Vt logo Icon',
} satisfies StoryDefault

export const Padrao: Story = () => (
  <div>
    <VtLogoIcon className="w-40 h-20" />
  </div>
)
