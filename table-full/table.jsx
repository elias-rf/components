import { get } from 'lodash-es'
import PropTypes from 'prop-types'
import React from 'react'
import { SearchIcon } from '../icons/search-icon.jsx'
import { cn } from '../lib/utils.mjs'
import { filterNonEmptyProperties } from './filter-non-empty-properties.mjs'
import { formatWhere } from './format-where.mjs'
import { getIdDefault } from './get-id-default.mjs'
import { InputFilter } from './input-filter.jsx'
import { parseWhere } from './parse-where.mjs'
import { ShowSortIcon } from './show-sort-icon.jsx'

const align = {
  left: 'text-left',
  right: 'text-right',
  center: 'text-center',
  justify: 'text-justify',
}
/**
 * @typedef {Object} TableProps
 * @property {{name:string, label:string, sortable?:boolean, align?:string, width?:string, format?:any}[]} [columns]
 * @property {()=>any} [getId]
 * @property {Record<string, any>[]} [rows]
 * @property {any[]} [selection]
 * @property {any[]} [where]
 * @property {any[]} [orderBy]
 * @property {(selection:any[]) => void} [onSelection]
 * @property {(where:any[]) => void} [onWhere]
 * @property {(orderBy:any[]) => void} [onOrderBy]
 * @property {(dados:any)=>React.ReactElement} [children]
 */

/**
 * @type {React.FC<TableProps>}
 */
export const Table = ({
  children,
  columns,
  rows = [],
  getId = getIdDefault,
  where,
  orderBy,
  selection,
  onSelection,
  onOrderBy,
  onWhere,
}) => {
  const defaultValues = formatWhere(where || [], columns)

  function handleWhere(value, name) {
    defaultValues[name] = value

    const filteredObj = parseWhere(
      filterNonEmptyProperties(defaultValues),
      columns
    )
    onWhere(filteredObj)
  }

  const handleOnSelection = (row) => {
    onSelection(getId(row))
  }

  function isSortable(col) {
    if (!orderBy) return false
    if (col.sortable === false) return false
    return true
  }

  function handleOnSort(col) {
    if (!orderBy) return
    if (col.sortable === false) return
    if (orderBy.length === 0) {
      onOrderBy([[col.name, 'asc']])
      return
    }
    const field = orderBy[0][0]
    let ord = orderBy[0][1]
    if (field !== col.name) ord = 'desc'
    if (ord === 'asc') {
      ord = 'desc'
    } else {
      ord = 'asc'
    }
    onOrderBy([[col.name, ord]])
  }

  function isSelected(row, selection) {
    const id = getId(row)

    if (selection.length === 0 || selection.length !== id.length) return false
    for (let i = 0; i < selection.length; i++) {
      if (id[i][0] !== selection[i][0]) return false
      if (id[i][1] !== selection[i][1]) return false
    }
    return true
  }

  return (
    <div className="h-full overflow-auto">
      <table className="relative w-full text-sm text-left text-gray-500 whitespace-no-wrap border-blue-400 table-auto dark:text-gray-400">
        <thead className="sticky top-0">
          <tr>
            {columns.map((col) => (
              <th
                className={cn(
                  'bg-gray-50 px-2 py-1 dark:bg-gray-800',
                  align[col.align || 'left'],
                  {
                    'cursor-pointer': isSortable(col),
                  }
                )}
                style={{ width: col.width }}
                key={`col-${col.name}`}
                onClick={() => handleOnSort(col)}
              >
                {col.label}
                {isSortable(col) && (
                  <ShowSortIcon
                    col={col}
                    orderBy={orderBy}
                  />
                )}
              </th>
            ))}
          </tr>
          {where ? (
            <tr className="bg-gray-50">
              {columns.map((col) => (
                <td
                  className="p-0 bg-gray-50 dark:border-gray-500"
                  key={`whr-${col.name}`}
                >
                  <div className="flex border border-gray-300 flex-nowrap dark:bg-gray-700">
                    <InputFilter
                      name={col.name}
                      value={defaultValues[col.name] || ''}
                      onInput={handleWhere}
                    />
                    <SearchIcon className="w-3" />
                  </div>
                </td>
              ))}
            </tr>
          ) : null}
        </thead>
        <tbody>
          {rows.map((row) => (
            <React.Fragment key={getId(row).toString()}>
              <tr
                className={cn(
                  'border-b bg-white dark:border-gray-700 dark:bg-gray-900',

                  {
                    'bg-gray-200 dark:bg-gray-700': isSelected(row, selection),
                    'hover:bg-gray-100 dark:hover:bg-gray-600': !isSelected(
                      row,
                      selection
                    ),
                  }
                )}
                onClick={() => handleOnSelection(row)}
              >
                {columns.map((col) => (
                  <td
                    className={cn('p-1.5', col.align && align[col.align])}
                    key={col.name}
                    style={{ width: col.width }}
                  >
                    {col.format
                      ? col.format(get(row, col.name))
                      : get(row, col.name)}
                  </td>
                ))}
              </tr>
              {isSelected(row, selection) && children ? (
                <tr>
                  <td colSpan={100}>{children({ row, columns })}</td>
                </tr>
              ) : null}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}

Table.propTypes = {
  children: PropTypes.func,
  columns: PropTypes.array,
  rows: PropTypes.array,
  getId: PropTypes.func,
  selection: PropTypes.any,
  orderBy: PropTypes.any,
  where: PropTypes.any,
  onSelection: PropTypes.func,
  onOrderBy: PropTypes.func,
  onWhere: PropTypes.func,
}
