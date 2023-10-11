import { WarningIcon } from '@/client/components/icons/warning-icon'
import '@/client/index.css'
import type { Story, StoryDefault } from '@ladle/react'

export default {
  title: 'Components / Icons / Warning Icon',
} satisfies StoryDefault

export const Default: Story = () => <WarningIcon />
