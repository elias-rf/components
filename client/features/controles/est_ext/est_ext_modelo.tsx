import React from "react";
import { esterilizacaoExternaStore } from "../../../../model/esterilizacao-externa/esterilizacao-externa.store";
import { TEvent } from "../../../../types";
import { Table } from "../../../components/table/table";

type EsterilizacaoExternaModeloProp = {
  diaCorrente: { dia?: string };
  produtoCorrente: { produto?: string };
  onSelectEvent: (event: TEvent) => void;
};

const { getSchemaModelo, getModelo } = esterilizacaoExternaStore.getState();

export function EsterilizacaoExternaModelo({
  diaCorrente,
  produtoCorrente,
  onSelectEvent,
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
      onSelectEvent={onSelectEvent}
    ></Table>
  );
}
