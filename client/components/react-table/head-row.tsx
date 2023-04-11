import type { HeaderGroup } from "@tanstack/react-table";

export const HeadRow = ({
  headerGroup,
  headCol,
}: {
  headerGroup: HeaderGroup<Record<string, any>>;
  headCol: any;
}) => {
  const HeadCol = headCol;
  return (
    <tr key={headerGroup.id}>
      {headerGroup.headers.map((header) => (
        <HeadCol
          header={header}
          key={header.id}
        />
      ))}
    </tr>
  );
};
