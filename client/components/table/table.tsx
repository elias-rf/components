import { SearchIcon } from '@/client/components/icons/search-icon'
import { cn } from '@/client/lib/cn'
import {
  TColumn,
  TData,
  TId,
  TOrderBy,
  TRow,
  TSelection,
  TWhere,
} from '@/types'
import { filterNonEmptyProperties } from '@/utils/object/filter-non-empty-properties'
import { get } from '@/utils/object/get'
import { equalityFromObject, equalityToObject } from '@/utils/query/equality'
import React from 'react'
import { getIdDefault } from './get-id-default'
import { InputFilter } from './input-filter'
import { ShowSortIcon } from './show-sort-icon'

export type TTableProps = {
  children?: (args: { row: TRow; columns: TColumn[] }) => React.ReactNode
  columns: TColumn[]
  getId?: (row: TData<string>) => TId<string>
  height?: string
  onOrderBy?: (e: TOrderBy<any>) => void
  onSelection?: (e: TSelection<any>) => void
  onWhere?: (e: TWhere<any>) => void
  orderBy?: TOrderBy<string>
  rows: TRow[]
  selection?: TSelection<string>
  where?: TWhere<string>
}

type AlignMap = {
  [K in Required<TColumn>['align']]: string
}

const align: AlignMap = {
  left: 'text-left',
  right: 'text-right',
  center: 'text-center',
  justify: 'text-justify',
}

export function Table({
  children,
  columns,
  getId = getIdDefault,
  height,
  onOrderBy,
  onSelection,
  onWhere,
  orderBy,
  rows = [],
  selection = [],
  where,
}: TTableProps) {
  const defaultValues: { [field: string]: string } = equalityToObject(where)

  function handleInput(value: string, name: string) {
    defaultValues[name] = value

    const filteredObj = equalityFromObject(
      filterNonEmptyProperties(defaultValues)
    )
    onWhere && onWhere(filteredObj)
  }

  const handleOnSelection = (row: TRow) => {
    onSelection && onSelection(getId(row))
  }

  function isSortable(col: any) {
    if (!orderBy || !onOrderBy) return false
    if (col.sortable === false) return false
    return true
  }

  function handleOnSort(col: any) {
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

  function isSelected(row: TRow, selection: TSelection<string>) {
    const id = getId(row)

    if (selection.length === 0 || selection.length !== id.length) return false
    for (let i = 0; i < selection.length; i++) {
      if (id[i][0] !== selection[i][0]) return false
      if (id[i][1] !== selection[i][1]) return false
    }
    return true
  }

  return (
    <div
      className="overflow-auto"
      style={{ height }}
    >
      <table className="relative w-full text-sm text-left text-gray-500 whitespace-no-wrap border-blue-400 table-auto dark:text-gray-400">
        <thead className="sticky top-0">
          <tr>
            {columns.map((col: TColumn) => (
              <th
                className={cn(
                  'px-2 py-1 bg-gray-50 dark:bg-gray-800',
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
              {columns.map((col: TColumn) => (
                <td
                  className="p-0 bg-gray-50 dark:border-gray-500"
                  key={`whr-${col.name}`}
                >
                  <div className="flex border border-gray-300 flex-nowrap dark:bg-gray-700">
                    <InputFilter
                      name={col.name}
                      value={defaultValues[col.name] || ''}
                      onInput={handleInput}
                    />
                    <SearchIcon className="w-3 " />
                  </div>
                </td>
              ))}
            </tr>
          ) : null}
        </thead>
        <tbody>
          {rows.map((row: TRow) => (
            <React.Fragment key={getId(row).toString()}>
              <tr
                className={cn(
                  'bg-white border-b dark:bg-gray-900 dark:border-gray-700',

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
