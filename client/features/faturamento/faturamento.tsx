import { TFieldDef, TIds } from "../../../types";
import { Table } from "../../components/table";

export type FaturamentoProps = {
  data: any[];
  datatree: any[];
  schema: TFieldDef[];
  dispatch: any;
  selected: TIds;
  onSelectEvent: (event: any) => void;
};

// function Switch({ selected, children }: { selected: string; children: any }) {
//   switch (selected) {
//     case "/2021/2021-01":
//       return <div>2021</div>;
//     case "/2020/2020-01":
//       return <div>2021</div>;
//     default:
//       return <div>{children}</div>;
//   }
// }

export function Faturamento({
  data,
  schema,
  selected,
  onSelectEvent,
}: FaturamentoProps) {
  return (
    <>
      <div className={"flex space-x-6"}>
        <Table
          data={data}
          schema={schema}
          selected={selected}
          onSelect={onSelectEvent}
        />
      </div>
    </>
  );
}
