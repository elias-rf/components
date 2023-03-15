import React from "react";
import { esterilizacaoInternaStore } from "../../../../model/esterilizacao-interna/esterilizacao-interna.store";
import { Table } from "../../../components/table/table";

type EsterilizacaoInternaModeloProp = {
  diaCorrente: { dia?: string };
  produtoCorrente: { produto?: string };
  onSelect: (event: any) => void;
};
const { getSchemaModelo, getModelo } = esterilizacaoInternaStore.getState();

export function EsterilizacaoInternaModelo({
  diaCorrente,
  produtoCorrente,
  onSelect,
}: EsterilizacaoInternaModeloProp) {
  const dataSchemaModelo = esterilizacaoInternaStore(
    (state) => state.dataSchemaModelo
  );
  const dataModelo = esterilizacaoInternaStore((state) => state.dataModelo);

  React.useEffect(() => {
    getSchemaModelo();
  }, []);

  React.useEffect(() => {
    getModelo({
      data: diaCorrente.dia || "",
      produto: produtoCorrente.produto || "",
    });
  }, [diaCorrente, produtoCorrente]);

  return (
    <Table
      name="modelo"
      data={dataModelo}
      schema={dataSchemaModelo}
      onSelect={onSelect}
    ></Table>
  );
}
