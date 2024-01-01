import { CheckIcon } from '@/client/components/icons/check-icon.js'
import { ChevronIcon } from '@/client/components/icons/chevron-icon.js'
import { CloseIcon } from '@/client/components/icons/close-icon.js'
import { DelDocIcon } from '@/client/components/icons/del-doc-icon.js'
import { ErrorIcon } from '@/client/components/icons/error-icon.js'
import { FireIcon } from '@/client/components/icons/fire-icon.js'
import { HamburgerIcon } from '@/client/components/icons/hamburger-icon.js'
import { HomeIcon } from '@/client/components/icons/home-icon.js'
import { MoonIcon } from '@/client/components/icons/moon-icon.js'
import { NewDocIcon } from '@/client/components/icons/new-doc-icon.js'
import { PathSepIcon } from '@/client/components/icons/path-sep.js'
import { PenIcon } from '@/client/components/icons/pen-icon.js'
import { PersonIcon } from '@/client/components/icons/person-icon.js'
import { SearchIcon } from '@/client/components/icons/search-icon.js'
import { ShieldIcon } from '@/client/components/icons/shield-icon.js'
import { SortIcon } from '@/client/components/icons/sort-icon.js'
import { SpinnerIcon } from '@/client/components/icons/spinner-icon.js'
import { SunIcon } from '@/client/components/icons/sun-icon.js'
import { VisiontechIcon } from '@/client/components/icons/visiontech-icon.js'
import { VtLogoIcon } from '@/client/components/icons/vt-logo-icon.js'
import { WarningIcon } from '@/client/components/icons/warning-icon.js'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CheckIcon> = {
  component: CheckIcon,
  args: {
    className: 'w-10 h-10',
  },
}

export default meta
type Story = StoryObj<typeof CheckIcon>

export const Lista: Story = {
  render: (props) => {
    const classIcon =
      'flex flex-col justify-center items-center w-24 h-30 border border-gray-400 p-4'

    return (
      <>
        <p className="mb-4 text-2xl font-bold">Icons List</p>
        <div className="flex flex-row flex-wrap">
          <div className={classIcon}>
            <CheckIcon className="h-10 w-10" />
            Check
          </div>
          <div className={classIcon}>
            <ChevronIcon className="h-10 w-10" />
            Chevron
          </div>
          <div className={classIcon}>
            <CloseIcon className="h-10 w-10" />
            Close
          </div>
          <div className={classIcon}>
            <DelDocIcon className="h-10 w-10" />
            DelDoc
          </div>
          <div className={classIcon}>
            <ErrorIcon className="h-10 w-10" />
            Error
          </div>
          <div className={classIcon}>
            <FireIcon className="h-10 w-10" />
            Fire
          </div>
          <div className={classIcon}>
            <HamburgerIcon className="h-10 w-10" />
            Hamburger
          </div>
          <div className={classIcon}>
            <HomeIcon className="h-10 w-10" />
            Home
          </div>
          <div className={classIcon}>
            <MoonIcon className="h-10 w-10" />
            Moon
          </div>
          <div className={classIcon}>
            <NewDocIcon className="h-10 w-10" />
            NewDoc
          </div>
          <div className={classIcon}>
            <PathSepIcon className="h-10 w-10" />
            PathSep
          </div>
          <div className={classIcon}>
            <PenIcon className="h-10 w-10" />
            Pen
          </div>
          <div className={classIcon}>
            <PersonIcon className="h-10 w-10" />
            Person
          </div>
          <div className={classIcon}>
            <SearchIcon className="h-10 w-10" />
            Search
          </div>
          <div className={classIcon}>
            <ShieldIcon className="h-10 w-10" />
            Shield
          </div>
          <div className={classIcon}>
            <SortIcon
              direction="both"
              className="h-10 w-10"
            />
            Sort
          </div>
          <div className={classIcon}>
            <SpinnerIcon className="h-10 w-10" />
            Spinner
          </div>
          <div className={classIcon}>
            <SunIcon className="h-10 w-10" />
            Sun
          </div>
          <div className={classIcon}>
            <VisiontechIcon className="h-10 w-10" />
            Visiontech
          </div>
          <div className={classIcon}>
            <VtLogoIcon className="h-10 w-10" />
            VtLogo
          </div>
          <div className={classIcon}>
            <WarningIcon className="h-10 w-10" />
            Warning
          </div>
        </div>
      </>
    )
  },
}
