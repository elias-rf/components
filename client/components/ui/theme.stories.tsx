import { DarkToggle } from '@/client/components/ui/dark-toggle.js'
import { theme } from '@/client/components/ui/theme.js'
import '@/client/index.css'
import { cn } from '@/client/lib/cn.js'
import type { Story } from '@ladle/react'

export const Default: Story = () => {
  return (
    <>
      <div className={cn('h-8', 'bg-blue-600 text-white')}>primary</div>
      <div className={cn('h-8', 'bg-blue-600 text-white')}>primary</div>
    </>
  )
}

export default {
  title: 'Components / UI / Theme',
}
