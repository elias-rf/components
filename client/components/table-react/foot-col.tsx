import type { Header } from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";

type TFootColProps = {
  header?: Header<Record<string, any>, unknown>;
};

export const FootCol = ({ header }: TFootColProps) => {
  if (!header) return null;

  return (
    <th>
      {header.isPlaceholder
        ? null
        : flexRender(header.column.columnDef.footer, header.getContext())}
    </th>
  );
};
