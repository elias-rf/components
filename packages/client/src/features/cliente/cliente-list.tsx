import type { Action, Id, OrderBy, Schema, Where } from "@vt/types";
import { Datatable } from "../../components";

type PhonebookProps = {
  schema: Schema;
  selected: Id;
  orderBy: OrderBy[];
  where: Where[];
  status: string;
  list: any[];
  record: any;
  dispatch: (action: Action) => void;
};

export function ClienteList({
  schema,
  selected,
  orderBy,
  where,
  status,
  list,
  record,
  dispatch,
}: PhonebookProps) {
  return (
    <>
      <div className="h-auto px-2 overflow-auto border-gray-400 border-1">
        <p className="mt-2 font-black">Quantidade</p>
        <Datatable
          data={list}
          schema={schema}
        />
        <p className="mt-2 font-black">Valor Venda</p>
        <Datatable
          data={list}
          schema={schema}
        />
        <p className="mt-2 font-black">Valor Médio</p>
        <Datatable
          data={list}
          schema={schema}
        />
      </div>
    </>
  );
}
