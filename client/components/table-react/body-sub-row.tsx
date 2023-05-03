import type { Row } from "@tanstack/react-table";

type TBodySubRowProps = {
  row: Row<Record<string, any>>;
  children: any;
};

export const BodySubRow = ({ row, children }: TBodySubRowProps) => {
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
