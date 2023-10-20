import { SpinnerIcon } from '@/client/components/icons/spinner-icon'

export function Loading() {
  return (
    <div className={'flex items-center justify-center h-full'}>
      <SpinnerIcon className={'w-48 h-48 dark:fill-gray-200'} />
    </div>
  )
}
