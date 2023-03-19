import { TField } from "../../../types";
import { Table } from "../../components/table/table";

type FaturamentoAnualProps = {
  data: any[];
  schema: TField[];
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