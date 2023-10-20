import { cn } from '@/client/lib/cn'
import { getAccessKey } from '@/utils/string/get-access-key'
import { ReactNode } from 'react'

export type TButtonProps = {
  children: ReactNode
  className?: string
  color?: keyof typeof colorClass
  disabled?: boolean
  onClick?: () => void
  outline?: boolean
  size?: keyof typeof sizeClass
}

const sizeClass = {
  xs: 'px-3 py-1.5 text-xs',
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-base',
  xl: 'px-6 py-3.5 text-lg',
}

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

function AccessLabel({
  children,
}: {
  accessKey?: string
  children: ReactNode
}) {
  if (typeof children !== 'string') return <span>{children}</span>

  const chd = getAccessKey(children)

  return (
    <span>
      {chd.initial}
      <span className="font-bold underline">{chd.middle}</span>
      {chd.final}
    </span>
  )
}

export function Button({
  children,
  onClick,
  disabled = false,
  outline = false,
  size = 'md',
  color = 'primary',
  className,
}: TButtonProps) {
  return (
    <button
      className={cn(
        'focus:ring-2 font-medium rounded-lg text-sm focus:outline-none',
        sizeClass[size],
        { 'bg-transparent border': outline },
        { [colorClass[color]]: !outline && !disabled },
        { [outlineClass[color]]: outline && !disabled },
        { 'cursor-not-allowed': disabled },
        { [disabledColorClass[color]]: !outline && disabled },
        { [disabledOutlineClass[color]]: outline && disabled },
        className
      )}
      disabled={disabled}
      onClick={onClick}
      accessKey={getAccessKey(children).accessKey}
    >
      <AccessLabel>{children}</AccessLabel>
    </button>
  )
}
