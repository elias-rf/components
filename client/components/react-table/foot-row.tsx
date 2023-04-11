import type { HeaderGroup } from "@tanstack/react-table";

export const FootRow = ({
  footerGroup,
  footCol,
}: {
  footerGroup: HeaderGroup<Record<string, any>>;
  footCol: any;
}) => {
  const FootCol = footCol;
  return (
    <tr key={footerGroup.id}>
      {footerGroup.headers.map((header) => (
        <FootCol
          header={header}
          key={header.id}
        />
      ))}
    </tr>
  );
};
