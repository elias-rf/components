import React from "react";

import Datatable from "@/features/ui/table/table";

import DataContext from "@/contexts/data-context";
import type { ClientContext } from "@/contexts/data-context";
import type { Action, Dispatch, Schema } from "../../../index.d";

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
