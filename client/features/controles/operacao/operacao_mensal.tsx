import React from "react";
import { ordemProducaoOperacaoStore } from "../../../../model/ordem-producao-operacao/ordem-producao-operacao.store";
import { TEvent, TIds } from "../../../../types";
import { Table } from "../../../components/table/table";

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
  const getSchema = ordemProducaoOperacaoStore(
    (state) => state.getMensalSchema
  );
  const schema = ordemProducaoOperacaoStore((state) => state.dataMensalSchema);
  const getMensal = ordemProducaoOperacaoStore((state) => state.getMensal);
  const mensal = ordemProducaoOperacaoStore((state) => state.dataMensal);

  React.useEffect(() => {
    getSchema();
  }, []);

  React.useEffect(() => {
    getMensal({ operacao: operacao.operacao, mes: mesInicial.mes });
  }, [mesInicial, operacao]);

  return (
    <Table
      name="mensal"
      data={mensal}
      schema={schema}
      selected={mesCorrente}
      onSelectEvent={onSelectEvent}
    >
      {children}
    </Table>
  );
}
