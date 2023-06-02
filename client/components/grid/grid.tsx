import { TFilter, TSelection, TSort } from "@/types";
import Table from "@mui/material/Table";
import { useTheme } from "@mui/material/styles";
import { useForm } from "../../lib/hooks/use-form";
import { GridBody } from "./grid-body";
import { GridBodyCol } from "./grid-body-col";
import { GridBodyRow } from "./grid-body-row";
import { GridHead } from "./grid-head";
import { GridHeadCol } from "./grid-head-col";
import { GridHeadFilter } from "./grid-head-filter";
import { GridHeadRow } from "./grid-head-row";

export type TColumn = {
  label: string;
  name: string;
  align?: "center" | "left" | "right" | "inherit" | "justify" | undefined;
  format?: (v: any) => any;
  sortable?: boolean;
  width?: number;
};

export type TRow = { [field: string]: any };

export type TGridProps = {
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
  getId?: (row: TRow) => string;
  children?: (args: { row: TRow; columns: TColumn[] }) => React.ReactNode;
};

const getIdDefault = (row: TRow) => JSON.stringify(row);

export function Grid({
  rows: data = [],
  columns,
  selection = [],
  onSelection,
  sort,
  onSort,
  filter,
  onFilter,
  getId = getIdDefault,
  HeadSlot = GridHead,
  HeadRowSlot = GridHeadRow,
  HeadColSlot = GridHeadCol,
  HeadFilterSlot = GridHeadFilter,
  BodySlot = GridBody,
  BodyRowSlot = GridBodyRow,
  BodyColSlot = GridBodyCol,
  children,
}: TGridProps) {
  const theme = useTheme();

  const form = useForm({ onInput, initialValues: filter });

  function onInput() {
    const filteredObj = Object.fromEntries(
      Object.entries(form.values).filter(([_, value]) => value !== "")
    );
    onFilter && onFilter(filteredObj);
  }

  const handleOnSelection = (row: any) => {
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

  return (
    <Table
      sx={{ minWidth: 650 }}
      size="small"
      stickyHeader
    >
      <HeadSlot>
        <HeadRowSlot>
          {columns.map((column) => (
            <HeadColSlot
              key={column.name}
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
                key={column.name}
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
                selection.includes(getId(row)) && {
                  backgroundColor: theme.palette.grey[300],
                },
              ]}
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
            {children && children({ row, columns })}
          </>
        ))}
      </BodySlot>
    </Table>
  );
}
