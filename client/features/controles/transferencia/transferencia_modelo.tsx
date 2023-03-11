import React from "react";
import { nfSaidaStore } from "../../../../model/nf-saida/nf-saida.store";
import { Table } from "../../../components/table/table";

type TransferenciaModeloProps = {
  diaCorrente: { dia?: string };
  children?: React.ReactNode;
};

export function TransferenciaModelo({
  diaCorrente,
  children,
}: TransferenciaModeloProps) {
  const [dataTransferenciaModeloSchema, getTransferenciaModeloSchema] =
    nfSaidaStore((state) => [
      state.dataTransferenciaModeloSchema,
      state.getTransferenciaModeloSchema,
    ]);
  const [dataTransferenciaModelo, getTransferenciaModelo] = nfSaidaStore(
    (state) => [state.dataTransferenciaModelo, state.getTransferenciaModelo]
  );

  React.useEffect(() => {
    getTransferenciaModeloSchema();
  }, []);

  React.useEffect(() => {
    getTransferenciaModelo({ data: diaCorrente.dia || "" });
  }, [diaCorrente]);

  return (
    <Table
      name="modelo"
      data={dataTransferenciaModelo}
      schema={dataTransferenciaModeloSchema}
    >
      {children}
    </Table>
  );
}
