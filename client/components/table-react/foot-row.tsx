import type { HeaderGroup } from "@tanstack/react-table";
import { Fragment } from "react";

type TFootRowProps = {
  footerGroup: HeaderGroup<Record<string, any>>;
  children: any;
};

export const FootRow = ({ footerGroup, children }: TFootRowProps) => {
  return (
    <tr key={footerGroup.id}>
      {footerGroup.headers.map((header) => (
        <Fragment key={header.id}>{children({ header })}</Fragment>
      ))}
    </tr>
  );
};
