import { Table as TableMantine } from "@mantine/core";

export const Table = ({
  table,
  head,
  headRow,
  headCol,
  body,
  bodyRow,
  bodyCol,
  foot,
  footRow,
  footCol,
}: {
  table: any;
  head?: any;
  headRow?: any;
  headCol?: any;
  body?: any;
  bodyRow?: any;
  bodyCol?: any;
  foot?: any;
  footRow?: any;
  footCol?: any;
}) => {
  const Head = head;
  const Body = body;
  const Foot = foot;
  return (
    <TableMantine
      highlightOnHover
      verticalSpacing={3}
    >
      <Head
        table={table}
        headRow={headRow}
        headCol={headCol}
      />
      <Body
        table={table}
        bodyRow={bodyRow}
        bodyCol={bodyCol}
      />
      <Foot
        table={table}
        footRow={footRow}
        footCol={footCol}
      />
    </TableMantine>
  );
};
