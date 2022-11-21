import React from "react";
import { TransferenciaDiario } from "./transferencia_diario";
import { TransferenciaMensal } from "./transferencia_mensal";
import { TransferenciaModelo } from "./transferencia_modelo";

export function Transferencia() {
  const [mesCorrente, setMesCorrente] = React.useState([]);
  const [diaCorrente, setDiaCorrente] = React.useState([]);

  function handleDispatchMensal(action: any) {
    switch (action.type) {
      case tableActionTypes.select:
        setMesCorrente(action.payload);
        break;
    }
  }
  function handleDispatchDiario(action: any) {
    switch (action.type) {
      case tableActionTypes.select:
        setDiaCorrente(action.payload);
        break;
    }
  }

  return (
    <div className="flex">
      <div className="p-2">
        <TransferenciaMensal
          selected={mesCorrente}
          dispatch={handleDispatchMensal}
          mesCorrente={mesCorrente}
        >
          <TransferenciaDiario
            selected={diaCorrente}
            dispatch={handleDispatchDiario}
            diaCorrente={diaCorrente}
            mesCorrente={mesCorrente}
          >
            <TransferenciaModelo diaCorrente={diaCorrente} />
          </TransferenciaDiario>
        </TransferenciaMensal>
      </div>
      <div className="p-2"></div>
    </div>
  );
}
