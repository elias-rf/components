import { Button as ButtonBase } from '@ariakit/react'
import PropTypes from 'prop-types'
import { tv } from 'tailwind-variants'
import { cn } from '../utils'
import './button.css'

const styles = tv({
  base: 'bg-blue-400 p-2 text-white data-[disabled]:bg-gray-100 data-[selected]:bg-blue-500',
  variants: {
    color: {
      blue: 'bg-blue-500 text-blue-100 hover:bg-blue-700',
      red: 'bg-red-500 text-red-100 hover:bg-red-700',
      green: 'bg-green-500 text-green-50 hover:bg-green-700',
      yellow: 'bg-yellow-500 text-yellow-50 hover:bg-yellow-700',
      gray: 'bg-gray-500 text-gray-50 hover:bg-gray-700',
      ghost: 'bg-transparent text-black hover:bg-gray-100',
    },
    size: {
      sm: 'px-2 py-1 text-sm',
      default: 'px-4 py-2 text-base',
      lg: 'p-3 text-lg',
      icon: 'p-0 text-base',
    },
  },
  defaultVariants: {
    color: 'blue',
    size: 'default',
  },
})

export const Button = ({ className, size, color, ...props }) => {
  return (
    <ButtonBase
      {...props}
      className={cn(styles({ size, color }), className)}
    />
  )
}

Button.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'default', 'lg', 'icon']),
  color: PropTypes.oneOf(['blue', 'red', 'green', 'yellow', 'gray', 'ghost']),
}
