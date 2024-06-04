import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from '@radix-ui/react-icons'
import PropTypes from 'prop-types'
import * as React from 'react'
import { cn } from '../lib/utils.mjs'

const ContextMenu = ContextMenuPrimitive.Root

const ContextMenuTrigger = ContextMenuPrimitive.Trigger

const ContextMenuGroup = ContextMenuPrimitive.Group

const ContextMenuPortal = ContextMenuPrimitive.Portal

const ContextMenuSub = ContextMenuPrimitive.Sub

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

/**
 * @typedef {Object} ContextMenuSubTriggerProps
 * @extends {ContextMenuPrimitive.SubTriggerProps}
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<ContextMenuSubTriggerProps>}
 */
const ContextMenuSubTrigger = React.forwardRef(
  ({ className, inset, children, ...props }, ref) => (
    <ContextMenuPrimitive.SubTrigger
      ref={ref}
      className={cn(
        'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[state=open]:bg-slate-100 data-[state=open]:text-slate-900 dark:focus:bg-slate-800 dark:focus:text-slate-50 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-50',
        inset && 'pl-8',
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="w-4 h-4 ml-auto" />
    </ContextMenuPrimitive.SubTrigger>
  )
)

ContextMenuSubTrigger.propTypes = {
  className: PropTypes.string,
  inset: PropTypes.bool,
  children: PropTypes.node,
}

ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

/**
 * @typedef {Object} ContextMenuSubContentProps
 * @extends {ContextMenuPrimitive.SubTriggerProps}
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<ContextMenuSubContentProps>}
 */
const ContextMenuSubContent = React.forwardRef(
  ({ className, ...props }, ref) => (
    <ContextMenuPrimitive.SubContent
      ref={ref}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50',
        className
      )}
      {...props}
    />
  )
)

ContextMenuSubContent.propTypes = {
  className: PropTypes.string,
}

ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

/**
 * @typedef {Object} ContextMenuContentProps
 * @extends {ContextMenuPrimitive.SubTriggerProps}
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<ContextMenuContentProps>}
 */
const ContextMenuContent = React.forwardRef(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50',
        className
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
))
ContextMenuContent.propTypes = {
  className: PropTypes.string,
}

ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

/**
 * @typedef {Object} ContextMenuItemProps
 * @extends {ContextMenuPrimitive.SubTriggerProps}
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<ContextMenuItemProps>}
 */
const ContextMenuItem = React.forwardRef(
  ({ className, inset, ...props }, ref) => (
    <ContextMenuPrimitive.Item
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50',
        inset && 'pl-8',
        className
      )}
      {...props}
    />
  )
)
ContextMenuItem.propTypes = {
  className: PropTypes.string,
  inset: PropTypes.bool,
}

ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

/**
 * @typedef {Object} ContextMenuCheckboxItemProps
 * @extends {ContextMenuPrimitive.SubTriggerProps}
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<ContextMenuCheckboxItemProps>}
 */
const ContextMenuCheckboxItem = React.forwardRef(
  ({ className, children, checked, ...props }, ref) => (
    <ContextMenuPrimitive.CheckboxItem
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50',
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon className="w-4 h-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  )
)
ContextMenuCheckboxItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  checked: PropTypes.bool,
}

ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName

/**
 * @typedef {Object} ContextMenuRadioItemProps
 * @extends {ContextMenuPrimitive.SubTriggerProps}
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<ContextMenuRadioItemProps>}
 */
const ContextMenuRadioItem = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <ContextMenuPrimitive.RadioItem
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50',
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <DotFilledIcon className="w-4 h-4 fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  )
)
ContextMenuRadioItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

/**
 * @typedef {Object} ContextMenuLabelProps
 * @extends {ContextMenuPrimitive.SubTriggerProps}
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<ContextMenuLabelProps>}
 */
const ContextMenuLabel = React.forwardRef(
  ({ className, inset, ...props }, ref) => (
    <ContextMenuPrimitive.Label
      ref={ref}
      className={cn(
        'px-2 py-1.5 text-sm font-semibold text-slate-950 dark:text-slate-50',
        inset && 'pl-8',
        className
      )}
      {...props}
    />
  )
)
ContextMenuLabel.propTypes = {
  className: PropTypes.string,
  inset: PropTypes.bool,
}
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName

/**
 * @typedef {Object} ContextMenuSeparatorProps
 * @extends {ContextMenuPrimitive.SubTriggerProps}
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<ContextMenuSeparatorProps>}
 */
const ContextMenuSeparator = React.forwardRef(
  ({ className, ...props }, ref) => (
    <ContextMenuPrimitive.Separator
      ref={ref}
      className={cn(
        '-mx-1 my-1 h-px bg-slate-200 dark:bg-slate-800',
        className
      )}
      {...props}
    />
  )
)
ContextMenuSeparator.propTypes = {
  className: PropTypes.string,
}
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

const ContextMenuShortcut = ({ className, ...props }) => {
  return (
    <span
      className={cn(
        'ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400',
        className
      )}
      {...props}
    />
  )
}
ContextMenuShortcut.propTypes = {
  className: PropTypes.string,
}
ContextMenuShortcut.displayName = 'ContextMenuShortcut'

export {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
}
