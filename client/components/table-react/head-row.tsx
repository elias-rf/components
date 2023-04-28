import type { HeaderGroup } from "@tanstack/react-table";
import { Fragment } from "react";

export const HeadRow = ({
  headerGroup,
  children,
}: {
  headerGroup: HeaderGroup<Record<string, any>>;
  children: any;
}) => {
  return (
    <tr
      key={headerGroup.id}
      className="bg-gray-200"
    >
      {headerGroup.headers.map((header) => (
        <Fragment key={header.id}>{children({ header })}</Fragment>
      ))}
    </tr>
  );
};
