import type { Table } from "@tanstack/react-table";

export const TableReact = ({
  table,
  children,
}: {
  table: Table<any>;
  children: (props: { table: Table<Record<string, any>> }) => React.ReactNode;
}) => {
  return <table className="border-collapse ">{children({ table })}</table>;
};
