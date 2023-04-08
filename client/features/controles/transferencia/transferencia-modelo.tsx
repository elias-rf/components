import React from "react";
import { trpc } from "../../../../utils/trpc/trpc";
import { Table } from "../../../components/table/table";
import { transferenciaModeloSchema } from "./transferencia-modelo.schema";

type TransferenciaModeloProps = {
  diaCorrente: { dia?: string };
  children?: React.ReactNode;
};

export function TransferenciaModelo({
  diaCorrente,
  children,
}: TransferenciaModeloProps) {
  const dataTransferenciaModelo = trpc.nfSaida.transferenciaModelo.useQuery({
    data: diaCorrente.dia || "",
  });

  return (
    <Table
      name="modelo"
      data={dataTransferenciaModelo.data}
      schema={transferenciaModeloSchema}
    >
      {children}
    </Table>
  );
}