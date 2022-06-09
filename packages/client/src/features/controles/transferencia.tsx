import Datatable, { tableActionTypes } from "@/features/ui/table/table";
import day from "@/lib/day";
import React from "react";
import type { Action } from "../../..";
import TransferenciaService from "../../service/transferencia.service";

export default function Transferencia() {
  const transferenciaSvc = TransferenciaService();

  const [mesCorrente, setMesCorrente] = React.useState([]);
  const [diaCorrente, setDiaCorrente] = React.useState([]);

  const [mensalData, setMensalData] = React.useState([] as any[]);
  const [diariaData, setDiariaData] = React.useState([] as any[]);
  const [modeloData, setModeloData] = React.useState([] as any[]);

  const mensalSchema = transferenciaSvc.schemaMensal();
  const diariaSchema = transferenciaSvc.schemaDiario();
  const modeloSchema = transferenciaSvc.schemaModelo();

  React.useEffect(() => {
    transferenciaSvc
      .mensal(day().subtract(13, "month").format("YYYY-MM"))
      .then(setMensalData);
    transferenciaSvc
      .diario(
        day(mesCorrente[0] + "-01")
          .startOf("month")
          .format("YYYY-MM-DD"),
        day(mesCorrente[0] + "-01")
          .endOf("month")
          .format("YYYY-MM-DD")
      )
      .then(setDiariaData);
    transferenciaSvc.modelo(diaCorrente[0]).then(setModeloData);
  }, [mesCorrente, diaCorrente]);

  function handleDispatchMensal(action: Action) {
    switch (action.type) {
      case tableActionTypes.select:
        setMesCorrente(action.payload);
        break;
    }
  }
  function handleDispatchDiario(action: Action) {
    switch (action.type) {
      case tableActionTypes.select:
        setDiaCorrente(action.payload);
        break;
    }
  }

  return (
    <div className="flex">
      <div className="p-2">
        <Datatable
          data={mensalData}
          schema={mensalSchema}
          selected={mesCorrente}
          dispatch={handleDispatchMensal}
        >
          <Datatable
            data={diariaData}
            schema={diariaSchema}
            selected={diaCorrente}
            dispatch={handleDispatchDiario}
          >
            <Datatable
              data={modeloData}
              schema={modeloSchema}
            />
          </Datatable>
        </Datatable>
      </div>
      <div className="p-2"></div>
    </div>
  );
}
