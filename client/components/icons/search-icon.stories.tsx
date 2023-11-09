import { SearchIcon } from '@/client/components/icons/search-icon'
import '@/client/index.css'
import type { Story, StoryDefault } from '@ladle/react'

export default {
  title: 'Components/Icons/Search Icon',
  args: {
    className: 'w-40 h-40',
  },
} satisfies StoryDefault

export const Default: Story = (props: any) => (
  <>
    <SearchIcon {...props} />
    <span className="align-middle">{'◀︎'}</span>
  </>
)
