import type {
  TEvent,
  TFieldClient,
  TIds,
  TOrder,
  TSelected,
  TWhere,
} from "../../../types";

export type TTableEvent = TEvent & {
  component: "Table";
  event: "onSelectEvent" | "onOrderEvent" | "onWhereEvent";
};

export type TTableProps = {
  name?: string;
  data?: any[];
  schema: TFieldClient[];
  selected?: TIds;
  onSelectEvent?: (event: TTableEvent) => void;
  order?: TOrder[];
  onOrderEvent?: (event: TTableEvent) => void;
  where?: TWhere[];
  onWhereEvent?: (event: TTableEvent) => void;
  children?: React.ReactNode;
  selectedClassName?: string;
  tableClassName?: string;
};

export type TEventTableFilter = TEvent & {
  component: "TableFilter";
  event: "onWhereEvent";
};

export type TTableFilter = {
  schemaField: TFieldClient;
  onWhereEvent?: (event: TEventTableFilter) => void;
  where?: TWhere[];
};

export type TTableColumnEvent = TEvent & {
  component: "TableColumn";
  event: "onOrderEvent";
};

export type TTableColumn = {
  schemaField: TFieldClient;
  order: TOrder[];
  onOrderEvent?: (event: TTableColumnEvent) => void;
};

export type TTableCell = {
  schemaField: TFieldClient;
  selected?: TSelected;
  record: { [field: string]: any };
  selectedClassName?: string;
};
