import { SpinnerIcon } from '../components/icons/spinner-icon.jsx'

export function Loading() {
  return (
    <div className={'flex h-full items-center justify-center'}>
      <SpinnerIcon className={'h-48 w-48 dark:fill-gray-200'} />
    </div>
  )
}
