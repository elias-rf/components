import { Cross2Icon } from '@radix-ui/react-icons'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../lib/utils.mjs'

const ToastProvider = ToastPrimitives.Provider

/**
 * @typedef {Object} ToastViewportProps
 * @extends {React.HTMLAttributes<HTMLTableElement>}
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<ToastViewportProps>}
 */
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border border-slate-200 p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full dark:border-slate-800',
  {
    variants: {
      variant: {
        default:
          'border bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50',
        destructive:
          'destructive group border-red-500 bg-red-500 text-slate-50 dark:border-red-900 dark:bg-red-900 dark:text-slate-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)
/**
 * @typedef {Object} ToastProps
 * @extends {React.HTMLAttributes<HTMLTableElement>}
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<ToastProps>}
 */
const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

/**
 * @typedef {Object} ToastActionProps
 * @extends {React.HTMLAttributes<HTMLTableElement>}
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<ToastActionProps>}
 */
const ToastAction = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-transparent px-3 text-sm font-medium transition-colors hover:bg-slate-100 focus:outline-none focus:ring-1 focus:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-slate-100/40 group-[.destructive]:hover:border-red-500/30 group-[.destructive]:hover:bg-red-500 group-[.destructive]:hover:text-slate-50 group-[.destructive]:focus:ring-red-500 dark:border-slate-800 dark:hover:bg-slate-800 dark:focus:ring-slate-300 dark:group-[.destructive]:border-slate-800/40 dark:group-[.destructive]:hover:border-red-900/30 dark:group-[.destructive]:hover:bg-red-900 dark:group-[.destructive]:hover:text-slate-50 dark:group-[.destructive]:focus:ring-red-900',
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

/**
 * @typedef {Object} ToastCloseProps
 * @extends {React.HTMLAttributes<HTMLTableElement>}
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<ToastCloseProps>}
 */
const ToastClose = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      'absolute right-1 top-1 rounded-md p-1 text-slate-950/50 opacity-0 transition-opacity hover:text-slate-950 focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:text-slate-50/50 dark:hover:text-slate-50',
      className
    )}
    toast-close=""
    {...props}
  >
    <Cross2Icon className="w-4 h-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

/**
 * @typedef {Object} ToastTitleProps
 * @extends {React.HTMLAttributes<HTMLTableElement>}
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<ToastTitleProps>}
 */
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn('text-sm font-semibold [&+div]:text-xs', className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

/**
 * @typedef {Object} ToastDescriptionProps
 * @extends {React.HTMLAttributes<HTMLTableElement>}
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<ToastDescriptionProps>}
 */
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn('text-sm opacity-90', className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
}
