import React from "react";
import ListView from "../ui/list-view";
import TreeView from "../ui/tree-view";
import Datatable from "@/features/ui/table/table";
import day from "@/lib/day";
import { Dispatch, Schema } from "../../../index.d";

export type FaturamentoProps = {
  data: any[];
  datatree: any[];
  schema: Schema;
  dispatch: Dispatch;
  selected: string;
};

function Switch({ selected, children }: { selected: string; children: any }) {
  switch (selected) {
    case "/2021/2021-01":
      return <div>2021</div>;
    case "/2020/2020-01":
      return <div>2021</div>;
    default:
      return <div>{children}</div>;
  }
}

export default function Faturamento({
  data,
  datatree,
  schema,
  selected,
  dispatch,
}: FaturamentoProps) {
  return (
    <>
      <div className="flex space-x-6">
        <TreeView
          data={datatree}
          selected={selected}
          dispatch={dispatch}
        />
        <Datatable
          data={data}
          schema={schema}
          dispatch={dispatch}
        />
      </div>
    </>
  );
}
