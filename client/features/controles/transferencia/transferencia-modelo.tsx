import { Table } from "@/client/components/table";
import { trpc } from "@/rpc/utils/trpc";
import React from "react";
import { transferenciaModeloSchema } from "./transferencia-modelo_schema";

type TransferenciaModeloProps = {
  diaCorrente: { dia?: string }[];
  children?: React.ReactNode;
};

export function TransferenciaModelo({
  diaCorrente,
  children,
}: TransferenciaModeloProps) {
  const dataTransferenciaModelo = trpc.nfSaida.transferenciaModelo.useQuery({
    data: diaCorrente[0]?.dia || "",
  });

  return (
    <Table
      rows={dataTransferenciaModelo.data}
      columns={transferenciaModeloSchema}
    >
      {() => <>{children}</>}
    </Table>
  );
}
