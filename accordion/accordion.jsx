// @ts-ignore
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import PropTypes from 'prop-types'
import React from 'react'
import { cn } from '../lib/utils.mjs'

const Accordion = AccordionPrimitive.Root

/**
 * @typedef {Object} AccordionItemProps
 * @property {any} [ref]
 * @property {string} [className]
 * @property {string} value
 * @property {any} children
 */

/**
 * @type {React.FC<AccordionItemProps>}
 */
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b', className)}
    {...props}
  />
))

AccordionItem.propTypes = {
  className: PropTypes.string,
}
AccordionItem.displayName = 'AccordionItem'

/**
 * @typedef {Object} AccordionTriggerProps
 * @property {any} [ref]
 * @property {string} [className]
 * @property {any} children
 */

/**
 * @type {React.FC<AccordionTriggerProps>}
 */
const AccordionTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          'flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 dark:text-slate-400" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
)
AccordionTrigger.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

/**
 * @typedef {Object} AccordionContentProps
 * @property {any} [ref]
 * @property {string} [className]
 * @property {any} children
 */

/**
 * @type {React.FC<AccordionContentProps>}
 */
const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn('pb-4 pt-0', className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
)
AccordionContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
