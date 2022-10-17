import type { Dispatch, Schema } from "../../../types";
import { Table } from "../../components";

type FaturamentoAnualProps = {
  data: any[];
  schema: Schema;
  dispatch: Dispatch;
};

export function FaturamentoAnual({
  data,
  schema,
  dispatch,
}: FaturamentoAnualProps) {
  return (
    <div className="flex">
      <div className="p-2">
        <Table
          data={data}
          schema={schema}
        />
      </div>
    </div>
  );
}
