import type { Dispatch, Schema } from "../../../../types";
import { Datatable } from "../../components";

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
        <Datatable
          data={data}
          schema={schema}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
}
