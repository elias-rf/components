import type { HeaderGroup } from "@tanstack/react-table";
import { Fragment } from "react";

export const FootRow = ({
  footerGroup,
  children,
}: {
  footerGroup: HeaderGroup<Record<string, any>>;
  children: any;
}) => {
  return (
    <tr key={footerGroup.id}>
      {footerGroup.headers.map((header) => (
        <Fragment key={header.id}>{children({ header })}</Fragment>
      ))}
    </tr>
  );
};
