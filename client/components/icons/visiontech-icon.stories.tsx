import { VisiontechIcon } from '@/client/components/icons/visiontech-icon.js'
import '@/client/index.css'
import type { Story, StoryDefault } from '@ladle/react'

export default {
  title: 'Components / Icons / Visiontech Icon',
  args: {
    className: 'w-40 h-40',
  },
} satisfies StoryDefault

export const Padrao: Story = (props: any) => (
  <div>
    <VisiontechIcon {...props} />
    <span className="align-middle">{'◀︎'}</span>
  </div>
)
