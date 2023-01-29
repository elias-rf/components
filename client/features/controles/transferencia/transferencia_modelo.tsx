import React from "react";
import { TFieldClient } from "../../../../types";
import { Table } from "../../../components/table/table";
import { transferenciaService } from "../../../service/transferencia.service";

type TransferenciaModeloProps = {
  diaCorrente: { dia?: string };
  children?: React.ReactNode;
};

export function TransferenciaModelo({
  diaCorrente,
  children,
}: TransferenciaModeloProps) {
  const [schema, setSchema] = React.useState<TFieldClient[]>([]);
  const [data, setData] = React.useState<TFieldClient[]>([]);

  React.useEffect(() => {
    async function getSchema() {
      const rsp = await transferenciaService.schemaModelo();
      setSchema(rsp);
    }
    getSchema();
  }, []);

  React.useEffect(() => {
    async function getData() {
      const rsp = await transferenciaService.modelo(diaCorrente.dia || "");
      setData(rsp);
    }
    getData();
  }, [diaCorrente]);

  return (
    <Table
      name="modelo"
      data={data}
      schema={schema}
    >
      {children}
    </Table>
  );
}
