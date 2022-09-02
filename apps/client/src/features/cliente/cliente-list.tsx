import type { Action, Id, Order, Schema, Where } from "@er/types/*";
import { Datatable } from "../../components";

type PhonebookProps = {
  schema: Schema;
  selected: Id;
  orderBy: Order[];
  where: Where[];
  status: string;
  list: any[];
  record: any;
  dispatch: (action: Action) => void;
};

export function ClienteList({ schema, list }: PhonebookProps) {
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
