import React from "react";
import { TEvent, TFieldClient } from "../../../../types";
import { cache } from "../../../../utils/cache";
import { Table } from "../../../components/table/table";
import { esterilizacaoExternaService } from "../../../service/esterilizacao-externa.service";

type EsterilizacaoExternaMensalProp = {
  children?: React.ReactNode;
  mesCorrente: { mes?: string };
  mesInicial: { mes: string };
  onSelectEvent?: (event: TEvent) => void;
};

export function EsterilizacaoExternaMensal({
  mesInicial,
  mesCorrente,
  onSelectEvent,
  children,
}: EsterilizacaoExternaMensalProp) {
  const [schema, setSchema] = React.useState<TFieldClient[]>([]);
  const [data, setData] = React.useState<TFieldClient[]>([]);

  React.useEffect(() => {
    async function getSchema() {
      const rsp = await cache.fetch({
        key: "esterilizacaoExternaService.schemaMensal",
        callback: esterilizacaoExternaService.schemaMensal,
      });
      setSchema(rsp);
    }
    getSchema();
  }, []);

  React.useEffect(() => {
    async function getData() {
      const rsp = await cache.fetch({
        key: "esterilizacaoExternaService.mensal",
        callback: esterilizacaoExternaService.mensal,
        args: [mesInicial.mes],
      });
      setData(rsp);
    }
    getData();
  }, [mesInicial]);

  return (
    <Table
      name="mensal"
      data={data}
      schema={schema}
      selected={mesCorrente}
      onSelectEvent={onSelectEvent}
    >
      {children}
    </Table>
  );
}
