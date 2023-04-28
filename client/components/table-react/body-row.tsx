import type { Row } from "@tanstack/react-table";
import classnames from "classnames";
import { Fragment } from "react";

export const BodyRow = ({
  row,
  children,
}: {
  row: Row<Record<string, any>>;
  children: any;
}) => {
  if (!row) return null;

  return (
    <tr
      key={row.id}
      onClick={row.getToggleSelectedHandler()}
      className={classnames({ "bg-gray-100": row.getIsSelected() })}
    >
      {row.getVisibleCells().map((cell) => (
        <Fragment key={cell.id}>{children({ cell })}</Fragment>
      ))}
    </tr>
  );
};
