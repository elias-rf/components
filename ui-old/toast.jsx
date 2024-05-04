import { CheckIcon } from '../icons/check-icon.jsx'
import { CloseIcon } from '../icons/close-icon.jsx'
import { ErrorIcon } from '../icons/error-icon.jsx'
import { WarningIcon } from '../icons/warning-icon.jsx'

function Icon({ severity }) {
  const className =
    'inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg'
  if (severity === 'warning') {
    return (
      <div
        className={`${className} bg-amber-100 text-amber-500 dark:bg-amber-700 dark:text-amber-200`}
      >
        <WarningIcon />
      </div>
    )
  }
  if (severity === 'error') {
    return (
      <div
        className={`${className} bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200`}
      >
        <ErrorIcon />
      </div>
    )
  }
  if (severity === 'check') {
    return (
      <div
        className={`${className} bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200`}
      >
        <CheckIcon />
      </div>
    )
  }
  return null
}

export function Toast({ open, onClose, severity, message }) {
  if (!open) return null

  return (
    <>
      <div className="fixed bottom-5 left-5 flex w-full max-w-xs items-center rounded-lg bg-gray-50 p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400">
        <Icon severity={severity} />
        <div className="ml-3 text-sm font-normal">{message}</div>
        {onClose ? (
          <button
            type="button"
            className="-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
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
