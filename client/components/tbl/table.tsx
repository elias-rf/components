import { TData, TId, TOrderBy, TSelection, TWhere } from '@/types'
import { filterNonEmptyProperties } from '@/utils/object/filter-non-empty-properties'
import { equalityFromObject, equalityToObject } from '@/utils/query/equality'
import React from 'react'
import { cn } from '@/client/lib/cn'
import SearchIcon from '@mui/icons-material/Search'
import { ShowSortIcon } from './show-sort-icon'
import { InputFilter } from './input-filter'
import { getIdDefault } from './get-id-default'

export type TColumn = {
  label: string
  name: string
  align?: 'center' | 'left' | 'right' | 'inherit' | 'justify' | undefined
  format?: (v: any) => any
  sortable?: boolean
  width?: number
}

export type TRow = { [field: string]: any }

export type TTableProps = {
  BodyColSlot?: any
  BodyRowSlot?: any
  BodySlot?: any
  children?: (args: { row: TRow; columns: TColumn[] }) => React.ReactNode
  columns: TColumn[]
  getId?: (row: TData<string>) => TId<string>
  HeadColSlot?: any
  HeadFilterSlot?: any
  HeadRowSlot?: any
  HeadSlot?: any
  onOrderBy?: (e: TOrderBy<any>) => void
  onSelection?: (e: TSelection<any>) => void
  onWhere?: (e: TWhere<any>) => void
  orderBy?: TOrderBy<string>
  rows: TRow[]
  selection?: TSelection<string>
  where?: TWhere<string>
}

export function Table({
  rows = [],
  columns,
  selection = [],
  onSelection,
  orderBy,
  onOrderBy,
  where = [],
  onWhere,
  getId = getIdDefault,
  children,
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
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.map((col: TColumn) => (
              <th
                className={cn('px-4 py-2', {
                  'cursor-pointer': isSortable(col),
                })}
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
            <tr>
              {columns.map((col: TColumn) => (
                <td
                  className="border border-gray-300 dark:border-gray-500"
                  key={`whr-${col.name}`}
                >
                  <div className="flex flex-nowrap">
                    <InputFilter
                      name={col.name}
                      value={defaultValues[col.name] || ''}
                      onInput={handleInput}
                    />
                    <SearchIcon sx={{ fontSize: 12 }} />
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
                  'bg-white border-b dark:bg-gray-800 dark:border-gray-700',
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
                    className="p-1.5"
                    key={col.name}
                  >
                    {row[col.name]}
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
