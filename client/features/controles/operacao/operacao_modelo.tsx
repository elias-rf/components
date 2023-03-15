import React from "react";
import { ordemProducaoOperacaoStore } from "../../../../model/ordem-producao-operacao/ordem-producao-operacao.store";
import { Table } from "../../../components/table/table";

type OperacaoModelProps = {
  operacao: { operacao?: string };
  dia: { dia?: string };
  produto: { produto?: string };
  children?: React.ReactNode;
  onSelectEvent?: (event: any) => void;
};

export function OperacaoModelo({ operacao, dia, produto }: OperacaoModelProps) {
  const getSchema = ordemProducaoOperacaoStore(
    (state) => state.getModeloSchema
  );
  const schema = ordemProducaoOperacaoStore((state) => state.dataModeloSchema);
  const getModelo = ordemProducaoOperacaoStore((state) => state.getModelo);
  const modelo = ordemProducaoOperacaoStore((state) => state.dataModelo);

  React.useEffect(() => {
    getSchema();
  }, []);

  React.useEffect(() => {
    getModelo({
      operacao: operacao.operacao || "",
      data: dia.dia || "",
      produto: produto.produto || "",
    });
  }, [dia, operacao, produto]);

  return (
    <Table
      name="modelo"
      data={modelo}
      schema={schema}
    ></Table>
  );
}
