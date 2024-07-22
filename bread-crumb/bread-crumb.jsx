import PropTypes from 'prop-types'
import { Children, Fragment } from 'react'
import { ChevronIcon } from '../icons/chevron-icon.jsx'

/**
 * @typedef {Object} BreadCrumbItemProps
 * @property {string} [path]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<BreadCrumbItemProps & React.HTMLAttributes<HTMLDivElement>>}
 */
export const BreadCrumbItem = ({ children, path }) => {
  return (
    <div
      key={path}
      className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
    >
      {children}
    </div>
  )
}
BreadCrumbItem.propTypes = {
  path: PropTypes.string,
  children: PropTypes.any,
}

/* -------------------------------------------------------------------------- */

/**
 * @typedef {Object} BreadCrumbProps
 * @property {(path:string)=>void} [onClick]
 * @property {React.ReactNode} [children]
 */

/**
 * @type {React.FC<BreadCrumbProps>}
 */
export const BreadCrumb = ({ onClick, children }) => {
  const childrenArray = Children.toArray(children)

  const childrenWithSeparetor = childrenArray.map(
    /** @type {(child: React.ReactElement, index: number)=>React.ReactNode} */
    (child, index) => {
      if (index !== childrenArray.length - 1) {
        return (
          <Fragment key={index}>
            <li
              className="inline-flex items-center cursor-pointer"
              onClick={() => {
                onClick(child.props.path)
              }}
            >
              {child}
            </li>
            <ChevronIcon className="mx-1 text-gray-400 h-7 w-7 dark:text-white/80" />
          </Fragment>
        )
      }
      return <li key={index}>{child}</li>
    }
  )

  return (
    <>
      <nav
        className="flex"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          {childrenWithSeparetor}
        </ol>
      </nav>
    </>
  )
}
BreadCrumb.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any,
}
