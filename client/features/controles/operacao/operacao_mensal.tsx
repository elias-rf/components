import React from "react";
import { TEvent, TFieldClient, TIds } from "../../../../types";
import { cache } from "../../../../utils/cache";
import { Table } from "../../../components/table/table";
import { operacaoService } from "../../../service/operacao.service";

type OperacaoMensalProps = {
  operacao: TIds;
  mesInicial: TIds;
  mesCorrente: TIds;
  children?: React.ReactNode;
  onSelectEvent?: (event: TEvent) => void;
};

export function OperacaoMensal({
  operacao,
  mesInicial,
  mesCorrente,
  children,
  onSelectEvent,
}: OperacaoMensalProps) {
  const [schema, setSchema] = React.useState<TFieldClient[]>([]);
  const [data, setData] = React.useState<TFieldClient[]>([]);

  React.useEffect(() => {
    async function getSchema() {
      const rsp = await cache.fetch({
        key: "operacaoService.schemaMensal",
        callback: operacaoService.schemaMensal,
      });
      setSchema(rsp);
    }
    getSchema();
  }, []);

  React.useEffect(() => {
    async function getData() {
      const rsp = await cache.fetch({
        key: "operacaoService.mensal",
        callback: operacaoService.mensal,
        args: [operacao.operacao, mesInicial.mes],
      });
      setData(rsp);
    }
    getData();
  }, [mesInicial, operacao]);

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
