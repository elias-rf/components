import { CheckIcon } from './check-icon.jsx'
import { ChevronIcon } from './chevron-icon.jsx'
import { CloseIcon } from './close-icon.jsx'
import { DelDocIcon } from './del-doc-icon.jsx'
import { ErrorIcon } from './error-icon.jsx'
import { FireIcon } from './fire-icon.jsx'
import { HamburgerIcon } from './hamburger-icon.jsx'
import { HomeIcon } from './home-icon.jsx'
import { MoonIcon } from './moon-icon.jsx'
import { NewDocIcon } from './new-doc-icon.jsx'
import { PathSepIcon } from './path-sep.jsx'
import { PenIcon } from './pen-icon.jsx'
import { PersonIcon } from './person-icon.jsx'
import { SearchIcon } from './search-icon.jsx'
import { ShieldIcon } from './shield-icon.jsx'
import { SortIcon } from './sort-icon.jsx'
import { SpinnerIcon } from './spinner-icon.jsx'
import { SunIcon } from './sun-icon.jsx'
import { VisiontechIcon } from './visiontech-icon.jsx'
import { VtLogoIcon } from './vt-logo-icon.jsx'
import { WarningIcon } from './warning-icon.jsx'

const meta = {
  component: CheckIcon,
  args: {
    className: 'w-10 h-10',
  },
}

export default meta

export const Lista = {
  render: (props) => {
    const classIcon =
      'flex flex-col justify-center items-center w-24 h-30 border border-gray-400 p-4'

    return (
      <>
        <p className="mb-4 text-2xl font-bold">Icons List</p>
        <div className="flex flex-row flex-wrap text-black/80 dark:text-white/80">
          <div className={classIcon}>
            <CheckIcon className="w-10 h-10" />
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
            <HomeIcon className="w-10 h-10" />
            Home
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
            <PathSepIcon className="w-10 h-10" />
            PathSep
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
          <div className={classIcon}>
            <SortIcon
              direction="both"
              className="w-10 h-10"
            />
            Sort
          </div>
          <div className={classIcon}>
            <SpinnerIcon className="w-10 h-10" />
            Spinner
          </div>
          <div className={classIcon}>
            <SunIcon className="w-10 h-10" />
            Sun
          </div>
          <div className={classIcon}>
            <VisiontechIcon className="w-10 h-10" />
            Visiontech
          </div>
          <div className={classIcon}>
            <VtLogoIcon className="w-10 h-10" />
            VtLogo
          </div>
          <div className={classIcon}>
            <WarningIcon className="w-10 h-10" />
            Warning
          </div>
        </div>
      </>
    )
  },
}
