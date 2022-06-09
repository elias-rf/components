import Datatable from "@/features/ui/table/table";
import type { Dispatch, Schema } from "../../..";

type FaturamentoAnualProps = {
  data: any[];
  schema: Schema;
  dispatch: Dispatch;
};

export default function FaturamentoAnual({
  data,
  schema,
  dispatch,
}: FaturamentoAnualProps) {
  return (
    <div className="flex">
      <div className="p-2">
        <Datatable
          data={data}
          schema={schema}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
}
