import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from '@radix-ui/react-icons'
import * as MenubarPrimitive from '@radix-ui/react-menubar'
import * as React from 'react'
import { cn } from '../lib/utils.mjs'

const MenubarMenu = MenubarPrimitive.Menu

const MenubarGroup = MenubarPrimitive.Group

const MenubarPortal = MenubarPrimitive.Portal

const MenubarSub = MenubarPrimitive.Sub

const MenubarRadioGroup = MenubarPrimitive.RadioGroup

/**
 * @typedef {Object} MenubarProps
 * @extends {ScrollAreaPrimitive.RootProps}
 * @property {any} [ref]
 * @property {string} [className]
 */

/**
 * @type {React.FC<MenubarProps>}
 */
const Menubar = React.forwardRef(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    component-name="Menubar"
    ref={ref}
    className={cn(
      'flex h-9 items-center space-x-1 rounded-md border border-slate-200 bg-white p-1 shadow-sm dark:border-slate-800 dark:bg-slate-950',
      className
    )}
    {...props}
  />
))
Menubar.displayName = MenubarPrimitive.Root.displayName

/**
 * @typedef {Object} MenubarTriggerProps
 * @extends {ScrollAreaPrimitive.RootProps}
 * @property {any} [ref]
 * @property {string} [className]
 */

/**
 * @type {React.FC<MenubarTriggerProps>}
 */
const MenubarTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-slate-100 focus:text-slate-900 data-[state=open]:bg-slate-100 data-[state=open]:text-slate-900 dark:focus:bg-slate-800 dark:focus:text-slate-50 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-50',
      className
    )}
    {...props}
  />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

/**
 * @typedef {Object} MenubarSubTriggerProps
 * @extends {ScrollAreaPrimitive.RootProps}
 * @property {any} [ref]
 * @property {string} [className]
 */

/**
 * @type {React.FC<MenubarSubTriggerProps>}
 */
const MenubarSubTrigger = React.forwardRef(
  ({ className, inset, children, ...props }, ref) => (
    <MenubarPrimitive.SubTrigger
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
    </MenubarPrimitive.SubTrigger>
  )
)
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

/**
 * @typedef {Object} MenubarSubContentProps
 * @extends {ScrollAreaPrimitive.RootProps}
 * @property {any} [ref]
 * @property {string} [className]
 */

/**
 * @type {React.FC<MenubarSubContentProps>}
 */

const MenubarSubContent = React.forwardRef(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      'z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50',
      className
    )}
    {...props}
  />
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

/**
 * @typedef {Object} MenubarContentProps
 * @extends {ScrollAreaPrimitive.RootProps}
 * @property {any} [ref]
 * @property {string} [className]
 */

/**
 * @type {React.FC<MenubarContentProps>}
 */

const MenubarContent = React.forwardRef(
  (
    { className, align = 'start', alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          'z-50 min-w-[12rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50',
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
)
MenubarContent.displayName = MenubarPrimitive.Content.displayName

/**
 * @typedef {Object} MenubarItemProps
 * @extends {ScrollAreaPrimitive.RootProps}
 * @property {any} [ref]
 * @property {string} [className]
 */

/**
 * @type {React.FC<MenubarItemProps>}
 */

const MenubarItem = React.forwardRef(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

/**
 * @typedef {Object} MenubarCheckboxItemProps
 * @extends {ScrollAreaPrimitive.RootProps}
 * @property {any} [ref]
 * @property {string} [className]
 */

/**
 * @type {React.FC<MenubarCheckboxItemProps>}
 */

const MenubarCheckboxItem = React.forwardRef(
  ({ className, children, checked, ...props }, ref) => (
    <MenubarPrimitive.CheckboxItem
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50',
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon className="w-4 h-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  )
)
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

/**
 * @typedef {Object} MenubarRadioItemProps
 * @extends {ScrollAreaPrimitive.RootProps}
 * @property {any} [ref]
 * @property {string} [className]
 */

/**
 * @type {React.FC<MenubarRadioItemProps>}
 */

const MenubarRadioItem = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <MenubarPrimitive.RadioItem
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50',
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <DotFilledIcon className="w-4 h-4 fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  )
)
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

/**
 * @typedef {Object} MenubarLabelProps
 * @extends {MenubarPrimitive.LabelProps}
 * @property {any} [ref]
 * @property {string} [className]
 */

/**
 * @type {React.FC<MenubarLabelProps>}
 */

const MenubarLabel = React.forwardRef(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      'px-2 py-1.5 text-sm font-semibold',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

/**
 * @typedef {Object} MenubarSeparatorProps
 * @extends {MenubarPrimitive.SeparatorProps}
 * @property {any} [ref]
 * @property {string} [className]
 */

/**
 * @type {React.FC<MenubarSeparatorProps>}
 */

const MenubarSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800', className)}
    {...props}
  />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

/**
 * @typedef {Object} MenubarShortcutProps
 * @extends {React.HTMLAttributes<HTMLSpanElement>}
 * @property {string} [className]
 */

/**
 * @type {React.FC<MenubarShortcutProps>}
 */
const MenubarShortcut = ({ className, ...props }) => {
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
MenubarShortcut.displayName = 'MenubarShortcut'

export {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
}
