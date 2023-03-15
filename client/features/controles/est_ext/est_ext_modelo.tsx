import React from "react";
import { esterilizacaoExternaStore } from "../../../../model/esterilizacao-externa/esterilizacao-externa.store";
import { Table } from "../../../components/table/table";

type EsterilizacaoExternaModeloProp = {
  diaCorrente: { dia?: string };
  produtoCorrente: { produto?: string };
  onSelect: (event: any) => void;
};

const { getSchemaModelo, getModelo } = esterilizacaoExternaStore.getState();

export function EsterilizacaoExternaModelo({
  diaCorrente,
  produtoCorrente,
  onSelect,
}: EsterilizacaoExternaModeloProp) {
  const dataSchemaModelo = esterilizacaoExternaStore(
    (state) => state.dataSchemaModelo
  );
  const dataModelo = esterilizacaoExternaStore((state) => state.dataModelo);

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
