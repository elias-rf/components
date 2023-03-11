import React, { ReactNode } from "react";
import { ordemProducaoOperacaoStore } from "../../../../model/ordem-producao-operacao/ordem-producao-operacao.store";
import { TEvent } from "../../../../types";
import { Table } from "../../../components/table/table";

type OperacaoProdutoProps = {
  operacao: { operacao?: string };
  dia: { dia?: string };
  produtoCorrente: { produto?: string };
  children?: ReactNode;
  onSelectEvent?: (event: TEvent) => void;
};

export function OperacaoProduto({
  operacao,
  dia,
  children,
  produtoCorrente,
  onSelectEvent,
}: OperacaoProdutoProps) {
  const getSchema = ordemProducaoOperacaoStore(
    (state) => state.getProdutoSchema
  );
  const schema = ordemProducaoOperacaoStore((state) => state.dataProdutoSchema);
  const getProduto = ordemProducaoOperacaoStore((state) => state.getProduto);
  const produto = ordemProducaoOperacaoStore((state) => state.dataProduto);

  React.useEffect(() => {
    getSchema();
  }, []);

  React.useEffect(() => {
    getProduto({ operacao: operacao.operacao || "", data: dia.dia || "" });
  }, [dia, operacao]);

  return (
    <Table
      name="produto"
      data={produto}
      schema={schema}
      selected={produtoCorrente}
      onSelectEvent={onSelectEvent}
    >
      {children}
    </Table>
  );
}
