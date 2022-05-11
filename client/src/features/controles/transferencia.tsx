import React from "react";
import Datatable from "@/features/ui/table/table";
import day from "@/lib/day";

import DataContext, { ClientContext } from "@/contexts/data-context";

import TransferenciaMensalService from "@/features/transferencia/transferencia-mensal.service";
import TransferenciaDiariaService from "@/features/transferencia/transferencia-diaria.service";
import TransferenciaModeloService from "@/features/transferencia/transferencia-modelo.service";
import type { Schema } from "types";

export default function Transferencia() {
  const { clientKnex } = React.useContext(DataContext) as ClientContext;

  const mensalSvc = TransferenciaMensalService(clientKnex);
  const diariaSvc = TransferenciaDiariaService(clientKnex);
  const modeloSvc = TransferenciaModeloService(clientKnex);

  const [mesCorrente, setMesCorrente] = React.useState([]);
  const [diaCorrente, setDiaCorrente] = React.useState([]);

  const [mensalData, setMensalData] = React.useState([]);
  const [diariaData, setDiariaData] = React.useState([]);
  const [modeloData, setModeloData] = React.useState([]);

  const [mensalSchema, setMensalSchema] = React.useState({} as Schema);
  const [diariaSchema, setDiariaSchema] = React.useState({} as Schema);
  const [modeloSchema, setModeloSchema] = React.useState({} as Schema);

  // schemas
  React.useEffect(() => {
    mensalSvc.schema().then(setMensalSchema);
    diariaSvc.schema().then(setDiariaSchema);
    modeloSvc.schema().then(setModeloSchema);
  }, []);

  React.useEffect(() => {
    mensalSvc
      .list(day().subtract(13, "month").format("YYYY-MM"))
      .then(setMensalData);
    diariaSvc
      .list(
        day(mesCorrente[0] + "-01")
          .startOf("month")
          .format("YYYY-MM-DD"),
        day(mesCorrente[0] + "-01")
          .endOf("month")
          .format("YYYY-MM-DD")
      )
      .then(setDiariaData);
    modeloSvc.list(diaCorrente[0]).then(setModeloData);
  }, [mesCorrente, diaCorrente]);

  return (
    <div className="flex">
      <div className="p-2">
        <Datatable
          data={mensalData}
          schema={mensalSchema}
          selected={mesCorrente}
          onSelect={setMesCorrente}
        >
          <Datatable
            data={diariaData}
            schema={diariaSchema}
            selected={diaCorrente}
            onSelect={setDiaCorrente}
          >
            <Datatable data={modeloData} schema={modeloSchema} />
          </Datatable>
        </Datatable>
      </div>
      <div className="p-2"></div>
    </div>
  );
}
