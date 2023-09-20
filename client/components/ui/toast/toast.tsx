import { CheckIcon } from '@/client/components/icons/check-icon'
import { WarningIcon } from '@/client/components/icons/warning-icon'
import { ErrorIcon } from '@/client/components/icons/error-icon'
import { CloseIcon } from '@/client/components/icons/close-icon'

export type TToast = {
  open: boolean
  onClose?: () => void
  severity?: 'warning' | 'error' | 'check'
  message: string
}

function Icon({ severity }: { severity?: 'warning' | 'error' | 'check' }) {
  const className =
    'inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg'
  if (severity === 'warning') {
    return (
      <div
        className={`${className} text-amber-500 bg-amber-100 dark:bg-amber-700 dark:text-amber-200`}
      >
        <WarningIcon />
      </div>
    )
  }
  if (severity === 'error') {
    return (
      <div
        className={`${className} text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200`}
      >
        <ErrorIcon />
      </div>
    )
  }
  if (severity === 'check') {
    return (
      <div
        className={`${className} text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200`}
      >
        <CheckIcon />
      </div>
    )
  }
  return null
}

export function Toast({ open, onClose, severity, message }: TToast) {
  if (!open) return null

  return (
    <>
      <div className="fixed bottom-5 left-5 flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800">
        <Icon severity={severity} />
        <div className="ml-3 text-sm font-normal">{message}</div>
        {onClose ? (
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-default"
            aria-label="Close"
            onClick={onClose}
          >
            <CloseIcon />
          </button>
        ) : null}
      </div>
    </>
  )
}
