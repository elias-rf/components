import type { Table } from "@tanstack/react-table";

type TTableReactProps = {
  table: Table<any>;
  children: (props: { table: Table<Record<string, any>> }) => React.ReactNode;
};

export const TableReact = ({ table, children }: TTableReactProps) => {
  return <table className="border-collapse ">{children({ table })}</table>;
};
