import { TData, TId, TOrderBy, TSelection, TWhere } from '@/types'
import { filterNonEmptyProperties } from '@/utils/object/filter-non-empty-properties'
import { equalityFromObject } from '@/utils/query/equality'
import {
  Table as MuiTable,
  TableCell as MuiTableCell,
  TableRow as MuiTableRow,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React from 'react'
import { useFormButtons } from '../../lib/hooks/use-form-buttons'
import { TableBody } from './table-body'
import { TableBodyCol } from './table-body-col'
import { TableBodyRow } from './table-body-row'
import { TableHead } from './table-head'
import { TableHeadCol } from './table-head-col'
import { TableHeadFilter } from './table-head-filter'
import { TableHeadRow } from './table-head-row'

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
  onOrderBy?: (e: TOrderBy<string>) => void
  onSelection?: (e: TSelection<any>) => void
  onWhere?: (e: TWhere<string>) => void
  orderBy?: TOrderBy<string>
  rows: TRow[]
  selection?: TSelection<string>
  where?: TWhere<string>
}

const getIdDefault = (row: TRow) =>
  Object.keys(row).reduce((acc, key) => {
    acc.push([key, row[key]])
    return acc
  }, [] as TId<string>)

export function Table({
  rows: data = [],
  columns,
  selection = [],
  onSelection,
  orderBy,
  onOrderBy,
  where,
  onWhere,
  getId = getIdDefault,
  HeadSlot = TableHead,
  HeadRowSlot = TableHeadRow,
  HeadColSlot = TableHeadCol,
  HeadFilterSlot = TableHeadFilter,
  BodySlot = TableBody,
  BodyRowSlot = TableBodyRow,
  BodyColSlot = TableBodyCol,
  children,
}: TTableProps) {
  const theme = useTheme()

  const form = useFormButtons({
    onInput,
    initialValues: where?.reduce(
      (acc, cur) => ({
        ...acc,
        [cur[0]]: `${cur[1]}${cur.length === 3 ? ` ${cur[2]}` : ''}`,
      }),
      {}
    ),
  })

  function onInput() {
    const filteredObj = equalityFromObject(
      filterNonEmptyProperties(form.values)
    )
    onWhere && onWhere(filteredObj)
  }

  const handleOnSelection = (row: TRow) => {
    onSelection && onSelection(getId(row))
  }

  const handleOnSort = (col: any) => {
    if (!orderBy || !onOrderBy) return
    if (col.sortable === false) return
    if (orderBy.length === 0) return onOrderBy([[col.name, 'asc']])
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
    <MuiTable
      sx={{ minWidth: 320 }}
      size="small"
      stickyHeader
    >
      <HeadSlot>
        <HeadRowSlot>
          {columns.map((column) => (
            <HeadColSlot
              key={`label-${column.name}`}
              col={column}
              sort={orderBy}
              width={column.width}
              onClick={() => handleOnSort(column)}
              sx={[
                {
                  backgroundColor: theme.palette.grey[100],
                },
              ]}
            />
          ))}
        </HeadRowSlot>
        {where ? (
          <HeadRowSlot>
            {columns.map((column) => (
              <HeadFilterSlot
                key={`filter-${column.name}`}
                col={column}
                {...form.getInputProps(column.name)}
              />
            ))}
          </HeadRowSlot>
        ) : null}
      </HeadSlot>
      <BodySlot>
        {data.map((row) => (
          <React.Fragment key={JSON.stringify(getId(row))}>
            <BodyRowSlot
              key={JSON.stringify(getId(row))}
              sx={[
                {
                  '&:last-child td, &:last-child th': { border: 0 },
                },
              ]}
              selected={isSelected(row, selection)}
              hover={true}
              onClick={() => handleOnSelection(row)}
            >
              {columns.map((column) => (
                <BodyColSlot
                  key={column.name}
                  row={row}
                  col={column}
                />
              ))}
            </BodyRowSlot>
            {children ? (
              isSelected(row, selection) ? (
                <MuiTableRow>
                  <MuiTableCell colSpan={columns.length}>
                    {children({ row, columns })}
                  </MuiTableCell>
                </MuiTableRow>
              ) : null
            ) : null}
          </React.Fragment>
        ))}
      </BodySlot>
    </MuiTable>
  )
}
