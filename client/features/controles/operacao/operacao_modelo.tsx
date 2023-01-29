import React from "react";
import { TEvent, TFieldClient } from "../../../../types";
import { isEmpty } from "../../../../utils/identify/is_empty";
import { Table } from "../../../components/table/table";
import { operacaoService } from "../../../service/operacao.service";

type OperacaoModelProps = {
  operacao: { operacao?: string };
  dia: { dia?: string };
  produto: { produto?: string };
  children?: React.ReactNode;
  onSelectEvent?: (event: TEvent) => void;
};

export function OperacaoModelo({ operacao, dia, produto }: OperacaoModelProps) {
  const [schema, setSchema] = React.useState<TFieldClient[]>([]);
  const [data, setData] = React.useState<TFieldClient[]>([]);

  React.useEffect(() => {
    async function getSchema() {
      const rsp = await operacaoService.schemaModelo();
      setSchema(rsp);
    }
    getSchema();
  }, []);

  React.useEffect(() => {
    async function getData() {
      if (
        isEmpty(operacao.operacao) ||
        isEmpty(dia.dia) ||
        isEmpty(produto.produto)
      ) {
        setData([]);
        return;
      }

      const rsp = await operacaoService.modelo(
        operacao.operacao || "",
        dia.dia || "",
        produto.produto || ""
      );
      setData(rsp);
    }
    getData();
  }, [dia, operacao, produto]);

  return (
    <Table
      name="modelo"
      data={data}
      schema={schema}
    ></Table>
  );
}
