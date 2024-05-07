import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
} from '@radix-ui/react-icons'
import * as React from 'react'

import { buttonVariants } from '../button/button.jsx'
import { cn } from '../utils.mjs'

/**
 * @typedef {Object} PaginationProps
 * @extends {React.HTMLAttributes<HTMLNavElement>}
 * @property {any} [ref]
 * @property {string} [className]
 */

/**
 * @type {React.FC<PaginationProps>}
 */
const Pagination = ({ className, ...props }) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
  />
)

/**
 * @typedef {Object} PaginationContentProps
 * @extends {React.HTMLAttributes<HTMLUlElement>}
 * @property {any} [ref]
 * @property {string} [className]
 */

/**
 * @type {React.FC<PaginationContentProps>}
 */
const PaginationContent = React.forwardRef(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('flex flex-row items-center gap-1', className)}
    {...props}
  />
))
PaginationContent.displayName = 'PaginationContent'

/**
 * @typedef {Object} PaginationItemProps
 * @extends {React.HTMLAttributes<HTMLLiElement>}
 * @property {any} [ref]
 * @property {string} [className]
 */

/**
 * @type {React.FC<PaginationItemProps>}
 */
const PaginationItem = React.forwardRef(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn('', className)}
    {...props}
  />
))
PaginationItem.displayName = 'PaginationItem'

/**
 * @typedef {Object} PaginationLinkProps
 * @extends {React.HTMLAttributes<HTMLAElement>}
 * @property {any} [ref]
 * @property {string} [className]
 */

/**
 * @type {React.FC<PaginationLinkProps>}
 */
const PaginationLink = ({ className, isActive, size = 'icon', ...props }) => (
  <PaginationItem>
    <a
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        buttonVariants({
          variant: isActive ? 'outline' : 'ghost',
          size,
        }),
        className
      )}
      {...props}
    />
  </PaginationItem>
)
PaginationLink.displayName = 'PaginationLink'

/**
 * @typedef {Object} PaginationPreviousProps
 * @extends {PaginationLinkProps}
 * @property {any} [ref]
 * @property {string} [className]
 */

/**
 * @type {React.FC<PaginationPreviousProps>}
 */
const PaginationPrevious = ({ className, ...props }) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn('gap-1 pl-2.5', className)}
    {...props}
  >
    <ChevronLeftIcon className="w-4 h-4" />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = 'PaginationPrevious'

/**
 * @typedef {Object} PaginationNextProps
 * @extends {PaginationLinkProps}
 * @property {any} [ref]
 * @property {string} [className]
 */

/**
 * @type {React.FC<PaginationNextProps>}
 */
const PaginationNext = ({ className, ...props }) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn('gap-1 pr-2.5', className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRightIcon className="w-4 h-4" />
  </PaginationLink>
)

/**
 * @typedef {Object} PaginationEllipsisProps
 * @extends {React.HTMLAttributes<HTMLSpanElement>}
 * @property {any} [ref]
 * @property {string} [className]
 */

/**
 * @type {React.FC<PaginationEllipsisProps>}
 */
const PaginationEllipsis = ({ className, ...props }) => (
  <span
    aria-hidden
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <DotsHorizontalIcon className="w-4 h-4" />
    <span className="sr-only">More pages</span>
  </span>
)

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
