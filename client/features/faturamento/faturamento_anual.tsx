import { TFieldDef } from "@/types";
import { Table } from "../../components/search/table";

type FaturamentoAnualProps = {
  data: any[];
  schema: TFieldDef[];
  dispatch: any;
};

export function FaturamentoAnual({ data, schema }: FaturamentoAnualProps) {
  return (
    <div className={"flex"}>
      <div className={"p-2"}>
        <Table
          data={data}
          schema={schema}
        />
      </div>
    </div>
  );
}
