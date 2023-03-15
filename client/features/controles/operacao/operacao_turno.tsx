import React from "react";
import { ordemProducaoOperacaoStore } from "../../../../model/ordem-producao-operacao/ordem-producao-operacao.store";
import { Table } from "../../../components/table/table";

type OperacaoTurnoProps = {
  operacao: { operacao?: string };
  dia: { dia?: string };
  onSelect?: (event: any) => void;
};

export function OperacaoTurno({ operacao, dia, onSelect }: OperacaoTurnoProps) {
  const getSchema = ordemProducaoOperacaoStore((state) => state.getTurnoSchema);
  const schema = ordemProducaoOperacaoStore((state) => state.dataTurnoSchema);
  const getTurno = ordemProducaoOperacaoStore((state) => state.getTurno);
  const turno = ordemProducaoOperacaoStore((state) => state.dataTurno);

  React.useEffect(() => {
    getSchema();
  }, []);

  React.useEffect(() => {
    getTurno({
      operacao: operacao.operacao || "",
      data: dia.dia || "",
    });
  }, [dia, operacao]);

  return (
    <Table
      data={turno}
      schema={schema}
      onSelect={onSelect}
    ></Table>
  );
}
