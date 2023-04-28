import type { Header } from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";

export const HeadCol = ({
  header,
}: {
  header: Header<Record<string, any>, unknown>;
  children?: any;
}) => {
  return (
    <th
      colSpan={header.colSpan}
      className="bg-gray-200"
    >
      {header.isPlaceholder ? null : (
        <div
          {...{
            className: header.column.getCanSort()
              ? "cursor-pointer select-none"
              : "",
            onClick: header.column.getToggleSortingHandler(),
          }}
        >
          {flexRender(header.column.columnDef.header, header.getContext())}
          {header.column.getCanSort()
            ? {
                asc: <div className="i-fluent-arrow-sort-up-20-regular ml-1" />,
                desc: (
                  <div className="i-fluent-arrow-sort-down-20-regular ml-1" />
                ),
              }[header.column.getIsSorted() as string] ?? (
                <div className="i-fluent-arrow-sort-20-regular ml-1" />
              )
            : ""}
        </div>
      )}
    </th>
  );
};
