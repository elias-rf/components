import type { Header } from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";

export const FootCol = ({
  header,
}: {
  header?: Header<Record<string, any>, unknown>;
}) => {
  if (!header) return null;

  return (
    <th>
      {header.isPlaceholder
        ? null
        : flexRender(header.column.columnDef.footer, header.getContext())}
    </th>
  );
};
