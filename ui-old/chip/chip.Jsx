import { cn } from '@/client/lib/utils.mjs'

const colorClass = {
  primary:
    'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
  alternative:
    'text-gray-900  bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700',
  dark: 'text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700',
  light:
    'text-gray-900 bg-white  border-gray-300 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700',
  red: ' text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
  green:
    ' text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
  yellow:
    ' text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:focus:ring-yellow-900',
  purple:
    ' text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900',
}

const outlineClass = {
  primary:
    'text-blue-700 hover:text-white border-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800',
  alternative: '',
  dark: 'text-gray-900 hover:text-white border-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800',
  light: '',
  green:
    'text-green-700 hover:text-white border-green-700 hover:bg-green-800 focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800',
  red: 'text-red-700 hover:text-white border-red-700 hover:bg-red-800 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900',
  yellow:
    'text-yellow-400 hover:text-white border-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900',
  purple:
    'text-purple-700 hover:text-white border-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900',
}

const disabledColorClass = {
  primary: 'text-white/50 bg-blue-700/50 dark:bg-blue-600/50',
  alternative:
    'text-gray-900/50 bg-white/50 border-gray-200/50 dark:bg-gray-800/50 dark:text-gray-400/50 dark:border-gray-600/50',
  dark: 'text-white/50 bg-gray-800/50 dark:bg-gray-800/50 dark:border-gray-700/50',
  light:
    'text-gray-900/50 bg-white/50 border-gray-300/50 dark:bg-gray-800/50 dark:text-white/50 dark:border-gray-600/50',
  red: ' text-white/50 bg-red-700/50 dark:bg-red-600/50',
  green: ' text-white/50 bg-green-700/50 dark:bg-green-600/50',
  yellow: ' text-white/50 bg-yellow-400/50',
  purple: ' text-white/50 bg-purple-700/50 dark:bg-purple-600/50',
}

const disabledOutlineClass = {
  primary:
    'text-blue-700/50 border-blue-700/50 dark:border-blue-500/50 dark:text-blue-500/50',
  alternative: '',
  dark: 'text-gray-900/50 border-gray-800/50 dark:border-gray-600/50 dark:text-gray-400/50',
  light: '',
  green:
    'text-green-700/50 border-green-700/50 dark:border-green-500/50 dark:text-green-500/50',
  red: 'text-red-700/50 border-red-700/50 dark:border-red-500/50 dark:text-red-500/50',
  yellow:
    'text-yellow-400/50 border-yellow-400/50 dark:border-yellow-300/50 dark:text-yellow-300/50',
  purple:
    'text-purple-700/50 border-purple-700/50 dark:border-purple-400/50 dark:text-purple-400/50',
}

export function Chip({
  name = '',
  children,
  onClick,
  onClose,
  disabled = false,
  outline = false,
  color = 'primary',
  className,
}) {
  return (
    <>
      <div className="inline-flex rounded-md shadow-sm">
        <button
          className={cn(
            'whitespace-nowrap rounded-l-lg px-2 text-sm font-medium focus:outline-none focus:ring-4',
            { 'border bg-transparent': outline },
            { [colorClass[color]]: !outline && !disabled },
            { [outlineClass[color]]: outline && !disabled },
            { 'cursor-not-allowed': disabled },
            { [disabledColorClass[color]]: !outline && disabled },
            { [disabledOutlineClass[color]]: outline && disabled },
            className
          )}
          disabled={disabled}
          onClick={() => onClick && onClick(name)}
        >
          {children}
        </button>
        <button
          className={cn(
            'rounded-r-lg px-1 text-sm font-medium focus:outline-none focus:ring-4',
            { 'border bg-transparent': outline },
            { [colorClass[color]]: !outline && !disabled },
            { [outlineClass[color]]: outline && !disabled },
            { 'cursor-not-allowed': disabled },
            { [disabledColorClass[color]]: !outline && disabled },
            { [disabledOutlineClass[color]]: outline && disabled },
            className
          )}
          disabled={disabled}
          onClick={() => onClose && onClose(name)}
        >
          <svg
            className="h-2 w-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </>
  )
}
