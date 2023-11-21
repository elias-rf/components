import { CheckIcon } from '@/client/components/icons/check-icon.js'
import { ChevronIcon } from '@/client/components/icons/chevron-icon.js'
import { CloseIcon } from '@/client/components/icons/close-icon.js'
import { DelDocIcon } from '@/client/components/icons/del-doc-icon.js'
import { ErrorIcon } from '@/client/components/icons/error-icon.js'
import { FireIcon } from '@/client/components/icons/fire-icon.js'
import { HamburgerIcon } from '@/client/components/icons/hamburger-icon.js'
import { MoonIcon } from '@/client/components/icons/moon-icon.js'
import { NewDocIcon } from '@/client/components/icons/new-doc-icon.js'
import { PenIcon } from '@/client/components/icons/pen-icon.js'
import { PersonIcon } from '@/client/components/icons/person-icon.js'
import { SearchIcon } from '@/client/components/icons/search-icon.js'
import { ShieldIcon } from '@/client/components/icons/shield-icon.js'
import type { Story, StoryDefault } from '@ladle/react'

export default {
  title: 'Components / Icons / List',
  args: {
    className: 'w-10 h-10',
  },
} satisfies StoryDefault

export const Default: Story = (props: any) => {
  const classIcon =
    'flex flex-col justify-center items-center w-24 h-36  border border-gray-400 p-4'
  return (
    <>
      <p className="mb-4 text-2xl font-bold">Icons List</p>
      <div className="flex flex-row flex-wrap">
        <div className={classIcon}>
          <CheckIcon {...props} />
          Check
        </div>
        <div className={classIcon}>
          <ChevronIcon className="w-10 h-10" />
          Chevron
        </div>
        <div className={classIcon}>
          <CloseIcon className="w-10 h-10" />
          Close
        </div>
        <div className={classIcon}>
          <DelDocIcon className="w-10 h-10" />
          DelDoc
        </div>
        <div className={classIcon}>
          <ErrorIcon className="w-10 h-10" />
          Error
        </div>
        <div className={classIcon}>
          <FireIcon className="w-10 h-10" />
          Fire
        </div>
        <div className={classIcon}>
          <HamburgerIcon className="w-10 h-10" />
          Hamburger
        </div>
        <div className={classIcon}>
          <MoonIcon className="w-10 h-10" />
          Moon
        </div>
        <div className={classIcon}>
          <NewDocIcon className="w-10 h-10" />
          NewDoc
        </div>
        <div className={classIcon}>
          <PenIcon className="w-10 h-10" />
          Pen
        </div>
        <div className={classIcon}>
          <PersonIcon className="w-10 h-10" />
          Person
        </div>
        <div className={classIcon}>
          <SearchIcon className="w-10 h-10" />
          Search
        </div>
        <div className={classIcon}>
          <ShieldIcon className="w-10 h-10" />
          Shield
        </div>
      </div>
    </>
  )
}
