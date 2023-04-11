import type { Row } from "@tanstack/react-table";

export const BodyRow = ({
  row,
  bodyCol,
}: {
  row: Row<Record<string, any>>;
  bodyCol: any;
}) => {
  const BodyCol = bodyCol;
  return (
    <tr key={row.id}>
      {row.getVisibleCells().map((cell) => (
        <BodyCol
          cell={cell}
          key={cell.id}
        />
      ))}
    </tr>
  );
};
