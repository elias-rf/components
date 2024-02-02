import { ChevronIcon } from '@/client/components/icons/chevron-icon.js'
import { Children, Fragment } from 'react'

function BreadCrumbItem({
  children,
  path,
}: {
  children: React.ReactNode
  path: string
}) {
  return (
    <div
      key={path}
      className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
    >
      {children}
    </div>
  )
}

export function BreadCrumb({
  onClick,
  children,
}: {
  onClick: (path: string) => void
  children: React.ReactNode
}) {
  const childrenArray = Children.toArray(children)

  const childrenWtihSeperator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return (
        <Fragment key={index}>
          <li
            className="inline-flex cursor-pointer items-center"
            onClick={() => {
              onClick((child as React.ReactElement<any>).props.path)
            }}
          >
            {child}
          </li>
          <ChevronIcon className="mx-1 h-7 w-7 text-gray-400 " />
        </Fragment>
      )
    }
    return <li key={index}>{child}</li>
  })

  return (
    <>
      <nav
        className="flex"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          {childrenWtihSeperator}
        </ol>
      </nav>
    </>
  )
}

BreadCrumb.Item = BreadCrumbItem
