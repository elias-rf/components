import React from "react";
import { TEvent } from "../../../../types";
import { TransferenciaDiario } from "./transferencia_diario";
import { TransferenciaMensal } from "./transferencia_mensal";
import { TransferenciaModelo } from "./transferencia_modelo";

export function Transferencia() {
  const [mesCorrente, setMesCorrente] = React.useState({});
  const [diaCorrente, setDiaCorrente] = React.useState({});

  function handleOnChangeEvent(event: TEvent) {
    if (event.name === "mensal") setMesCorrente(event.value);
    if (event.name === "diario") setDiaCorrente(event.value);
  }

  return (
    <div className="flex">
      <div className="p-2">
        <TransferenciaMensal
          mesCorrente={mesCorrente}
          onSelectEvent={handleOnChangeEvent}
        >
          <TransferenciaDiario
            onSelectEvent={handleOnChangeEvent}
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
