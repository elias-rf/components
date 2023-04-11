import type { Header } from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";

export const HeadCol = ({
  header,
}: {
  header: Header<Record<string, any>, unknown>;
}) => {
  return (
    <th>
      {header.isPlaceholder
        ? null
        : flexRender(header.column.columnDef.header, header.getContext())}
    </th>
  );
};
