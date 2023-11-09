import { CheckIcon } from '@/client/components/icons/check-icon'
import '@/client/index.css'
import type { Story, StoryDefault } from '@ladle/react'

export default {
  title: 'Components / Icons / Check Icon',
  args: {
    className: 'w-40 h-40',
  },
} satisfies StoryDefault

export const Padrao: Story = (props: any) => (
  <div>
    <CheckIcon {...props} />
    <span className="align-middle">{'◀︎'}</span>
  </div>
)
