import { VisiontechIcon } from '@/client/components/icons/visiontech-icon'
import '@/client/index.css'
import type { Story, StoryDefault } from '@ladle/react'

export default {
  title: 'Components / Icons / Visiontech Icon',
} satisfies StoryDefault

export const Padrao: Story = () => (
  <div>
    <VisiontechIcon className="w-40 h-20" />
  </div>
)
