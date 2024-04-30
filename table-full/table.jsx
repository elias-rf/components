import { get } from 'lodash-es'
import React from 'react'
import { filterNonEmptyProperties } from '../../../utils/object/filter-non-empty-properties.mjs'
import { formatWhere } from '../../../utils/query/format-where.mjs'
import { parseWhere } from '../../../utils/query/parse-where.mjs'
import { cn } from '../../lib/utils.mjs'
import { SearchIcon } from '../icons/search-icon.jsx'
import { getIdDefault } from './get-id-default.mjs'
import { InputFilter } from './input-filter.jsx'
import { ShowSortIcon } from './show-sort-icon.jsx'

const align = {
  left: 'text-left',
  right: 'text-right',
  center: 'text-center',
  justify: 'text-justify',
}

export function Table({
  children,
  columns,
  getId = getIdDefault,
  onOrderBy,
  onSelection,
  onWhere,
  orderBy,
  rows = [],
  selection = [],
  where,
}) {
  const defaultValues = formatWhere(where || [], columns)

  function handleWhere(value, name) {
    defaultValues[name] = value

    const filteredObj = parseWhere(
      filterNonEmptyProperties(defaultValues),
      columns
    )
    onWhere && onWhere(filteredObj)
  }

  const handleOnSelection = (row) => {
    onSelection && onSelection(getId(row))
  }

  function isSortable(col) {
    if (!orderBy || !onOrderBy) return false
    if (col.sortable === false) return false
    return true
  }

  function handleOnSort(col) {
    if (!orderBy || !onOrderBy) return
    if (col.sortable === false) return
    if (orderBy.length === 0) {
      onOrderBy && onOrderBy([[col.name, 'asc']])
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
    onOrderBy && onOrderBy([[col.name, ord]])
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
      <table className="whitespace-no-wrap relative w-full table-auto border-blue-400 text-left text-sm text-gray-500 dark:text-gray-400">
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
                  className="bg-gray-50 p-0 dark:border-gray-500"
                  key={`whr-${col.name}`}
                >
                  <div className="flex flex-nowrap border border-gray-300 dark:bg-gray-700">
                    <InputFilter
                      name={col.name}
                      value={defaultValues[col.name] || ''}
                      onInput={handleWhere}
                    />
                    <SearchIcon className="w-3 " />
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
