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
            <SortIcon direction="both" className="h-10 w-10" />
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
