import type { Row } from "@tanstack/react-table";

export const BodySubRow = ({
  row,
  children,
}: {
  row: Row<Record<string, any>>;
  children: any;
}) => {
  if (!row || !row.getIsSelected()) return null;

  return (
    <tr key={row.id}>
      <td
        colSpan={100}
        className="ml-4"
      >
        {children(row)}
      </td>
    </tr>
  );
};
