import { TFilter, TId, TSelection, TSort } from "@/types";
import { deepEqual } from "@/utils/object/deep-equal";
import MuiTable from "@mui/material/Table";
import MuiTableCell from "@mui/material/TableCell";
import MuiTableRow from "@mui/material/TableRow";
import { useTheme } from "@mui/material/styles";
import { useForm } from "../../lib/hooks/use-form";
import { TableBody } from "./table-body";
import { TableBodyCol } from "./table-body-col";
import { TableBodyRow } from "./table-body-row";
import { TableHead } from "./table-head";
import { TableHeadCol } from "./table-head-col";
import { TableHeadFilter } from "./table-head-filter";
import { TableHeadRow } from "./table-head-row";

export type TColumn = {
  label: string;
  name: string;
  align?: "center" | "left" | "right" | "inherit" | "justify" | undefined;
  format?: (v: any) => any;
  sortable?: boolean;
  width?: number;
};

export type TRow = { [field: string]: any };

export type TTableProps = {
  rows: TRow[];
  columns: TColumn[];
  filter?: TFilter;
  onFilter?: (e: TFilter) => void;
  sort?: TSort;
  onSort?: (e: TSort) => void;
  selection?: TSelection;
  onSelection?: (e: TSelection) => void;
  HeadSlot?: any;
  HeadRowSlot?: any;
  HeadColSlot?: any;
  BodySlot?: any;
  BodyRowSlot?: any;
  BodyColSlot?: any;
  HeadFilterSlot?: any;
  getId?: (row: TRow) => TId;
  children?: (args: { row: TRow; columns: TColumn[] }) => React.ReactNode;
};

const getIdDefault = (row: TRow) => row;

export function Table({
  rows: data = [],
  columns,
  selection = [],
  onSelection,
  sort,
  onSort,
  filter,
  onFilter,
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
  const theme = useTheme();

  const form = useForm({ onInput, initialValues: filter });

  function onInput() {
    const filteredObj = Object.fromEntries(
      Object.entries(form.values).filter(([_, value]) => value !== "")
    );
    onFilter && onFilter(filteredObj);
  }

  const handleOnSelection = (row: TRow) => {
    onSelection && onSelection([getId(row)]);
  };

  const handleOnSort = (col: any) => {
    if (!sort) return;
    if (col.sortable === false) return;
    let ord = sort[col.name];
    if (ord === "asc") {
      ord = "desc";
    } else {
      ord = "asc";
    }
    onSort && onSort({ [col.name]: ord });
  };

  function isSelected(row: TRow, selection: TSelection) {
    const id = getId(row);
    const response = selection.findIndex((selected) => deepEqual(selected, id));

    return response >= 0;
  }

  return (
    <MuiTable
      sx={{ minWidth: 650 }}
      size="small"
      stickyHeader
    >
      <HeadSlot>
        <HeadRowSlot>
          {columns.map((column) => (
            <HeadColSlot
              key={`label-${column.name}`}
              col={column}
              sort={sort}
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
        {filter ? (
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
          <>
            <BodyRowSlot
              key={getId(row)}
              sx={[
                {
                  "&:last-child td, &:last-child th": { border: 0 },
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
          </>
        ))}
      </BodySlot>
    </MuiTable>
  );
}
