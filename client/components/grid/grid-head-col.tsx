import TableCell from "@mui/material/TableCell";
import { TColumn } from "./grid";

export type TGridHeadColProps = {
  col: TColumn;
  sort: { [field: string]: "asc" | "desc" | undefined };
};

const ShowSortIcon = ({
  col,
  sort,
}: {
  col: TColumn;
  sort: { [field: string]: "asc" | "desc" | undefined };
}) => {
  if (col.sortable === false || !sort) return null;
  if (sort[col.name] === "asc") return <span>{"🡑"}</span>;
  if (sort[col.name] === "desc") return <span>{"🡓"}</span>;
  return <span>{"⇅"}</span>;
};

export function GridHeadCol({ col, sort, ...rest }: TGridHeadColProps) {
  return (
    <TableCell
      align={col.align}
      variant="head"
      {...rest}
    >
      {[col.label]}{" "}
      <ShowSortIcon
        col={col}
        sort={sort}
      />
    </TableCell>
  );
}
